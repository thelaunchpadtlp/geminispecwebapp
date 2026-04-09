/**
 * v2.0 — Animation Variants (Framer Motion)
 * ─────────────────────────────────────────────────────────────────────────────
 * Centralized animation variants for consistent motion design across the app.
 * These follow the "Liquid Glass / Spatial Computing" motion language.
 *
 * Setup (v2.0):
 *   npm install framer-motion
 *   Then import these variants in your components.
 *
 * Usage:
 *   import { fadeInUp, staggerContainer } from '@/lib/v2/animations/variants'
 *   <motion.div variants={fadeInUp} initial="hidden" animate="visible">
 */

// ─── Base variants ───────────────────────────────────────────────────────────

export const fadeInUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── Container variants (for staggered children) ─────────────────────────────

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
}

// ─── Liquid Glass card hover ─────────────────────────────────────────────────

export const liquidGlassHover = {
  rest: {
    scale: 1,
    boxShadow: '0 0 0px rgba(0,240,255,0)',
    transition: { duration: 0.3 },
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 0 30px rgba(0,240,255,0.15)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

// ─── Page transitions ────────────────────────────────────────────────────────

export const pageTransition = {
  initial: { opacity: 0, filter: 'blur(20px)', scale: 0.98 },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    filter: 'blur(20px)',
    scale: 0.98,
    transition: { duration: 0.3 },
  },
}

// ─── Holographic shimmer (for text and borders) ──────────────────────────────

export const holographicShimmer = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// ─── Floating animation ──────────────────────────────────────────────────────

export const floatAnimation = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// ─── Pulse glow ──────────────────────────────────────────────────────────────

export const pulseGlow = (color = '#00f0ff') => ({
  animate: {
    boxShadow: [
      `0 0 0px ${color}00`,
      `0 0 30px ${color}40`,
      `0 0 0px ${color}00`,
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
})
