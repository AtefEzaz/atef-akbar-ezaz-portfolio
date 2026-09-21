import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Types out `text` one character at a time, starting after `startDelay` ms.
 * Respects prefers-reduced-motion by rendering the full string immediately.
 */
export function useTypedText(text: string, startDelay = 300, speed = 45): string {
  const [output, setOutput] = useState(prefersReducedMotion() ? text : '')

  useEffect(() => {
    if (prefersReducedMotion()) {
      setOutput(text)
      return
    }

    let i = 0
    let interval: ReturnType<typeof setInterval>
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setOutput(text.slice(0, i))
        if (i >= text.length) clearInterval(interval)
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, startDelay, speed])

  return output
}
