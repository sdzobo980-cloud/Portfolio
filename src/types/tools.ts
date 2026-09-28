export interface ToolItem {
  /** Optional icon path from /public */
  icon?: string;
  name: string;
}

export interface ToolCategory {
  /** Optional category label — when omitted, renders as an uncategorized group */
  category?: string;
  items: ToolItem[];
}
