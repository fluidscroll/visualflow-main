'use client'

import { useState } from 'react'
import Image from 'next/image'

const OPTIONS = [
  'E-learning',
  'Learning Design',
  'Video production',
  'Workshops',
  'Webinars',
]

export default function TwLdEmailnewsletter() {
  const [selected, setSelected] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const allSelected = OPTIONS.every((opt) => selected.includes(opt))

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    )
  }

  const toggleAll = () => {
    setSelected(allSelected ? [] : OPTIONS)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const email = (e.currentTarget.elements.namedItem(
      'email'
    ) as HTMLInputElement).value

    const interests = selected.join(', ')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, interests }),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('sent')
      setSelected([])
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
   
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl sm:px-6 lg:px-9">
        <div className="relative isolate overflow-hidden bg-linear-to-r from-slate-900 to-sky-600  px-6 py-24 shadow-8xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Join our mailing list 
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-50">
            Sign up to recieve our monthly newsletter on digital learning tips for you. Let us know which topics and events you are interested in
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md">
            {/* Email */}
            <div className="flex gap-x-4">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-white placeholder:text-gray-400 focus:outline-indigo-500"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending…' : 'Sign me up'}
              </button>
            </div>

            {/* Checkboxes */}
            <fieldset className="mt-6">
              <legend className="sr-only">Areas of interest</legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {OPTIONS.map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-2 ${
                      allSelected
                        ? 'opacity-50 cursor-not-allowed'
                        : 'text-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(option)}
                      disabled={allSelected}
                      onChange={() => toggleOption(option)}
                      className="h-4 w-4 rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}

                <label className="flex items-center gap-2 sm:col-span-2 font-medium text-white">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                    className="h-4 w-4 rounded border-white/20 bg-white/5 text-indigo-100 focus:ring-indigo-500"
                  />
                  <span>All of the above</span>
                </label>
              </div>
            </fieldset>

            {status === 'sent' && (
              <p className="mt-4 text-sm text-green-400">
                Thanks — you’re on the list!
              </p>
            )}

            {status === 'error' && (
              <p className="mt-4 text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
