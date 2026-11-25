"use client";

import MuxVideo from "@mux/mux-video-react";
import { useReducedMotion } from "motion/react";

export function HeroVideo({ playbackId, poster }: { playbackId: string; poster?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <MuxVideo
      playbackId={playbackId}
      poster={poster}
      autoPlay="any"
      muted
      loop
      playsInline
      disablePictureInPicture
      preload="auto"
      streamType="on-demand"
      className="absolute inset-0 h-full w-full object-cover"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
