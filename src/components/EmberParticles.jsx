import { useEffect, useRef } from "react";

const EMBER_COLORS = [
  [245, 158, 11],  // amber
  [249, 115, 22],  // orange
  [251, 191, 36],  // gold
  [253, 186, 116], // light orange
  [220, 38,  38],  // deep red
];
const STONE_COLOR = [160, 155, 145];

function makeParticle(canvas, scattered = false) {
  const isStone = Math.random() > 0.78;
  const color = isStone ? STONE_COLOR : EMBER_COLORS[Math.floor(Math.random() * EMBER_COLORS.length)];
  const maxLife = isStone
    ? Math.random() * 300 + 250
    : Math.random() * 220 + 140;
  return {
    x: Math.random() * canvas.width,
    y: scattered ? Math.random() * canvas.height : canvas.height + Math.random() * 30,
    size: isStone ? Math.random() * 1.4 + 0.6 : Math.random() * 2.2 + 0.4,
    speedY: isStone ? Math.random() * 0.25 + 0.08 : Math.random() * 0.55 + 0.18,
    speedX: (Math.random() - 0.5) * (isStone ? 0.15 : 0.35),
    phase: Math.random() * Math.PI * 2,
    life: scattered ? Math.random() * maxLife : 0,
    maxLife,
    color,
    isStone,
  };
}

function resetParticle(p, canvas) {
  const isStone = Math.random() > 0.78;
  const color = isStone ? STONE_COLOR : EMBER_COLORS[Math.floor(Math.random() * EMBER_COLORS.length)];
  p.x = Math.random() * canvas.width;
  p.y = canvas.height + Math.random() * 20;
  p.size = isStone ? Math.random() * 1.4 + 0.6 : Math.random() * 2.2 + 0.4;
  p.speedY = isStone ? Math.random() * 0.25 + 0.08 : Math.random() * 0.55 + 0.18;
  p.speedX = (Math.random() - 0.5) * (isStone ? 0.15 : 0.35);
  p.phase = Math.random() * Math.PI * 2;
  p.life = 0;
  p.maxLife = isStone ? Math.random() * 300 + 250 : Math.random() * 220 + 140;
  p.color = color;
  p.isStone = isStone;
}

export default function EmberParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 45;
    const particles = Array.from({ length: COUNT }, () => makeParticle(canvas, true));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.life++;
        p.x += p.speedX + Math.sin(p.life * 0.03 + p.phase) * (p.isStone ? 0.15 : 0.4);
        p.y -= p.speedY;

        if (p.life > p.maxLife || p.y < -12) {
          resetParticle(p, canvas);
          continue;
        }

        const progress = p.life / p.maxLife;
        let alpha;
        if (progress < 0.18) alpha = (progress / 0.18) * (p.isStone ? 0.3 : 0.55);
        else if (progress > 0.72) alpha = ((1 - progress) / 0.28) * (p.isStone ? 0.3 : 0.55);
        else alpha = p.isStone ? 0.3 : 0.55;

        const [r, g, b] = p.color;
        const glowR = p.isStone ? p.size * 2.5 : p.size * 5;

        // Outer glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        grad.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.8})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Bright core (embers only)
        if (!p.isStone) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,248,220,${alpha * 1.6})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 1.2})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    />
  );
}
