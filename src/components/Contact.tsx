import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contactConfig } from "@/data/contact";
import type { ContactChannel, ContactFormValues } from "@/types/contact";
import { useTheme } from "@/context/ThemeContext";
import { buildMessage, mailtoHref, whatsappHref } from "@/lib/MessageContact";
import { fadeInUp, staggerContainer } from "@/lib/Motions";

const EMPTY: ContactFormValues = {
  name: "",
  email: "",
  service: contactConfig.services[0]?.id ?? "",
  message: "",
};

export const ContactOverlay = () => {
  const { isContactOpen, closeContact } = useTheme();
  const [values, setValues] = useState<ContactFormValues>(EMPTY);
  const [error, setError] = useState<string | null>(null);

  // Reset on close + lock scroll
  useEffect(() => {
    if (!isContactOpen) {
      setValues(EMPTY);
      setError(null);
    } else {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isContactOpen]);

  // Esc to close
  useEffect(() => {
    if (!isContactOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeContact();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isContactOpen, closeContact]);

  const update = <K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) => setValues((v) => ({ ...v, [key]: value }));

  const validate = () => {
    if (!values.name.trim()) return "Please enter your name.";
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email))
      return "Please enter a valid email.";
    if (!values.message.trim()) return "Please add a short message.";
    return null;
  };

  const preview = useMemo(() => buildMessage(values, contactConfig), [values]);

  const submit = (channel: ContactChannel) => {
    const err = validate();
    if (err) return setError(err);
    setError(null);

    const url =
      channel === "whatsapp"
        ? whatsappHref(preview, contactConfig)
        : mailtoHref(values, preview, contactConfig);

    if (channel === "whatsapp") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
    closeContact();
  };

  return (
    <AnimatePresence>
      {isContactOpen && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            onClick={closeContact}
            aria-hidden="true"
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Contact"
            onClick={(e) => e.stopPropagation()}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="card-base relative z-10 w-full max-w-lg p-6 sm:p-8"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6 flex items-start justify-between gap-4"
            >
              <div>
                <h2 className="text-xl font-semibold">Let's talk</h2>
                <p className="mt-1 text-sm text-app-text-muted">
                  Tell me what you need — I'll reply within 24h.
                </p>
              </div>
              <button
                onClick={closeContact}
                aria-label="Close contact"
                className="rounded-md p-1.5 text-app-text-muted transition-colors hover:bg-app-brand-bg hover:text-app-brand"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              <motion.div
                variants={fadeInUp}
                className="grid gap-4 sm:grid-cols-2"
              >
                <Field label="Name">
                  <input
                    type="text"
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your name"
                    className="input"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                    className="input"
                  />
                </Field>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Field label="Service">
                  <select
                    value={values.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="input"
                  >
                    {contactConfig.services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Field label="Message">
                  <textarea
                    rows={4}
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="A few lines about your project, timeline, budget…"
                    className="input resize-none"
                  />
                </Field>
              </motion.div>

              {error && (
                <motion.p
                  variants={fadeInUp}
                  className="text-sm text-app-brand"
                  role="alert"
                >
                  {error}
                </motion.p>
              )}

              <motion.div
                variants={fadeInUp}
                className="mt-2 grid gap-3 sm:grid-cols-2"
              >
                <button
                  type="button"
                  onClick={() => submit("whatsapp")}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-app-heading px-4 py-2.5 text-sm font-medium text-app-bg transition-opacity hover:opacity-90"
                >
                  <WhatsAppIcon />
                  Send via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => submit("email")}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-app-border px-4 py-2.5 text-sm font-medium text-app-text transition-colors hover:bg-app-brand-bg hover:text-app-brand"
                >
                  <MailIcon />
                  Send via Email
                </button>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-center text-xs text-app-text-muted"
              >
                WhatsApp opens instantly. Email uses your default mail client.
              </motion.p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Field = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <label className="flex flex-col gap-1.5">
    <span className="text-xs font-medium tracking-wide text-app-text-muted uppercase">
      {label}
    </span>
    {children}
  </label>
);

const WhatsAppIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.5 3.5A11 11 0 0 0 3.2 17.3L2 22l4.8-1.2A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.8.7.8-2.7-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.2-.8.9-1 1.1-.4.2-.7.1a7.3 7.3 0 0 1-3.6-3.2c-.3-.5.3-.4.8-1.4a.6.6 0 0 0 0-.6l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4A3.6 3.6 0 0 0 5 9.7a6.3 6.3 0 0 0 1.3 3.3 14.3 14.3 0 0 0 5.5 4.8c2 .8 2.4.7 2.8.6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z" />
  </svg>
);

const MailIcon = () => (
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
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);
