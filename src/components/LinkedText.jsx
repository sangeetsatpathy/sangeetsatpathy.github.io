import React from "react";

const IROS_URL = "https://2026.ieee-iros.org/";
const IROS_LABEL = "IROS 2026";

export default function LinkedText({ text, stopPropagation = false }) {
  if (!text || !text.includes(IROS_LABEL)) return <>{text}</>;

  const parts = text.split(IROS_LABEL);
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <a
              href={IROS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-foreground transition-colors"
              onClick={stopPropagation ? (e) => e.stopPropagation() : undefined}
            >
              {IROS_LABEL}
            </a>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
