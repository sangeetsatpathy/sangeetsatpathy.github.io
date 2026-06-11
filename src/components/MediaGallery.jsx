import React, { useState, useCallback, useEffect } from "react";
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

  // Keyboard nav
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, media.length]);

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

      {/* Lightbox portal */}
      {createPortal(
        <AnimatePresence>
          {active && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              // Stop ALL native pointer/mouse events so Radix Dialog doesn't
              // interpret lightbox clicks as "outside the dialog"
              onPointerDown={(e) => e.nativeEvent.stopImmediatePropagation()}
              onMouseDown={(e) => e.nativeEvent.stopImmediatePropagation()}
              onClick={(e) => {
                e.nativeEvent.stopImmediatePropagation();
                if (e.target === e.currentTarget) close();
              }}
              className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
            >
              {/* Close button — top-right corner, large target */}
              <button
                onPointerDown={(e) => e.nativeEvent.stopImmediatePropagation()}
                onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); close(); }}
                className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors duration-150"
                aria-label="Close"
              >
                <X size={22} strokeWidth={2.5} />
              </button>

              {/* Content area: prev | media | next */}
              <div className="flex items-center w-full h-full px-4 gap-3">
                {/* Prev */}
                <button
                  onPointerDown={(e) => e.nativeEvent.stopImmediatePropagation()}
                  onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); prev(); }}
                  className={`flex-none w-14 h-14 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors duration-150 ${media.length < 2 ? "invisible" : ""}`}
                  aria-label="Previous"
                >
                  <ChevronLeft size={26} strokeWidth={2.5} />
                </button>

                {/* Media */}
                <div className="flex-1 flex flex-col items-center justify-center min-w-0">
                  <motion.div
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center justify-center w-full"
                  >
                    {active.type === "video" ? (
                      <video
                        key={active.src}
                        src={active.src}
                        controls
                        autoPlay
                        className="max-w-full max-h-[82vh] rounded outline-none"
                      />
                    ) : (
                      <img
                        src={active.src}
                        alt={active.alt || ""}
                        className="max-w-full max-h-[82vh] object-contain rounded"
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
                <button
                  onPointerDown={(e) => e.nativeEvent.stopImmediatePropagation()}
                  onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); next(); }}
                  className={`flex-none w-14 h-14 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors duration-150 ${media.length < 2 ? "invisible" : ""}`}
                  aria-label="Next"
                >
                  <ChevronRight size={26} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
