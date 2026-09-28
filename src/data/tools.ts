import type { ToolCategory } from "@/types/tools";

export const toolsData: ToolCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "C" },
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "SQL" },
    ],
  },
  {
    category: "Embedded & Hardware",
    items: [
      { name: "Arduino" },
      { name: "ESP32" },
      { name: "Microcontrollers" },
      { name: "Tinkercad" },
      { name: "LCD Displays" },
      { name: "LED Matrices" },
    ],
  },
  {
    category: "Web & Software",
    items: [
      { name: "Django" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "SQLite" },
      { name: "PyPDF2" },
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "Visual Studio Code" },
      { name: "GitHub" },
      { name: "SVN" },
    ],
  },
];
