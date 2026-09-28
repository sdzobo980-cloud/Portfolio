import type { ContactConfig, ContactFormValues } from "@/types/contact";

export const buildMessage = (
  values: ContactFormValues,
  config: ContactConfig,
): string => {
  const service =
    config.services.find((s) => s.id === values.service)?.label ??
    values.service ??
    "General enquiry";

  return [
    `Hi, I'm ${values.name}.`,
    ``,
    `Service: ${service}`,
    `Email: ${values.email}`,
    ``,
    `Message:`,
    values.message,
  ].join("\n");
};

export const whatsappHref = (text: string, config: ContactConfig) =>
  `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`;

export const mailtoHref = (
  values: ContactFormValues,
  text: string,
  config: ContactConfig,
) => {
  const subject = `New enquiry — ${values.service || "General"}`;
  return `mailto:${config.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(text)}`;
};
