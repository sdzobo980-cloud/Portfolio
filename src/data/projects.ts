import type { Project } from "@/types/projects";

export const projectsData: Project[] = [
  {
    name: "Automatic Resume Screening System",
    stack: ["Python", "Django", "SQLite", "HTML", "CSS", "PyPDF2"],
    year: "2026",
    description:
      "A web-based recruitment system that extracts resume content from PDF files and screens candidates against defined criteria.",
    image: "/images/projects/resume-screening.png",
    cat: {
      label: "View project",
      url: "UNKNOWN",
    },
    codelink: {
      label: "Source",
      url: "UNKNOWN",
    },
  },
  {
    name: "AI Skin Health & Dermatology Analysis",
    stack: ["Python", "AI", "Computer Vision", "Machine Learning"],
    year: "2026",
    description:
      "An AI-based image analysis project developed to analyse skin images and produce results using a trained model.",
    image: "/images/projects/skin-analysis.png",
    cat: {
      label: "View project",
      url: "UNKNOWN",
    },
    // no codelink — code icon will not render
  },
  {
    name: "Microprocessor & Embedded Systems Projects",
    stack: ["C", "Arduino", "ESP32", "Microcontrollers", "Tinkercad"],
    year: "2026",
    description:
      "A collection of academic embedded systems projects involving microcontrollers, LED matrices, LCD displays, and hardware-software integration.",
    image: "/images/projects/embedded-systems.png",
    codelink: {
      label: "Source",
      url: "UNKNOWN",
    },
    // no cat — center hover overlay will not render
  },
  {
    name: "LithiumX",
    stack: ["FinTech", "Entrepreneurship", "Product Development"],
    year: "2026",
    description:
      "A university-developed Zimbabwe lithium-backed cryptocurrency and fintech concept currently being developed.",
    image: "/images/projects/lithiumx.png",
    // no cat, no codelink — pure minimal card
  },
];
