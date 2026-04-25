import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { ContactSchema } from '@/lib/schemas';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing from environment variables');
      return NextResponse.json({ 
        success: false, 
        message: 'Server configuration error: API key missing.' 
      }, { status: 500 });
    }
    const resend = new Resend(apiKey);
    const body = await req.json();

    const validatedData = ContactSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: 'ThiraiTerra Verification <onboarding@resend.dev>',
      to: ['thiraiterra@gmail.com'],
      reply_to: validatedData.email,
      subject: `[ThiraiTerra] New Inquiry: ${validatedData.subject || 'Profile Request'}`,
      html: `
        <div style="font-family: sans-serif; background: #081624; color: #F5F5F5; padding: 40px; border-radius: 12px;">
          <h1 style="color: #D88A4A; margin-bottom: 24px;">New Strategic Inquiry</h1>
          <p><strong>From:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0;">${validatedData.message}</p>
          </div>
          <p style="margin-top: 40px; font-size: 12px; color: #94A3B8;">
            This email was sent via ThiraiTerra Secure Infrastructure. Advancing Cinematic Innovation.
          </p>
        </div>
      `,
    });


    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ 
        success: false,
        message: error.message || 'Resend API failed' 
      }, { status: 500 });
    }

    // Send auto-reply to the user
    // NOTE: This will only work with 'onboarding@resend.dev' if the recipient is the same as the Resend account email.
    // For production, you must verify your domain in the Resend dashboard.
    try {
      await resend.emails.send({
        from: 'ThiraiTerra <onboarding@resend.dev>',
        to: [validatedData.email],
        subject: 'Thank you for your inquiry - ThiraiTerra',
        html: `
          <div style="font-family: sans-serif; background: #081624; color: #F5F5F5; padding: 40px; border-radius: 12px;">
            <h1 style="color: #D88A4A; margin-bottom: 24px;">Inquiry Received</h1>
            <p>Dear ${validatedData.name},</p>
            <p>Thank you for reaching out to ThiraiTerra. We have received your inquiry regarding <strong>"${validatedData.subject || 'General Inquiry'}"</strong> and our team will get back to you shortly.</p>
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; font-style: italic; opacity: 0.8;">"${validatedData.message}"</p>
            </div>
            <p style="margin-top: 40px; font-size: 12px; color: #94A3B8;">
              Best Regards,<br/>
              The ThiraiTerra Team
            </p>
          </div>
        `,
      });
    } catch (autoReplyError) {
      // We don't want to fail the whole request if auto-reply fails, but we'll log it
      console.error('Auto-reply failed:', autoReplyError);
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Contact Form Error:', error);
    return NextResponse.json({ 
      success: false,
      message: error.message || 'Internal Server Error',
      details: error.errors || null 
    }, { status: 500 });
  }
}
