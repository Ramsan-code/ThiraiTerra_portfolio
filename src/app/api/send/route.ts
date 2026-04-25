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
