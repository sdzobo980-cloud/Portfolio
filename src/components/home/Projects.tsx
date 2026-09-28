import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import type { Project } from "@/types/projects";
import { cardHover, fadeInUp, staggerContainer } from "@/lib/Motions";

export const Projects = () => {
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
              Selected work
            </h2>
            <p className="max-w-xl text-sm text-app-text-muted">
              A few projects I've designed, built, and shipped.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { image, cat, codelink, name, stack, year, description } = project;

  return (
    <motion.article
      variants={fadeInUp}
      whileHover="hover"
      whileTap="tap"
      animate={cardHover.initial}
      // cardHover drives the lift
      custom={cardHover}
      className="card-base group flex flex-col gap-4 p-0 overflow-hidden"
      {...cardHover}
    >
      {/* Media */}
      <div className="relative aspect-video w-full overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <FallbackCover name={name} />
        )}

        {/* Center preview overlay — only if cat exists */}
        {cat && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-app-bg/40 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            <a
              href={cat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-app-brand-border bg-app-brand-bg px-4 py-2 text-sm font-medium text-app-brand"
            >
              {cat.label}
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
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        )}

        {/* Code icon — bottom-right, only if codelink exists */}
        {codelink && (
          <a
            href={codelink.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={codelink.label}
            className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-app-border bg-app-bg/80 text-app-text backdrop-blur-sm transition-colors hover:bg-app-brand-bg hover:text-app-brand"
          >
            <CodeIcon />
          </a>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 px-5 pb-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold">{name}</h3>
          <span className="text-xs text-app-text-muted">{year}</span>
        </div>

        <p className="text-sm leading-relaxed text-app-text-muted">
          {description}
        </p>

        <ul className="mt-1 flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-app-border px-2.5 py-0.5 text-[11px] text-app-text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

const FallbackCover = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-app-brand-bg">
      {/* subtle diagonal grid for texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 12px)",
        }}
      />
      <span className="relative text-2xl font-bold tracking-widest text-app-brand">
        {initials}
      </span>
    </div>
  );
};

const CodeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);
