import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple honeypot and validation to prevent basic bot spam
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, botField } = body;

        // 1. Honeypot check: If botField is filled, it's likely a bot
        if (botField) {
            console.warn('Bot detected via honeypot');
            return NextResponse.json({ message: 'Email processed' }, { status: 200 }); // Return success to fool the bot
        }

        // 2. Basic Validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        // 3. Check Credentials
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('CRITICAL: Email credentials are not defined in environment variables');
            return NextResponse.json({ error: 'Mail server configuration error' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 4. Verify Connection (Production Best Practice)
        try {
            await transporter.verify();
        } catch (verifyError) {
            console.error('SMTP Connection Error:', verifyError);
            return NextResponse.json({ error: 'Mail service temporarily unavailable' }, { status: 503 });
        }

        const mailOptions = {
            from: {
                name: 'Little More Altitude Website',
                address: process.env.EMAIL_USER
            },
            to: 'alittlemorealtitude25@gmail.com',
            replyTo: email, // Important for replying directly to the user
            subject: `🏔️ New Lead: ${name} is ready for an adventure!`,
            text: `
                NEW CONTACT FORM SUBMISSION
                ---------------------------
                Name: ${name}
                Email: ${email}
                Phone: ${phone || 'N/A'}
                
                Message:
                ${message}
            `,
            html: `
                <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <div style="background-color: #0c0c0c; padding: 40px 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -0.025em; text-transform: uppercase;">
                            <span style="color: #8c7355;">Little</span> More Altitude
                        </h1>
                        <p style="color: #a3a3a3; margin-top: 8px; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em;">New Expedition Inquiry</p>
                    </div>

                    <div style="padding: 40px 30px;">
                        <div style="margin-bottom: 30px;">
                            <h2 style="color: #0c0c0c; font-size: 18px; font-weight: 800; margin-bottom: 20px; border-bottom: 2px solid #8c7355; display: inline-block; padding-bottom: 4px;">Explorer Details</h2>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 12px 0; color: #737373; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 120px;">Name</td>
                                    <td style="padding: 12px 0; color: #0c0c0c; font-size: 16px; font-weight: 700;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; color: #737373; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                                    <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #8c7355; text-decoration: none; font-size: 16px; font-weight: 700;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; color: #737373; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
                                    <td style="padding: 12px 0; color: #0c0c0c; font-size: 16px; font-weight: 700;">${phone || 'Not Provided'}</td>
                                </tr>
                            </table>
                        </div>

                        <div style="background-color: #f8fafc; padding: 30px; border-radius: 12px; border-left: 4px solid #8c7355;">
                            <h2 style="color: #0c0c0c; font-size: 16px; font-weight: 800; margin-top: 0; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em;">The Message</h2>
                            <p style="color: #404040; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>

                    <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                        <p style="color: #64748b; font-size: 12px; margin: 0;">This email was sent from the contact form on <strong>littlemorealtitude.com</strong></p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('CRITICAL: Unexpected server error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
