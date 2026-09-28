import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { footerData } from "@/data/footer";
import { ROUTES } from "@/constants/routes";
import { useTheme } from "@/context/ThemeContext";
import { fadeInUp, staggerContainer } from "@/lib/Motions";

const NAV = [
  { label: "Home", to: ROUTES.HOME },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
];

export const Footer = () => {
  const { openContact } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-app-border">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-14"
      >
        {/* Top — name + tagline + nav + contact */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Identity */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-2">
            <span className="text-base font-semibold text-app-heading">
              {footerData.name}
            </span>
            <p className="max-w-xs text-sm text-app-text-muted">
              {footerData.tagline}
            </p>
          </motion.div>

          {/* Nav */}
          <motion.nav
            variants={fadeInUp}
            className="flex flex-col gap-2"
            aria-label="Footer"
          >
            <span className="text-xs font-medium tracking-wider text-app-text-muted uppercase">
              Navigate
            </span>
            <ul className="flex flex-col gap-1.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-app-text transition-colors hover:text-app-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-2">
            <span className="text-xs font-medium tracking-wider text-app-text-muted uppercase">
              Get in touch
            </span>
            <button
              onClick={openContact}
              className="w-fit text-sm text-app-text transition-colors hover:text-app-brand"
            >
              {footerData.email}
            </button>
            <ul className="mt-1 flex flex-wrap gap-3">
              {footerData.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-app-text-muted transition-colors hover:text-app-brand"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-start justify-between gap-3 border-t border-app-border pt-6 sm:flex-row sm:items-center"
        >
          <p className="text-xs text-app-text-muted">
            © {year} {footerData.name}. All rights reserved.
          </p>
          <p className="text-xs text-app-text-muted">
            Built with React, Tailwind & Framer Motion.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};
