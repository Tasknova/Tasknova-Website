import "jsr:@supabase/functions-js/edge-runtime.d.ts";

/**
 * Job Application Notification Handler
 * Sends notification to website admin when a candidate submits a job application
 */

interface JobApplicationPayload {
  // Applicant details
  applicantId: string;
  fullName: string;
  email: string;
  phone: string;
  experienceYears: number;
  portfolioUrl?: string;
  resumeUrl: string;
  coverLetter?: string;
  answers?: {
    why_tasknova?: string;
    notice_period?: string;
    preferred_location?: string;
  };
  
  // Job details
  jobId: string;
  jobTitle: string;
  jobDepartment: string;
  jobLocation: string;
  jobType: string;
  jobDescription: string;
}

Deno.serve(async (req: Request) => {
  // CORS headers
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    // Only accept POST requests
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const payload: JobApplicationPayload = await req.json();
    
    console.log('📋 New job application received');
    console.log('👤 Applicant:', payload.fullName);
    console.log('💼 Position:', payload.jobTitle);
    console.log('🆔 Applicant ID:', payload.applicantId);
    console.log('🆔 Job ID:', payload.jobId);

    // Validate required fields
    if (!payload.applicantId || !payload.jobId) {
      console.error('❌ Missing required IDs');
      return new Response(JSON.stringify({ 
        error: 'applicantId and jobId are required',
        success: false 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get notification webhook URL from environment
    const webhookUrl = Deno.env.get('JOB_APPLICATION_WEBHOOK_URL');
    
    if (!webhookUrl) {
      console.warn('⚠️ JOB_APPLICATION_WEBHOOK_URL not configured');
      console.log('📧 Application details logged but no notification sent');
      
      return new Response(JSON.stringify({ 
        success: true,
        message: 'Application received but notifications not configured',
        applicantId: payload.applicantId,
        jobId: payload.jobId
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Prepare notification payload
    const notificationPayload = {
      type: 'job_application',
      timestamp: new Date().toISOString(),
      
      // Database IDs
      applicant_id: payload.applicantId,
      job_id: payload.jobId,
      
      // Applicant information
      applicant: {
        name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        experience_years: payload.experienceYears,
        portfolio_url: payload.portfolioUrl || null,
        resume_url: payload.resumeUrl,
        preferred_location: payload.answers?.preferred_location || null,
      },
      
      // Job information
      job: {
        title: payload.jobTitle,
        department: payload.jobDepartment,
        location: payload.jobLocation,
        type: payload.jobType,
        description: payload.jobDescription,
      },
      
      // Application details
      application: {
        cover_letter: payload.coverLetter || null,
        why_tasknova: payload.answers?.why_tasknova || null,
        notice_period: payload.answers?.notice_period || null,
      },
      
      // Links
      links: {
        resume: payload.resumeUrl,
        portfolio: payload.portfolioUrl || null,
        admin_panel: `https://supabase.com/dashboard/project/qdeqpgixanmuzonsoeou/editor/${payload.applicantId}`,
      }
    };

    console.log('📤 Sending notification to webhook...');

    // Send notification to configured webhook (e.g., n8n, Zapier, Make.com, etc.)
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notificationPayload),
    });

    if (!response.ok) {
      console.error('❌ Webhook notification failed:', response.status);
      throw new Error(`Webhook returned status ${response.status}`);
    }

    console.log('✅ Notification sent successfully');

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Application notification sent',
      applicantId: payload.applicantId,
      jobId: payload.jobId,
      notificationSent: true
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('❌ Error processing application notification:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error', 
      message: error instanceof Error ? error.message : 'Unknown error',
      success: false
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
