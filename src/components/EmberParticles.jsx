import { useEffect, useRef } from "react";

const EMBER_COLORS = [
  [245, 158, 11],
  [249, 115, 22],
  [251, 191, 36],
  [253, 186, 116],
  [220, 38,  38],
];
const STONE = [155, 150, 140];
const COUNT = 36;
const MAX_SPEED = 0.42;
const REPEL_RADIUS = 110;

function makeParticle(w, h) {
  const isStone = Math.random() > 0.78;
  const angle = Math.random() * Math.PI * 2;
  const speed = Math.random() * 0.25 + 0.06;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    wanderAngle: angle,
    opPhase: Math.random() * Math.PI * 2,
    color: isStone ? STONE : EMBER_COLORS[Math.floor(Math.random() * EMBER_COLORS.length)],
    size: isStone ? Math.random() * 1.2 + 0.5 : Math.random() * 2 + 0.6,
    glowR: isStone ? 5 : Math.random() * 8 + 5,
    isStone,
  };
}

export default function EmberParticles() {
  const canvasRef = useRef(null);
  const cursor = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      cursor.current.x = e.clientX;
      cursor.current.y = e.clientY;
    };
    const onLeave = () => { cursor.current.x = null; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const particles = Array.from({ length: COUNT }, () =>
      makeParticle(canvas.width, canvas.height)
    );

    const animate = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: cx, y: cy } = cursor.current;

      // Cursor candlelight glow
      if (cx !== null) {
        const flicker = Math.sin(t * 0.18) * 4 + Math.sin(t * 0.31) * 3;
        const r = 48 + flicker;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, "rgba(255,220,100,0.18)");
        grad.addColorStop(0.4, "rgba(245,158,11,0.09)");
        grad.addColorStop(1, "rgba(249,115,22,0)");
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      for (const p of particles) {
        // Wander: perturb heading slowly
        p.wanderAngle += (Math.random() - 0.5) * 0.06;
        p.vx += Math.cos(p.wanderAngle) * 0.008;
        p.vy += Math.sin(p.wanderAngle) * 0.008;

        // Cursor repulsion
        if (cx !== null) {
          const dx = p.x - cx;
          const dy = p.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPEL_RADIUS && dist > 0) {
            const force = ((1 - dist / REPEL_RADIUS) ** 1.5) * 0.9;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // Speed cap
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > MAX_SPEED) {
          p.vx = (p.vx / spd) * MAX_SPEED;
          p.vy = (p.vy / spd) * MAX_SPEED;
        }

        // Damping
        p.vx *= 0.988;
        p.vy *= 0.988;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        // Opacity pulse
        const alpha = p.isStone
          ? 0.22 + Math.sin(t * 0.008 + p.opPhase) * 0.08
          : 0.45 + Math.sin(t * 0.018 + p.opPhase) * 0.2;

        const [r, g, b] = p.color;

        // Outer glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glowR);
        grd.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.glowR, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (p.isStone ? 0.65 : 0.5), 0, Math.PI * 2);
        ctx.fillStyle = p.isStone
          ? `rgba(${r},${g},${b},${alpha * 1.3})`
          : `rgba(255,245,210,${alpha * 1.8})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
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
