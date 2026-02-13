import { submitDemoRequest } from "./api";

export async function handleDemoSubmit(formData: FormData) {
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const company = (formData.get("company") as string) || undefined;
  const role = (formData.get("role") as string) || undefined;
  const team_size = (formData.get("team_size") as string) || undefined;
  const notes = (formData.get("notes") as string) || undefined;

  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  return submitDemoRequest({ name, email, company, role, team_size, notes });
}
