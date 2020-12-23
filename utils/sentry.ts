// Dependencies.
import * as Sentry from '@sentry/react'
import { useEffect } from 'react'

// Use Sentry.
export const useSentry = () => {
  useEffect(() => {
    Sentry.init({dsn: "https://f2c34de15c3d44b49f2a01ce4f2b1620@o415677.ingest.sentry.io/5307147"});
  }, [])
}
