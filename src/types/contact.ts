export interface ServiceOption {
  id: string;
  label: string;
  /** Short line shown under the label in the select */
  hint?: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  service: string;
  message: string;
}

export type ContactChannel = "email" | "whatsapp";

export interface ContactConfig {
  /** Destination email for mailto / display */
  email: string;
  /** WhatsApp number in E.164, no plus, no spaces */
  whatsapp: string;
  services: ServiceOption[];
}
