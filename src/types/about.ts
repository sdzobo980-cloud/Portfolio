export interface AcademicEntry {
  university: string;
  program: string;
  year: string;
}

export interface AboutData {
  /** Bold hook line */
  title: string;
  /** Short bio — keep to ~2 lines */
  description: string;
  academic: AcademicEntry[];
}
