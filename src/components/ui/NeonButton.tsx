import { type ReactNode } from 'react'

interface NeonButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'white' | 'blue' | 'purple'
  className?: string
  'aria-label'?: string
}

const variants = {
  white:  'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]',
  blue:   'bg-transparent border border-[#00f0ff] text-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]',
  purple: 'bg-transparent border border-[#8a2be2] text-[#8a2be2] shadow-[0_0_20px_rgba(138,43,226,0.2)] hover:shadow-[0_0_30px_rgba(138,43,226,0.4)]',
}

export default function NeonButton({
  children,
  onClick,
  variant = 'white',
  className = '',
  'aria-label': ariaLabel,
}: NeonButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`px-8 py-4 font-semibold rounded-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
