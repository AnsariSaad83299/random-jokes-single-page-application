import { useCallback, useEffect, useState } from 'react'
import './App.css'

const API_BASE_URL = 'https://icanhazdadjoke.com'
const REQUEST_OPTIONS = {
  headers: {
    Accept: 'application/json',
  },
}

function App() {
  const [joke, setJoke] = useState(null)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  const fetchRandomJoke = useCallback(async () => {
    setStatus('loading')
    setError('')

    try {
      const response = await fetch(API_BASE_URL, REQUEST_OPTIONS)

      if (!response.ok) {
        throw new Error(`The joke service returned ${response.status}.`)
      }

      const data = await response.json()
      setJoke(data)
      setStatus('success')
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Something went wrong while fetching a joke.',
      )
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(fetchRandomJoke, 0)

    return () => window.clearTimeout(timer)
  }, [fetchRandomJoke])

  return (
    <main className="app-shell">
      <section className="hero-section" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">Public REST API demo</p>
          <h1 id="page-title">Random Jokes</h1>
          <p className="intro">Browse quick jokes.</p>
        </div>
      </section>

      <section className="joke-layout" aria-label="Joke controls and results">
        <article className="feature-panel">
          <div className="panel-header">
            <div>
              <p className="section-label">Random joke</p>
              <h2>Fresh from the API</h2>
            </div>
            <button
              className="primary-button"
              type="button"
              onClick={fetchRandomJoke}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Loading...' : 'New joke'}
            </button>
          </div>

          {status === 'error' ? (
            <div className="alert" role="alert">
              <strong>Could not fetch a joke.</strong>
              <span>{error}</span>
            </div>
          ) : (
            <blockquote className="joke-card" aria-live="polite">
              {status === 'loading' && !joke
                ? 'Asking the joke desk...'
                : joke?.joke}
            </blockquote>
          )}
        </article>
      </section>
    </main>
  )
}

export default App
