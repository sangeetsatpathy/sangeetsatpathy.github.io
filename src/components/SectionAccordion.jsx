import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MediaGallery from "./MediaGallery";

function AccordionItem({ title, content, pdf, media, onOpenLightbox }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-border/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-mono text-sm tracking-[0.15em] uppercase text-foreground/70 group-hover:text-foreground transition-colors duration-300">
          {title}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-primary/50 group-hover:text-primary transition-colors duration-300" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 space-y-5">
              {content && (
                <div className="space-y-4">
                  {content.split("\n\n").map((para, i) => (
                    <p key={i} className="font-body text-base text-foreground/70" style={{ lineHeight: 1.7 }}>
                      {para}
                    </p>
                  ))}
                </div>
              )}
              {pdf && (
                <div className="w-full border border-border/30 overflow-hidden">
                  <iframe
                    src={pdf}
                    className="w-full"
                    style={{ height: "680px" }}
                    allow="autoplay"
                    title={title}
                  />
                </div>
              )}
              {media && media.length > 0 && (
                <MediaGallery media={media} onOpenLightbox={onOpenLightbox} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SectionAccordion({ sections, onOpenLightbox }) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="mt-12">
      <p className="font-mono text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
        Details
      </p>
      <div>
        {sections.map((section, i) => (
          <AccordionItem
            key={i}
            title={section.title}
            content={section.content}
            pdf={section.pdf}
            media={section.media}
            onOpenLightbox={onOpenLightbox}
          />
        ))}
        <div className="border-t border-border/30" />
      </div>
    </div>
  );
}
