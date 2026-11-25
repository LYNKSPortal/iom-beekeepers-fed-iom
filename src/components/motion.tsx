"use client";

import { motion, useReducedMotion, useSpring, useInView, useMotionValue, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  ratio,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  ratio?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={cn("relative overflow-hidden", className)} style={ratio ? { aspectRatio: ratio.replace("/", " / ") } : undefined}>
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.25 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", imgClassName)} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function SplitLines({ text, className, as: Tag = "span" }: { text: string; className?: string; as?: "span" | "div" }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const Comp = Tag as "span";
  return (
    <Comp className={cn("inline", className)}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="inline-block will-change-transform"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.05, ease: EASE }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}

export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 14, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 14, mass: 0.4 });

  function onMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ x, y }} className="inline-block">
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const mv = useSpring(inView ? to : 0, { stiffness: 40, damping: 18 });
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  if (reduce) {
    return (
      <span ref={ref} className={className}>
        {to.toLocaleString()}
        {suffix}
      </span>
    );
  }
  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
