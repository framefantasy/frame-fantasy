import * as Yup from "yup";

import { CustomFieldTypes } from "./interfaces/shared";

export const deslugify = (slug: string) => slug.replace("-", " ");

export const toTitleCase = (text: string) =>
  text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export function CreateYupSchema(schema: any, config: CustomFieldTypes) {
  if (config) {
    const { name, validationtype: validationType, validations = [] } = config;
    if (!Yup[validationType as keyof typeof Yup]) return schema;
    // @ts-ignore
    let validator = Yup[validationType]();
    validations.forEach((validation) => {
      const { params, type } = validation;
      if (!validator[type]) return;
      validator = validator[type](...(params as Array<any>));
    });
    schema[name] = validator;
    return schema;
  }
}
