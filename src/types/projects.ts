export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  stack: string[];
  year: string;
  description: string;
  /** Optional cover image path from /public */
  image?: string;
  /** Optional live preview link — drives the center hover CTA */
  cat?: ProjectLink;
  /** Optional source link — drives the code icon under the image */
  codelink?: ProjectLink;
}
