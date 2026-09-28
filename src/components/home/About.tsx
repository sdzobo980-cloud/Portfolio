import { motion } from "framer-motion";
import { aboutData } from "@/data/about";
import { fadeInUp, fadeInX, staggerContainer } from "@/lib/Motions";

export const About = () => {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-7xl px-6 py-4 lg:py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-10"
        >
          {/* Hook */}
          <motion.h2
            variants={fadeInUp}
            className="max-w-4xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl"
          >
            {aboutData.title}
          </motion.h2>

          {/* Two columns */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left — short bio */}
            <motion.p
              variants={fadeInX("left")}
              className="max-w-md text-base leading-relaxed text-app-text-muted"
            >
              {aboutData.description}
            </motion.p>

            {/* Right — academic card */}
            <motion.div
              variants={fadeInX("right")}
              className="card-base flex flex-col gap-5"
            >
              <h3 className="text-xs font-medium tracking-wider text-app-text-muted uppercase">
                Education
              </h3>

              <ul className="flex flex-col gap-4">
                {aboutData.academic.map((entry, i) => (
                  <li
                    key={`${entry.university}-${i}`}
                    className="flex flex-col gap-0.5 border-l-2 border-app-brand-border pl-4"
                  >
                    <span className="text-sm font-semibold text-app-text">
                      {entry.program}
                    </span>
                    <span className="text-sm text-app-text-muted">
                      {entry.university}
                    </span>
                    <span className="text-xs text-app-text-muted">
                      {entry.year}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Future: certificates will slot in here */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
