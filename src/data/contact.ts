import type { ContactConfig } from "@/types/contact";

export const contactConfig: ContactConfig = {
  email: "sdzobo980@gmail.com",
  whatsapp: "05391061579",
  services: [
    {
      id: "web-app",
      label: "Web Application Development",
      hint: "Python, Django, databases",
    },
    {
      id: "embedded",
      label: "Embedded Systems",
      hint: "C, Arduino, ESP32, microcontrollers",
    },
    {
      id: "ai",
      label: "AI / Computer Vision",
      hint: "AI projects, image analysis",
    },
    {
      id: "autonomous",
      label: "Autonomous Systems",
      hint: "Emerging area of interest",
    },
    {
      id: "technical",
      label: "Technical Project Collaboration",
      hint: "Engineering projects and ideas",
    },
    { id: "other", label: "Something else", hint: "Tell me about it" },
  ],
};
