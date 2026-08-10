"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type VideoBackgroundProps = {
  src: string;
  poster: string;
  className?: string;
  overlayClassName?: string;
  /** Min viewport width (px) before loading the video. Below this: poster only. */
  minWidth?: number;
};

function shouldPreferStatic(): boolean {
  if (typeof window === "undefined") return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;

  const connection =
    (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;

  if (connection?.saveData) return true;
  if (connection?.effectiveType && /2g/.test(connection.effectiveType)) return true;

  return false;
}

export function VideoBackground({
  src,
  poster,
  className = "",
  overlayClassName = "bg-ink/70",
  minWidth = 768,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);

    const update = () => {
      setUseVideo(mq.matches && !shouldPreferStatic());
    };

    update();
    mq.addEventListener("change", update);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    motion.addEventListener("change", update);

    return () => {
      mq.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, [minWidth]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!useVideo || !video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.paused) {
            void video.play().catch(() => {
              // Autoplay blocked — poster remains visible underneath
            });
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [useVideo]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <Image
        src={poster}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {useVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}

      <div className={cn("absolute inset-0", overlayClassName)} />
    </div>
  );
}
