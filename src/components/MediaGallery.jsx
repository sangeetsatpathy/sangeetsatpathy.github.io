import React, { useState, useEffect } from "react";
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
        Lightbox — rendered inline (NOT via createPortal) so it stays inside
        the Radix Dialog DOM subtree. Radix's DismissableLayer uses document-level
        capture-phase listeners; portalling to body puts this outside the dialog
        node so every click looks like "outside". Inline + position:fixed avoids
        that entirely — fixed still covers the viewport, and z-[9999] floats it
        above everything.
      */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[9999] bg-black/92 flex items-center justify-center"
          >
            {/* Backdrop click closes lightbox */}
            <div
              className="absolute inset-0"
              onClick={close}
            />

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 text-white transition-colors duration-150"
              aria-label="Close"
            >
              <X size={22} strokeWidth={2.5} />
            </button>

            {/* Prev */}
            {media.length > 1 && (
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 text-white transition-colors duration-150"
                aria-label="Previous"
              >
                <ChevronLeft size={26} strokeWidth={2.5} />
              </button>
            )}

            {/* Media — sits above the backdrop div via z-10 */}
            <div className="relative z-10 flex flex-col items-center max-w-5xl w-full px-20">
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
            {media.length > 1 && (
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 text-white transition-colors duration-150"
                aria-label="Next"
              >
                <ChevronRight size={26} strokeWidth={2.5} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
