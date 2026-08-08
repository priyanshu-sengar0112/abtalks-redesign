import { useState } from 'react'
import ChallengeIcon from './ChallengeIcon'

export default function ProofSubmission({ type, placeholder, submitted, onSubmit }) {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const icon = type === 'GitHub' ? 'code' : 'linkedin'

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!url.trim()) {
      setError(`Add your ${type === 'GitHub' ? 'GitHub repository or commit' : 'LinkedIn post'} URL before submitting.`)
      return
    }

    setError('')
    onSubmit()
  }

  return <section className={`card p-5 ${submitted ? 'border-ab-success/40' : ''}`}><div className="flex items-start gap-3"><div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${submitted ? 'bg-ab-success/15 text-ab-success' : 'bg-ab-accent/10 text-ab-accent'}`}><ChallengeIcon name={submitted ? 'check' : icon} className="h-5 w-5" /></div><div><h2 className="font-display text-lg font-bold text-white">Submit {type} proof</h2><p className="mt-1 text-sm text-ab-muted">{submitted ? `${type} proof received for this challenge.` : `Paste your ${type === 'GitHub' ? 'repository or commit' : 'published post'} link.`}</p></div></div>{submitted ? <div className="mt-4 flex items-center gap-2 rounded-xl bg-ab-success/10 px-3 py-3 text-sm font-semibold text-ab-success"><ChallengeIcon name="check" className="h-4 w-4" />Submitted locally</div> : <form className="mt-4" onSubmit={handleSubmit} noValidate><label className="sr-only" htmlFor={`${type.toLowerCase()}-url`}>{type} URL</label><input id={`${type.toLowerCase()}-url`} value={url} onChange={(event) => { setUrl(event.target.value); if (error) setError('') }} type="url" placeholder={placeholder} aria-invalid={Boolean(error)} aria-describedby={error ? `${type.toLowerCase()}-error` : undefined} className={`min-h-[46px] w-full rounded-xl border bg-ab-surface px-3 text-sm text-white outline-none placeholder:text-ab-muted focus:border-ab-accent ${error ? 'border-red-400' : 'border-ab-border'}`} />{error && <p id={`${type.toLowerCase()}-error`} role="alert" className="mt-2 text-xs font-medium text-red-300">{error}</p>}<button type="submit" className="btn-primary mt-3 w-full !min-h-[46px] !py-2.5">Submit {type} proof</button></form>}</section>
}
