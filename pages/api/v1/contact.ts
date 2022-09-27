import type { NextApiRequest, NextApiResponse } from "next";
import { contactRequest, validateRequest } from "../../../src/email.schema";
import { sendEmail } from "../../../src/email.service";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "POST")
      throw {
        statusCode: 405,
        message: "Method not allowed!",
      };
    await validateRequest(req, res);
    const { email, name, phone, question } = req.body as contactRequest;
    Promise.all([sendEmail({ name, email, phone, question })])
      .then((_) => {
        console.log("Email sent to:", email);
      })
      .catch((err) => {
        console.error("ERROR: Sending email to", email);
        console.error(err);
      });
    res.status(200).json({
      success: true,
      message: "Thank you for your query! We'll get back to you soon!",
    });
  } catch (err) {
    if (err?.statusCode) {
      res.status(err.statusCode).json({
        success: false,
        message: err.message,
      });
    } else {
      console.error("ERROR: Unhandled Error Occurred!");
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Internal Server Error!",
      });
    }
  }
};

export default handler;
