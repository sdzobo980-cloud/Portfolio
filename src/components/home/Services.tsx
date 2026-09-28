import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import { useTheme } from "@/context/ThemeContext";
import { fadeInUp, staggerContainer } from "@/lib/Motions";

export const Services = () => {
  const { openContact } = useTheme();

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-7xl px-6 py-4 lg:py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-10"
        >
          <motion.div variants={fadeInUp} className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              What I can do
            </h2>
            <p className="max-w-xl text-sm text-app-text-muted">
              Services I offer — pick what fits your project.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="card-base flex flex-col gap-4"
              >
                <span className="text-xs font-medium tracking-wider text-app-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-base font-bold leading-snug">
                  {service.title}
                </h3>

                <ul className="flex flex-col gap-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-app-text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-app-brand" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Inline contact CTA */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-4 pt-6 text-center"
          >
            <p className="max-w-md text-sm text-app-text-muted">
              Have something in mind? Let's talk about it.
            </p>
            <button
              onClick={openContact}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-app-heading px-6 py-3 text-sm font-medium text-app-bg transition-opacity hover:opacity-90"
            >
              Get in touch
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
