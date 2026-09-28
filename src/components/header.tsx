import { useTheme } from "@/context/ThemeContext";
import { Link, NavLink } from "react-router-dom";

const NAV_DATA = {
  name: "Simbalashe Dzobo",
  homeHref: "/",
  items: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
  ],
};

export function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-app-border bg-secondary sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to={NAV_DATA.homeHref}
          className="text-sm font-semibold tracking-tight text-app-heading"
        >
          {NAV_DATA.name}
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-6">
          {NAV_DATA.items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-app-brand font-semibold"
                    : "text-app-text-muted hover:text-app-text"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            type="button"
            onClick={() => alert("link to some where")}
            className="text-sm font-medium text-app-text-muted hover:text-app-text cursor-pointer"
          >
            Contact
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="text-sm font-medium text-app-text-muted hover:text-app-text cursor-pointer capitalize"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
}
