import { ROUTESType, ROUTESTypeKeys } from "@/constants/routes";

export interface NAV_DATA_TYPE {
  name: string;
  homeHref: ROUTESType["HOME"];
  items: { label: ROUTESTypeKeys; href: ROUTESType[ROUTESTypeKeys] }[];
}
