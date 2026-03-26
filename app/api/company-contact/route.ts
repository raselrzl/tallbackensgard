import nodemailer from "nodemailer";

interface CompanyContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  customerType: string;
  country: string;
  message: string;
  consent: boolean;
}

export async function POST(req: Request) {
  try {
    const data: CompanyContactData = await req.json();

    // ✅ Validation
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.phone ||
      !data.customerType ||
      !data.country ||
      !data.message
    ) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 },
      );
    }

    if (!data.consent) {
      return new Response(JSON.stringify({ message: "Consent required" }), {
        status: 400,
      });
    }

    // ✅ Create transporter (Hostinger)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ Email to YOU (admin)
    const adminMail = {
      from: `"Corporate Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: data.email,
      subject: `New Corporate Inquiry (${data.customerType})`,
      html: `
        <h2>New Corporate Contact Request</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Customer Type:</strong> ${data.customerType}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    };

    // ✅ Auto-reply to user
    const userMail = {
      from: `"Tallbackens Vandrarhem & Apartments" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "Vi har mottagit din förfrågan",
      html: `
    <div style="font-family: Arial, sans-serif; color: #000;">
  

      <h2>Hej ${data.firstName}!</h2>
      <p>Tack för ditt meddelande. Vi har påbörjat hanteringen av ditt ärende.</p>
      <p>Vår målsättning är att återkoppla samma dag (vid förfrågan under kontorstid), annars senast påföljande arbetsdag. Vi finns tillgängliga även under helger med något begränsad svarstid.</p>
      <p>Vi återkommer till dig inom kort!</p>
      <p>Vill du ha direkt återkoppling, kontakta oss på: <strong>+46 10 333 35 36</strong></p>
      <br/>
      <p><strong>Din förfrågan gällde:</strong> <em>${data.customerType}</em></p>
      <p><strong>Ditt meddelande:</strong></p>
      <p>${data.message}</p>
      <br/>
      <p>Med vänlig hälsning,<br/>
      Tallbackens Vandrarhem & Apartments</p>
          <!-- Logo -->
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://tallbackensgard.se/logo/logoc.png" alt="Tallbackens Vandrarhem & Apartments" width="150" style="display: block; margin: 0 auto;" />
      </div>
    </div>
  `,
    };

    // ✅ Send emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return new Response(
      JSON.stringify({ message: "Corporate message sent successfully" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Corporate email error:", error);

    return new Response(
      JSON.stringify({ message: "Failed to send corporate message" }),
      { status: 500 },
    );
  }
}
