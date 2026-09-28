import { useTheme } from "@/context/ThemeContext";
import { heroData } from "@/data/home";
import { clickPress, fadeInUp, fadeInX, staggerContainer } from "@/lib/Motions";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { openContact } = useTheme();

  return (
    <section className="w-full">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-4 lg:grid-cols-2 lg:gap-16 lg:py-8">
        {/* LEFT — copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-5"
        >
          <motion.span
            variants={fadeInUp}
            className="badge-accent text-xs tracking-wide uppercase"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-app-brand" />
            {heroData.status}
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl"
          >
            {heroData.name}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg font-medium text-app-text-muted sm:text-xl"
          >
            {heroData.position}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="max-w-lg text-base leading-relaxed text-app-text-muted"
          >
            {heroData.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-2 flex flex-wrap items-center gap-3"
          >
            {heroData.cta.map((item, i) => {
              const isContact = item.link === "#contact";
              const primary = i === 0;

              const base =
                "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors";
              const styles = primary
                ? "bg-app-heading text-app-bg hover:opacity-90"
                : "border border-app-border text-app-text hover:bg-app-brand-bg hover:text-app-brand";

              return isContact ? (
                <motion.button
                  key={item.text}
                  onClick={openContact}
                  variants={clickPress}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className={`${base} ${styles}`}
                >
                  {item.text}
                </motion.button>
              ) : (
                <motion.div
                  key={item.text}
                  variants={clickPress}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link to={item.link} className={`${base} ${styles}`}>
                    {item.text}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* RIGHT — portrait on irregular blob */}
        <motion.div
          variants={fadeInX("right")}
          initial="hidden"
          animate="visible"
          className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none"
        >
          {/* Irregular organic blob */}
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 h-full w-full text-app-brand"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              fillOpacity="0.14"
              d="M312 78c34 30 58 78 62 128 4 50-14 102-48 134s-84 44-132 40-92-30-120-70-30-92-18-138 44-84 88-104 134-20 168 10z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="1.5"
              d="M312 78c34 30 58 78 62 128 4 50-14 102-48 134s-84 44-132 40-92-30-120-70-30-92-18-138 44-84 88-104 134-20 168 10z"
            />
          </svg>

          {/* Small satellite dot for artistic asymmetry */}
          <span className="absolute top-6 right-4 h-3 w-3 rounded-full bg-app-brand" />
          <span className="absolute bottom-10 left-2 h-2 w-2 rounded-full bg-app-brand/60" />

          <img
            src={heroData.image}
            alt={heroData.name}
            className="relative z-10 h-auto w-[78%] object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
