import { type ReactNode } from 'react'

interface LiquidGlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  topBorderColor?: string
  'aria-labelledby'?: string
}

export default function LiquidGlassCard({
  children,
  className = '',
  hover = true,
  topBorderColor,
  'aria-labelledby': ariaLabelledBy,
}: LiquidGlassCardProps) {
  return (
    <div
      className={`liquid-glass rounded-3xl p-8 ${hover ? 'liquid-glass-card' : ''} ${className}`}
      style={topBorderColor ? { borderTop: `4px solid ${topBorderColor}` } : undefined}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </div>
  )
}
