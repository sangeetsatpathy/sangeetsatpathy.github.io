import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

// Each item: { type: "image" | "video", src: "...", alt: "...", poster: "..." }
export default function MediaGallery({ media }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const open = (i) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i - 1 + media.length) % media.length);
  const next = () => setLightboxIndex((i) => (i + 1) % media.length);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, media?.length]);

  if (!media || media.length === 0) return null;

  const active = lightboxIndex !== null ? media[lightboxIndex] : null;

  return (
    <>
      {/* Thumbnail strip */}
      <div className="mt-8 pt-8 border-t border-border/30">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Media
        </p>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {media.map((item, i) => (
            <button
              key={i}
              onClick={() => open(i)}
              className="relative flex-none w-44 h-28 overflow-hidden border border-border/30 hover:border-primary/60 transition-colors duration-300 group"
            >
              {item.type === "video" ? (
                <>
                  {item.poster ? (
                    <img src={item.poster} alt={item.alt || "video thumbnail"} className="w-full h-full object-cover" />
                  ) : (
                    <video src={item.src} className="w-full h-full object-cover" preload="metadata" muted playsInline />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center">
                      <Play size={16} className="text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                </>
              ) : (
                <img src={item.src} alt={item.alt || ""} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/*
        Portal to document.body — keeps position:fixed relative to the viewport
        (not Radix Dialog's CSS-transform ancestor).
        DialogContent in Experience.jsx uses onInteractOutside to ignore clicks
        on [data-lightbox] so the dialog doesn't close behind the lightbox.
      */}
      {createPortal(
        <AnimatePresence>
          {active && (
            <motion.div
              data-lightbox="true"
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ zIndex: 99999 }}
              className="fixed inset-0 bg-black/92 flex flex-col items-center justify-center"
              // Close when clicking the black area (not a child element)
              onClick={(e) => { if (e.target === e.currentTarget) close(); }}
            >
              {/* Close button — top-right of viewport */}
              <button
                onClick={close}
                style={{ zIndex: 1 }}
                className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 text-white transition-colors duration-150"
                aria-label="Close"
              >
                <X size={22} strokeWidth={2.5} />
              </button>

              {/*
                Flex row: [prev] [media] [next]
                Buttons are flex siblings so there are no z-index ordering
                issues — they never overlap the media div.
              */}
              <div className="flex items-center gap-3 w-full max-w-5xl px-4">
                {/* Prev */}
                {media.length > 1 ? (
                  <button
                    onClick={prev}
                    className="flex-none w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 text-white transition-colors duration-150"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={26} strokeWidth={2.5} />
                  </button>
                ) : (
                  <div className="flex-none w-12" />
                )}

                {/* Media + counter */}
                <div className="flex-1 flex flex-col items-center min-w-0">
                  <motion.div
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="w-full flex items-center justify-center"
                  >
                    {active.type === "video" ? (
                      <video
                        key={active.src}
                        src={active.src}
                        controls
                        autoPlay
                        className="max-w-full max-h-[80vh] rounded outline-none"
                      />
                    ) : (
                      <img
                        src={active.src}
                        alt={active.alt || ""}
                        className="max-w-full max-h-[80vh] object-contain rounded"
                      />
                    )}
                  </motion.div>
                  {media.length > 1 && (
                    <p className="mt-3 font-mono text-[10px] tracking-[0.25em] text-white/40">
                      {lightboxIndex + 1} / {media.length}
                    </p>
                  )}
                </div>

                {/* Next */}
                {media.length > 1 ? (
                  <button
                    onClick={next}
                    className="flex-none w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 text-white transition-colors duration-150"
                    aria-label="Next"
                  >
                    <ChevronRight size={26} strokeWidth={2.5} />
                  </button>
                ) : (
                  <div className="flex-none w-12" />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
