import { Link } from 'react-router-dom'
import { ReactNode, MouseEvent } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  to?: string
  href?: string
  target?: string
}

function useMagnetic() {
  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width / 2) * 0.35
    const y = (e.clientY - r.top - r.height / 2) * 0.35
    el.style.transform = `translate(${x}px, ${y}px)`
    el.style.transition = 'transform 0.1s linear'
  }
  const onMouseLeave = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translate(0,0)'
    e.currentTarget.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)'
  }
  return { onMouseMove, onMouseLeave }
}

export function Button({ variant = 'primary', children, className = '', type = 'button', onClick, to, href, target }: ButtonProps) {
  const { onMouseMove, onMouseLeave } = useMagnetic()
  const cls = `btn btn-${variant}${className ? ' ' + className : ''}`

  if (to) {
    return (
      <Link
        to={to}
        className={cls}
        onMouseMove={onMouseMove as any}
        onMouseLeave={onMouseLeave as any}
      >
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={cls}
        onMouseMove={onMouseMove as any}
        onMouseLeave={onMouseLeave as any}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={cls}
      onClick={onClick}
      onMouseMove={onMouseMove as any}
      onMouseLeave={onMouseLeave as any}
    >
      {children}
    </button>
  )
}
