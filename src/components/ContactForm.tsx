import { useState } from 'react';

interface ContactFormProps {
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  sendLabel: string;
}

export default function ContactForm({ nameLabel, emailLabel, messageLabel, sendLabel }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">{nameLabel}</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">{emailLabel}</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">{messageLabel}</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        {status === 'sending' ? '...' : status === 'sent' ? '✓' : sendLabel}
      </button>
    </form>
  );
}
