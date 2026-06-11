import React, { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

// Each item: { type: "image" | "video", src: "...", alt: "...", poster: "..." }
// `poster` is optional — a thumbnail image shown before the video plays
export default function MediaGallery({ media }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const open = (i) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = useCallback((e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + media.length) % media.length);
  }, [media.length]);
  const next = useCallback((e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % media.length);
  }, [media.length]);

  if (!media || media.length === 0) return null;

  const active = lightboxIndex !== null ? media[lightboxIndex] : null;

  return (
    <>
      {/* Section label */}
      <div className="mt-8 pt-8 border-t border-border/30">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Media
        </p>

        {/* Horizontal scroll strip */}
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
                    <img
                      src={item.poster}
                      alt={item.alt || "video thumbnail"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      preload="metadata"
                      muted
                      playsInline
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center">
                      <Play size={16} className="text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt || ""}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox — rendered at body level via portal */}
      {createPortal(
        <AnimatePresence>
          {active && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 z-[200] bg-black/92 flex items-center justify-center p-4 md:p-10"
            >
              {/* Layout: arrows + media box */}
              <div className="flex items-center gap-3 max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                {/* Prev arrow */}
                {media.length > 1 ? (
                  <button
                    onClick={prev}
                    className="flex-none w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200"
                  >
                    <ChevronLeft size={22} />
                  </button>
                ) : <div className="flex-none w-10" />}

                {/* Media + close + counter */}
                <div className="relative flex-1 flex flex-col items-center">
                  {/* Close — top-right corner of the media */}
                  <button
                    onClick={close}
                    className="absolute -top-3 -right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors duration-200"
                  >
                    <X size={16} />
                  </button>

                  <motion.div
                    key={lightboxIndex}
                    initial={{ scale: 0.96, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.18 }}
                    className="w-full flex items-center justify-center"
                  >
                    {active.type === "video" ? (
                      <video
                        key={active.src}
                        src={active.src}
                        controls
                        autoPlay
                        className="max-w-full max-h-[80vh] outline-none rounded"
                      />
                    ) : (
                      <img
                        src={active.src}
                        alt={active.alt || ""}
                        className="max-w-full max-h-[80vh] object-contain rounded"
                      />
                    )}
                  </motion.div>

                  {/* Counter below media */}
                  {media.length > 1 && (
                    <p className="mt-3 font-mono text-[10px] tracking-[0.2em] text-white/40">
                      {lightboxIndex + 1} / {media.length}
                    </p>
                  )}
                </div>

                {/* Next arrow */}
                {media.length > 1 ? (
                  <button
                    onClick={next}
                    className="flex-none w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200"
                  >
                    <ChevronRight size={22} />
                  </button>
                ) : <div className="flex-none w-10" />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
