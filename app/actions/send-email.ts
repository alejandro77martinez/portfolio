"use server";

import { transporter } from "@/app/lib/mailer";
import { EmailState} from "@/app/types/email";

export async function sendEmail(_: EmailState | null, formData: FormData): Promise<EmailState> {
  const to = "alejandro.martinez.nava@outlook.com";
  const subject = "Nuevo mensaje desde el portafolio";
  const message = formData.get("message") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  if (!name || !email || !message || !phone) {
    return { error: "Todos los campos son requeridos" };
  }

  console.log("Enviando correo usuario: " + process.env.GMAIL_USER + " clave: " + process.env.GMAIL_PASSWORD);

  try {
    await transporter.sendMail({
      from: `"Mi Portafolio" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html: `<p>Has recibido un nuevo mensaje desde tu portafolio:</p>
             <p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Telefono:</strong> ${phone}</p>
             <p><strong>Mensaje:</strong><br>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "No se pudo enviar el correo" };
  }
}