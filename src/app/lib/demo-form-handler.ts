import { submitDemoRequest } from "./api";

export async function handleDemoSubmit(formData: FormData) {
  const firstName = (formData.get("firstName") as string) || "";
  const lastName = (formData.get("lastName") as string) || "";
  const fallbackName = (formData.get("name") as string) || "";
  const name = [firstName, lastName].filter(Boolean).join(" ") || fallbackName;

  const email = (formData.get("email") as string) || "";
  const company = (formData.get("company") as string) || undefined;
  const companyWebsite = (formData.get("companyWebsite") as string) || undefined;
  const role = (formData.get("jobTitle") as string) || (formData.get("role") as string) || undefined;
  const team_size = (formData.get("companySize") as string) || (formData.get("team_size") as string) || undefined;
  const currentTools = (formData.get("currentTools") as string) || "";
  const department = (formData.get("department") as string) || "";
  const challenge = (formData.get("challenge") as string) || "";
  const additionalInfo = (formData.get("additionalInfo") as string) || "";
  const phone = (formData.get("phone") as string) || "";
  const selectedChallenges = (formData.get("notes") as string) || ""; // appended upstream as comma list
  const preferredDate = (formData.get("preferredDate") as string) || undefined;
  const preferredTime = (formData.get("preferredTime") as string) || undefined;
  const timezone = (formData.get("timezone") as string) || undefined;

  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  const noteParts = [
    selectedChallenges ? `Challenges: ${selectedChallenges}` : "",
    department ? `Department: ${department}` : "",
    challenge ? `Primary challenge: ${challenge}` : "",
    currentTools ? `Current tools: ${currentTools}` : "",
    additionalInfo ? `Notes: ${additionalInfo}` : "",
    phone ? `Phone: ${phone}` : "",
  ].filter(Boolean);

  const notes = noteParts.join(" | ") || undefined;

  const result = await submitDemoRequest({ 
    name, 
    email, 
    company, 
    company_website: companyWebsite, 
    role, 
    team_size, 
    notes,
    preferred_date: preferredDate,
    preferred_time: preferredTime,
    timezone
  });

  // Send to webhook with database record ID
  try {
    await fetch("https://n8nautomation.site/webhook/e329de04-0b15-445f-a009-902de0b61601", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: result.id,
        firstName,
        lastName,
        name,
        email,
        company,
        companyWebsite,
        role,
        team_size,
        department,
        challenge,
        selectedChallenges,
        currentTools,
        additionalInfo,
        phone,
        notes,
        preferredDate,
        preferredTime,
        timezone
      })
    });
  } catch (err) {
    console.error("Failed to send to webhook:", err);
  }

  return result;
}
