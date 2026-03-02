import { useEffect } from 'react'

const DEFAULT_TITLE = 'Spanforge — LLM & Agentic AI Observability'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title || DEFAULT_TITLE
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title])
}
