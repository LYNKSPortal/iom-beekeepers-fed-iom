"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Field({
  label,
  required,
  children,
  hint,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 flex items-baseline justify-between text-sm font-semibold text-forest-2">
        {label}
        {required && <span className="text-xs font-normal text-stone-warm">required</span>}
      </span>
      {children}
      {hint && <span className="mt-1.5 block text-xs text-stone-warm">{hint}</span>}
    </label>
  );
}

export function SubmitForm({
  endpoint,
  children,
  submitLabel = "Send",
  successTitle = "Thank you",
  successBody = "Your message has been received, we'll be in touch shortly.",
  className,
}: {
  endpoint: string;
  children: ReactNode;
  submitLabel?: string;
  successTitle?: string;
  successBody?: string;
  className?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setState(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait">
        {state === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-honey/40 bg-honey/10 p-10 text-center"
          >
            <CheckCircle2 className="mx-auto h-10 w-10 text-honey-2" />
            <h3 className="mt-4 font-display text-2xl text-forest-2">{successTitle}</h3>
            <p className="mt-2 text-ink/70">{successBody}</p>
            <button
              onClick={() => setState("idle")}
              className="mt-6 text-sm font-semibold u-sweep text-honey-2 cursor-pointer"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            exit={{ opacity: 0, y: -12 }}
            className="space-y-8"
          >
            {children}
            {state === "error" && (
              <p className="text-sm text-red-700">
                Something went wrong, please try again, or email iombeekeepers@gmail.com directly.
              </p>
            )}
            <Button type="submit" variant="honey" size="lg" disabled={state === "sending"}>
              {state === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending
                </>
              ) : (
                <>
                  {submitLabel} <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
