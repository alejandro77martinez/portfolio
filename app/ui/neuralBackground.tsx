"use client"

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  phase: number;
  pulseSpeed: number;
}

interface NeuralBackgroundProps {
  children?: ReactNode;
}

// ── Constants ────────────────────────────────────────────────────────────────

const PALETTE = {
  sky: "#90AFC5",
  ocean: "#336B87",
  night: "#2A3132",
  ember: "#763626",
} as const;

const CONFIG = {
  nodeCount: 72,
  maxDistance: 160,
  nodeSpeed: 0.4,
  nodeRadius: { min: 2, max: 4.5 },
} as const;

// ── Helpers ──────────────────────────────────────────────────────────────────

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function randomBetween(a: number, b: number): number {
  return a + Math.random() * (b - a);
}

function pickNodeColor(): string {
  const colors: string[] = [PALETTE.sky, PALETTE.ocean, PALETTE.ember];
  return colors[Math.floor(Math.random() * colors.length)];
}

// ── Component ────────────────────────────────────────────────────────────────

export default function NeuralBackground({ children }: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Init nodes
    nodesRef.current = Array.from<unknown, Node>({ length: CONFIG.nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * CONFIG.nodeSpeed,
      vy: (Math.random() - 0.5) * CONFIG.nodeSpeed,
      r: randomBetween(CONFIG.nodeRadius.min, CONFIG.nodeRadius.max),
      color: pickNodeColor(),
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: randomBetween(0.008, 0.018),
    }));

    let frame = 0;

    const draw = (): void => {
      frame++;
      const W = canvas.width;
      const H = canvas.height;

      // Background
      ctx.fillStyle = PALETTE.night;
      ctx.fillRect(0, 0, W, H);

      // Vignette
      const vignette = ctx.createRadialGradient(W / 2, H / 2, H * 0.1, W / 2, H / 2, H * 0.85);
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, W, H);

      const nodes = nodesRef.current;

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.maxDistance) {
            const alpha = (1 - dist / CONFIG.maxDistance) * 0.45;

            const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            gradient.addColorStop(0, `rgba(${hexToRgb(a.color)},${alpha})`);
            gradient.addColorStop(1, `rgba(${hexToRgb(b.color)},${alpha})`);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = alpha * 2.2;
            ctx.stroke();

            // Signal pulse traveling along edge
            const pulseT = (frame * 0.003 + i * 0.07 + j * 0.13) % 1;
            if (pulseT < 0.6 && (i + j) % 5 === 0) {
              const px = a.x + (b.x - a.x) * pulseT;
              const py = a.y + (b.y - a.y) * pulseT;
              const pulseAlpha = Math.sin(pulseT * Math.PI) * 0.9;
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(${hexToRgb(PALETTE.sky)},${pulseAlpha})`;
              ctx.fill();
            }
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        node.phase += node.pulseSpeed;
        const pulse = 0.7 + 0.3 * Math.sin(node.phase);
        const r = node.r * pulse;

        // Outer glow
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 5);
        glow.addColorStop(0, `rgba(${hexToRgb(node.color)},0.25)`);
        glow.addColorStop(1, `rgba(${hexToRgb(node.color)},0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Highlight
        ctx.beginPath();
        ctx.arc(node.x - r * 0.25, node.y - r * 0.25, r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fill();

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce
        if (node.x < 0 || node.x > W) node.vx *= -1;
        if (node.y < 0 || node.y > H) node.vy *= -1;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#2A3132] text-white">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full"
        style={{ display: "block" }}
      />
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
}