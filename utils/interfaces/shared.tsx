import { ROUTES, SLUGS } from "../constants/shared";

export interface NavItem {
  slug: SLUGS;
  href: ROUTES;
  external: boolean;
}

export interface FooterItem {
  href: string;
  icon: JSX.Element;
}

export interface IconProps {
  className?: string;
}

export interface Validation {
  validationtype?: string;
  validations?: {
    type: string;
    params?: (string | number | RegExp | any)[];
  }[];
}

export interface FieldClassnames {
  wrapper?: string;
  input?: string;
  description?: string;
  label?: string;
  option?: string;
}

interface CustomFieldProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    Validation {
  name: string;
  id: string;
  placeholder?: string;
  type:
    | "text"
    | "textarea"
    | "date"
    | "select"
    | "email"
    | "number"
    | "password"
    | "checkbox"
    | "radio";
  description?: React.ReactNode;
  disabled?: boolean;
  label?: React.ReactNode;
  classnames?: FieldClassnames;
}

export interface CustomInputProps extends CustomFieldProps {
  type: "text" | "date" | "email" | "password" | "number";
}

export interface CustomTextareaProps extends CustomFieldProps {
  type: "textarea";
}

export interface CustomSelectProps extends CustomFieldProps {
  type: "select";
  choices: { value: string; text: string }[];
  placeholder?: string;
}

export interface CustomRadioBoxProps extends CustomFieldProps {
  type: "radio" | "checkbox";
  choices: { value: string; text: string }[];
}

export type CustomFieldTypes =
  | CustomInputProps
  | CustomTextareaProps
  | CustomSelectProps
  | CustomRadioBoxProps;
