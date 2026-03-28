import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Missing name or email" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service not configured" });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "MaiGrowth <contact@maigrowth.com>",
      to: [email],
      subject: "Thank You for Contacting MaiGrowth!",
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #12153D; padding: 40px 40px 32px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 28px; font-weight: 800; margin: 0; letter-spacing: -0.5px;">
              Mai<span style="color: #FF6B35;">Growth</span>
            </h1>
          </div>
          <div style="padding: 40px;">
            <p style="color: #0F0F0F; font-size: 16px; line-height: 1.7; margin: 0 0 16px;">
              Hi ${name},
            </p>
            <p style="color: #0F0F0F; font-size: 16px; line-height: 1.7; margin: 0 0 16px;">
              Thank you for reaching out to MaiGrowth!
            </p>
            <p style="color: #3D3D3D; font-size: 16px; line-height: 1.7; margin: 0 0 16px;">
              We've received your message and will get back to you within 24 hours.
            </p>
            <p style="color: #3D3D3D; font-size: 16px; line-height: 1.7; margin: 0 0 32px;">
              In the meantime, feel free to explore our services at
              <a href="https://maigrowth.com" style="color: #FF6B35; text-decoration: none;">maigrowth.com</a>.
            </p>
            <div style="border-top: 1px solid #E2E0DC; padding-top: 24px; margin-top: 8px;">
              <p style="color: #767676; font-size: 14px; line-height: 1.6; margin: 0;">
                Best regards,<br/>
                <strong style="color: #0F0F0F;">The MaiGrowth Team</strong><br/>
                <a href="mailto:contact@maigrowth.com" style="color: #FF6B35; text-decoration: none;">contact@maigrowth.com</a>
              </p>
            </div>
          </div>
          <div style="background: #F7F6F4; padding: 20px 40px; text-align: center;">
            <p style="color: #767676; font-size: 12px; margin: 0;">
              © 2025 MaiGrowth. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send exception:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
