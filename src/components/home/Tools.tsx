import { motion } from "framer-motion";
import { toolsData } from "@/data/tools";
import { fadeInUp, staggerContainer } from "@/lib/Motions";

export const Tools = () => {
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
          <motion.div variants={fadeInUp} className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold sm:text-3xl">Tools I use</h2>
            <p className="max-w-xl text-sm text-app-text-muted">
              The stack I reach for when shipping real products.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {toolsData.map((group, i) => (
              <motion.div
                key={group.category ?? `group-${i}`}
                variants={fadeInUp}
                className="flex flex-col gap-3"
              >
                {group.category && (
                  <h3 className="text-xs font-medium tracking-wider text-app-text-muted uppercase">
                    {group.category}
                  </h3>
                )}

                <ul className="flex flex-col gap-2">
                  {group.items.map((tool) => (
                    <li
                      key={tool.name}
                      className="flex items-center gap-2.5 text-sm text-app-text"
                    >
                      {tool.icon ? (
                        <img
                          src={tool.icon}
                          alt=""
                          className="h-4 w-4 shrink-0 object-contain"
                        />
                      ) : (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-app-brand" />
                      )}
                      <span>{tool.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
