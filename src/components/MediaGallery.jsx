import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

// Each item: { type: "image" | "video", src: "...", alt: "...", poster: "..." }
export default function MediaGallery({ media }) {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const close = () => setLightboxSrc(null);

  useEffect(() => {
    if (!lightboxSrc) return;
    const handler = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxSrc]);

  if (!media || media.length === 0) return null;

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
              onClick={() => setLightboxSrc(item)}
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
        Portal to document.body so position:fixed is relative to the viewport,
        not a CSS-transform ancestor (Radix Dialog animates with transforms).

        data-lightbox lets DialogContent's onInteractOutside identify these
        clicks and call e.preventDefault() to keep the dialog open.
        NOTE: Radix passes a CustomEvent; the real click target is at
        e.detail.originalEvent.target, not e.target.
      */}
      {createPortal(
        <AnimatePresence>
          {lightboxSrc && (
            <motion.div
              data-lightbox="true"
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ zIndex: 99999, position: "fixed", inset: 0 }}
              className="bg-black/92 flex items-center justify-center"
              onClick={(e) => { if (e.target === e.currentTarget) close(); }}
            >
              {/* X — top-right */}
              <button
                onClick={close}
                className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 text-white transition-colors duration-150"
                style={{ zIndex: 1 }}
                aria-label="Close"
              >
                <X size={22} strokeWidth={2.5} />
              </button>

              {/* Media */}
              <div className="flex flex-col items-center max-w-5xl w-full px-8">
                {lightboxSrc.type === "video" ? (
                  <video
                    key={lightboxSrc.src}
                    src={lightboxSrc.src}
                    controls
                    autoPlay
                    className="max-w-full max-h-[82vh] rounded outline-none"
                  />
                ) : (
                  <img
                    src={lightboxSrc.src}
                    alt={lightboxSrc.alt || ""}
                    className="max-w-full max-h-[82vh] object-contain rounded"
                  />
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
