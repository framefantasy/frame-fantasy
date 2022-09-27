import * as yup from "yup";
import "yup-phone";
import { NextApiRequest, NextApiResponse } from "next";

const contactRequestSchema = yup
  .object({
    name: yup.string().trim().required("name is required"),
    email: yup
      .string()
      .trim()
      .required("email is required")
      .email("email should be a valid mailing address"),
    phone: yup
      .string()
      .trim()
      .required("name is required")
      .phone("IN", false, "phone must be a valid calling number"),
    question: yup.string().trim().required("question is required"),
  })
  .required();

export type contactRequest = yup.InferType<typeof contactRequestSchema>;

export const validateRequest = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    await contactRequestSchema.validate(req.body, { abortEarly: false });
  } catch (err) {
    let message: string = "";
    err.errors.forEach((e: string) => {
      message += `${e}. `;
    });
    throw {
      statusCode: 400,
      message: message,
    };
  }
};
