import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.RESEND_FROM_EMAIL ?? "noreply@gap-worldnigltd.com";
const TO_TEAM =
  process.env.CONTACT_RECIPIENT_EMAIL ?? "info@gap-worldnigltd.com";

const FORWARD_TO = "godwinsazariah2017@gmail.com";
const BRAND_GOLD = "#E1AD01";
const DARK_TEXT = "#1e293b";

/* ── Shared header / footer snippets ──────────────────────────── */
const emailHeader = `
  <div style="background-color: #ffffff; padding: 30px; border-top: 6px solid ${BRAND_GOLD}; border-bottom: 1px solid #e2e8f0; text-align: left;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>
          <img src="https://gap-worldnigltd.com/images/logo-dark.png" alt="GAP-World" height="40" style="display:block;" />
        </td>
        <td style="text-align: right; font-family: sans-serif; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
          Official Correspondence
        </td>
      </tr>
    </table>
  </div>
`;

const emailFooter = `
  <div style="padding: 40px 30px; background-color: #1e293b; border-radius: 0 0 8px 8px;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td style="font-family: sans-serif; color: #ffffff; font-size: 14px; font-weight: 600; padding-bottom: 10px;">
          GAP-World
        </td>
      </tr>
      <tr>
        <td style="font-family: sans-serif; color: #94a3b8; font-size: 12px; line-height: 1.6;">
          Port Harcourt, Nigeria <br />
          Email: <a href="mailto:info@gap-worldnigltd.com" style="color: ${BRAND_GOLD}; text-decoration: none;">info@gap-worldnigltd.com</a> <br />
          Web: <a href="https://gap-worldnigltd.com" style="color: ${BRAND_GOLD}; text-decoration: none;">www.gap-worldnigltd.com</a>
        </td>
      </tr>
      <tr>
        <td style="padding-top: 20px; border-top: 1px solid #334155; margin-top: 20px;">
          <p style="font-family: sans-serif; color: #64748b; font-size: 11px;">
            &copy; ${new Date().getFullYear()} GAP-World. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </div>
`;

/* ── Team notification email ───────────────────────────────────── */
function teamEmailHtml(
  fullName: string,
  email: string,
  phone: string,
  country: string,
  message: string,
) {
  return `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:40px 20px; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        ${emailHeader}
        <div style="padding: 40px 30px;">
          <h2 style="color: ${DARK_TEXT}; font-size: 22px; margin-bottom: 20px; font-weight: 700;">Inquiry Details</h2>
          
          <div style="margin-bottom: 30px; border: 1px solid #f1f5f9; border-radius: 6px;">
            <div style="padding: 15px; border-bottom: 1px solid #f1f5f9;">
              <span style="display: block; font-size: 11px; color: ${BRAND_GOLD}; text-transform: uppercase; font-weight: 700;">Full Name</span>
              <span style="font-size: 16px; color: ${DARK_TEXT};">${fullName}</span>
            </div>
            <div style="padding: 15px; border-bottom: 1px solid #f1f5f9; background-color: #fcfcfc;">
              <span style="display: block; font-size: 11px; color: ${BRAND_GOLD}; text-transform: uppercase; font-weight: 700;">Email Address</span>
              <a href="mailto:${email}" style="font-size: 16px; color: #2563eb; text-decoration: none;">${email}</a>
            </div>
            <div style="padding: 15px; border-bottom: 1px solid #f1f5f9;">
              <span style="display: block; font-size: 11px; color: ${BRAND_GOLD}; text-transform: uppercase; font-weight: 700;">Phone / Location</span>
              <span style="font-size: 16px; color: ${DARK_TEXT};">${phone || "N/A"} — ${country || "Global"}</span>
            </div>
          </div>

          <h3 style="font-size: 13px; text-transform: uppercase; color: #64748b; letter-spacing: 1px;">Message Content</h3>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; font-size: 15px; line-height: 1.7; color: ${DARK_TEXT}; border-left: 4px solid ${BRAND_GOLD};">
            ${message}
          </div>

          <div style="margin-top: 30px;">
            <a href="mailto:${email}" style="background-color: ${BRAND_GOLD}; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: 600; display: inline-block;">Generate Response</a>
          </div>
        </div>
        ${emailFooter}
      </div>
    </body>
    </html>
  `;
}

/* ── Client confirmation email ─────────────────────────────────── */
function clientEmailHtml(firstName: string) {
  return `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:40px 20px; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        ${emailHeader}
        <div style="padding: 60px 30px; text-align: center;">
          <div style="width: 60px; height: 60px; background-color: #fef9c3; border-radius: 50%; display: inline-block; margin-bottom: 20px;">
            <span style="line-height: 60px; font-size: 30px; color: ${BRAND_GOLD};">●</span>
          </div>
          <h1 style="color: ${DARK_TEXT}; font-size: 26px; margin: 0 0 15px; font-weight: 800;">Message Acknowledged</h1>
          <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            Hello ${firstName},<br />
            Thank you for contacting GAP-World. Your inquiry has been routed to the appropriate department. We aim to respond to all professional queries within 24 business hours.
          </p>
          <div style="display: inline-block; padding: 20px; border: 1px dashed ${BRAND_GOLD}; border-radius: 8px; margin-bottom: 30px;">
            <p style="margin: 0; color: ${DARK_TEXT}; font-size: 14px;"><strong>Reference:</strong> GW-${Math.floor(Date.now() / 1000)}</p>
          </div>
          <br />
          <a href="https://gap-worldnigltd.com" style="color: ${BRAND_GOLD}; font-weight: 700; text-decoration: none; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Visit Our Portal →</a>
        </div>
        ${emailFooter}
      </div>
    </body>
    </html>
  `;
}

/* ── Route handler ─────────────────────────────────────────────── */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, country, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "firstName, email, and message are required." },
        { status: 400 },
      );
    }

    const fullName = `${firstName} ${lastName}`.trim();
    const teamHtml = teamEmailHtml(fullName, email, phone, country, message);

    const results = await Promise.allSettled([
      resend.emails.send({
        from: `GAP-World <${FROM}>`,
        to: TO_TEAM,
        replyTo: email,
        subject: `New enquiry from ${fullName}`,
        html: teamHtml,
      }),
      resend.emails.send({
        from: `GAP-World <${FROM}>`,
        to: email,
        subject: "We received your message — GAP-World",
        html: clientEmailHtml(firstName),
      }),
      resend.emails.send({
        from: `GAP-World <${FROM}>`,
        to: FORWARD_TO,
        replyTo: email,
        subject: `Fwd: New enquiry from ${fullName}`,
        html: teamHtml,
      }),
    ]);

    results.forEach((result, index) => {
      if (result.status === "rejected") {
        console.error(
          `Email ${index === 0 ? "to Team" : "to Client"} failed:`,
          result.reason,
        );
      }
    });

    if (!results.some((r) => r.status === "fulfilled")) {
      throw new Error("All email attempts failed.");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] critical error:", err);
    return NextResponse.json(
      { error: "Failed to process request. Please try again later." },
      { status: 500 },
    );
  }
}
