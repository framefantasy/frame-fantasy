export const deslugify = (slug: string) => slug.replace("-", " ");

export const toTitleCase = (text: string) =>
  text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
