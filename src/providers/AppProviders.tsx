import { AppConfigProvider } from "@/context/ThemeContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <AppConfigProvider>{children}</AppConfigProvider>;
}
