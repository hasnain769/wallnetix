import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, phone, message } = body;

        // Simple server-side validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure Nodemailer Transporter (Resend SMTP)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.resend.com',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER || 'resend',
                pass: process.env.SMTP_PASS,
            },
        });

        const fromAddress = process.env.CONTACT_EMAIL_FROM || 'Walnetix <contact@walnetix.com>';
        const adminEmail = process.env.CONTACT_EMAIL_TO || 'Waleed.mayar123@gmail.com, syedhasnain769@gmail.com';

        const logoUrl = 'https://walnetix.com/Logo.png';

        // 1. Send Notification to Admin
        const adminMailOptions = {
            from: fromAddress,
            to: adminEmail,
            subject: `New Lead: ${name} from ${company || 'Unknown Company'}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="text-align: center; margin-bottom: 0px;">
                        <img src="${logoUrl}" alt="Walnetix Logo" style="max-width: 180px; display: inline-block;" />
                    </div>
                    <h2 style="color: #182C7C; text-align: center; margin-top: 10px; margin-bottom: 20px;">New Website Inquiry</h2>
                    <div style="text-align: left; color: #334155; font-size: 16px; line-height: 1.5;">
                        <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 5px 0;"><strong>Company:</strong> ${company || 'N/A'}</p>
                        <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || 'N/A'}</p>
                        <br/>
                        <p style="margin: 5px 0;"><strong>Message:</strong></p>
                        <p style="margin: 5px 0;">${message.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>
            `,
        };

        // 2. Send Confirmation to User
        const userMailOptions = {
            from: fromAddress,
            to: email,
            subject: 'We received your message - Walnetix',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
                    <div style="text-align: center; margin-bottom: 0px;">
                        <img src="${logoUrl}" alt="Walnetix Logo" style="max-width: 180px; display: inline-block;" />
                    </div>
                    <h2 style="color: #182C7C; text-align: center; margin-top: 10px; margin-bottom: 20px; font-size: 24px;">Thanks for contacting Walnetix!</h2>
                    <div style="color: #334155; line-height: 1.6;">
                        <p>Hi ${name},</p>
                        <p>We've received your inquiry and our team is already reviewing it.</p>
                        <p>We typically reply within 2 hours, but in busy conditions it may take up to 24 hours to schedule your free consultation.</p>
                        <br/>
                        <p>Best regards,</p>
                        <p><strong>The Walnetix Team</strong></p>
                        <p><a href="https://walnetix.com" style="color: #06B6D4; text-decoration: none;">www.walnetix.com</a></p>
                    </div>
                </div>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions),
        ]);

        return NextResponse.json({ success: true, message: 'Emails sent successfully' });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { error: 'Failed to send emails' },
            { status: 500 }
        );
    }
}
