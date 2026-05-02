'use client'

import * as React from 'react'

type WelcomeGateProps = {
  children: React.ReactNode
  /**
   * Milliseconds the welcome screen stays visible (including fade).
   * Keep small to avoid blocking users.
   */
  durationMs?: number
  /**
   * If true, show only once per browser via localStorage.
   */
  showOnce?: boolean
}

const STORAGE_KEY = 'gameflow_welcome_seen_v1'

export function WelcomeGate({
  children,
  durationMs = 2600,
  showOnce = true,
}: WelcomeGateProps) {
  const [enabled, setEnabled] = React.useState(false)
  const [visible, setVisible] = React.useState(false)
  const [exiting, setExiting] = React.useState(false)

  React.useEffect(() => {
    if (!showOnce) {
      setEnabled(true)
      setVisible(true)
      return
    }

    try {
      const seen = window.localStorage.getItem(STORAGE_KEY) === '1'
      if (!seen) {
        setEnabled(true)
        setVisible(true)
      }
    } catch {
      // localStorage might be blocked; fall back to showing once per load
      setEnabled(true)
      setVisible(true)
    }
  }, [showOnce])

  React.useEffect(() => {
    if (!enabled) return

    const originalOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'

    const exitMs = Math.max(300, Math.min(600, Math.round(durationMs * 0.22)))
    const exitAtMs = Math.max(0, durationMs - exitMs)

    const t1 = window.setTimeout(() => setExiting(true), exitAtMs)
    const t2 = window.setTimeout(() => {
      setVisible(false)
      setEnabled(false)
      setExiting(false)
      document.documentElement.style.overflow = originalOverflow

      if (showOnce) {
        try {
          window.localStorage.setItem(STORAGE_KEY, '1')
        } catch {
          // ignore
        }
      }
    }, durationMs)

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      document.documentElement.style.overflow = originalOverflow
    }
  }, [enabled, durationMs, showOnce])

  return (
    <>
      <div
        className={[
          'gf-welcome-content',
          enabled ? 'gf-welcome-content--hidden' : 'gf-welcome-content--shown',
        ].join(' ')}
      >
        {children}
      </div>

      {visible && (
        <div
          className={[
            'gf-welcome',
            exiting ? 'gf-welcome--exit' : 'gf-welcome--enter',
          ].join(' ')}
          aria-hidden="true"
        >
          <div className="gf-welcome__bg" />

          <div className="gf-welcome__panel glass">
            <div className="gf-welcome__title text-glow-primary">
              Bienvenue sur <span className="gf-welcome__brand">GameFlow</span>
            </div>
            <div className="gf-welcome__subtitle text-muted-foreground">
              Une nouvelle expérience vous attend
            </div>

            <div className="gf-welcome__loader" aria-hidden="true">
              <span className="gf-welcome__dot" />
              <span className="gf-welcome__dot" />
              <span className="gf-welcome__dot" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

