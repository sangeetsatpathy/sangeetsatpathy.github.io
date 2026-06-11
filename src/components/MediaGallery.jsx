import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

// Each item: { type: "image" | "video", src, alt?, poster? }
//
// onOpenLightbox — optional. When provided (e.g. inside a Radix Dialog),
// the parent renders the lightbox itself at a level outside the dialog so
// Radix never intercepts the click. When omitted the lightbox is rendered
// here via a portal (fine for non-dialog contexts like ProjectDetail).
export default function MediaGallery({ media, onOpenLightbox }) {
  const [localItem, setLocalItem] = useState(null);

  const handleOpen = (item) => {
    if (onOpenLightbox) onOpenLightbox(item);
    else setLocalItem(item);
  };

  const close = () => setLocalItem(null);

  useEffect(() => {
    if (!localItem) return;
    const handler = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [localItem]);

  if (!media || media.length === 0) return null;

  return (
    <>
      {/* Thumbnail strip — overflow-hidden on wrapper prevents dialog horizontal scroll */}
      <div className="mt-8 pt-8 border-t border-border/30 overflow-hidden">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Media
        </p>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {media.map((item, i) => (
            <button
              key={i}
              onClick={() => handleOpen(item)}
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

      {/* Local lightbox — only used when NOT inside a Radix Dialog */}
      {!onOpenLightbox && createPortal(
        <AnimatePresence>
          {localItem && (
            <Lightbox item={localItem} onClose={close} />
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

export function Lightbox({ item, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      key="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      style={{ zIndex: 99999, position: "fixed", inset: 0 }}
      className="bg-black/92 flex items-center justify-center"
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 text-white transition-colors duration-150"
        style={{ zIndex: 1 }}
        aria-label="Close"
      >
        <X size={22} strokeWidth={2.5} />
      </button>

      {/* Stop clicks on the media from bubbling up to the backdrop close handler */}
      <div className="flex flex-col items-center max-w-5xl w-full px-8" onClick={(e) => e.stopPropagation()}>
        {item.type === "video" ? (
          <video
            key={item.src}
            src={item.src}
            controls
            autoPlay
            className="max-w-full max-h-[82vh] rounded outline-none"
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt || ""}
            className="max-w-full max-h-[82vh] object-contain rounded"
          />
        )}
      </div>
    </motion.div>
  );
}
