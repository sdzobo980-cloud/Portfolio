// Layouts/Main.tsx
import { ContactOverlay } from "@/components/Contact";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/header";
import { useTheme } from "@/context/ThemeContext";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  const { isContactOpen } = useTheme();
  return (
    <div className="flex min-h-screen flex-col bg-app-bg text-app-text">
      <Nav />
      {isContactOpen && <ContactOverlay />}
      <main className="flex-1 pt-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
