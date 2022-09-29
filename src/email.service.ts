import { readFile } from "fs/promises";
import { join } from "path";
import mailComposer from "nodemailer/lib/mail-composer";
import { createTransport, Transporter } from "nodemailer";
import { render } from "ejs";
import Axios from "axios";

class MailTransporter {
  private static transporter: Transporter | null = null;
  private constructor() {}
  private static initTransporter = async () => {
    MailTransporter.transporter = createTransport({
      host: "smtppro.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });
    try {
      await MailTransporter.transporter.verify();
      console.log("Connected to Mailing Server!");
    } catch (err) {
      console.error("Mail Transporter Init failed!");
      console.error(err);
    }
  };
  public static getTransporter = async () => {
    if (!MailTransporter.transporter) {
      await MailTransporter.initTransporter();
    }
    return MailTransporter.transporter;
  };
}

export const sendEmail = async ({
  name,
  email,
  phone,
  question,
}: {
  name: string;
  email: string;
  phone: string | undefined;
  question: string;
}) => {
  phone = phone ?? "";
  const transporter = await MailTransporter.getTransporter();
  const userEmail = await generateEmail(
    { name, email, phone, question },
    "user"
  );
  const webmasterEmail = await generateEmail(
    { name, email, phone, question },
    "webmaster"
  );
  await transporter?.sendMail({
    from: "Framefantasy <info@framefantasy.co.in",
    to: email,
    replyTo: "info@framefantasy.co.in",
    raw: userEmail,
  });
  await transporter?.sendMail({
    from: "Framefantasy <info@framefantasy.co.in",
    to: "info@framefantasy.co.in",
    replyTo: email,
    raw: webmasterEmail,
  });
};

const generateEmail = async (
  {
    name,
    email,
    phone,
    question,
  }: {
    name: string;
    email: string;
    phone: string;
    question: string;
  },
  action: "webmaster" | "user"
) => {
  const emailTemplate = (
    await Axios.get(
      action === "user"
        ? process.env.GIST_USER_EMAIL!
        : process.env.GIST_WEBMASTER_EMAIL!
    )
  ).data;

  return new mailComposer({
    from: "Framefantasy <info@framefantasy.co.in",
    to: action === "user" ? email : "info@framefantasy.co.in",
    replyTo: action === "user" ? "info@framefantasy.co.in" : email,
    text: "Thank you for submitting your query!",
    subject:
      action === "user"
        ? `Thank you for submitting your query!`
        : `[QUERY][https://framefantasy.co.in][${email}]`,
    html: Buffer.from(
      await render(emailTemplate, {
        name: name,
        email: email,
        phone: phone,
        question: question,
      })
    ).toString("utf-8"),
    attachments: [],
  })
    .compile()
    .build();
};
