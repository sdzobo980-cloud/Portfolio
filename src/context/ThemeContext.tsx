import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

interface AppConfigContextValue {
  // Theme Properties
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;

  isContactOpen: boolean;
  openContact: () => void;
  closeContact: () => void;
}

const AppConfigContext = createContext<AppConfigContextValue | null>(null);

export const AppConfigProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setThemeState] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    return "dark";
  });

  const setTheme = useCallback((newTheme: "light" | "dark") => {
    setThemeState(newTheme);
    const root = window.document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = useCallback(() => setIsContactOpen(true), []);
  const closeContact = useCallback(() => setIsContactOpen(false), []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      isContactOpen,
      openContact,
      closeContact,
    }),
    [theme, setTheme, toggleTheme, isContactOpen, openContact, closeContact],
  );

  return (
    <AppConfigContext.Provider value={value}>
      {children}
    </AppConfigContext.Provider>
  );
};

// 3. Export your clean composite hook
export const useTheme = () => {
  const ctx = useContext(AppConfigContext);
  if (!ctx) {
    throw new Error("useTheme must be used within an AppConfigProvider");
  }
  return ctx;
};
