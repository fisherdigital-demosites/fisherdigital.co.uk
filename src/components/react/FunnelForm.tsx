import { useState, type FormEvent } from 'react';

export default function FunnelForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = name.trim() !== '' && email.trim() !== '';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', name);
      data.append('email', email);
      if (phone) data.append('phone', phone);
      if (message) data.append('message', message);
      data.append('lead_source', 'inbound_website');
      data.append('_subject', 'New Inbound Lead - FisherDigital');

      await fetch('https://formspree.io/f/mojpnokn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          Nice one. We'll be in touch.
        </h3>
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          We'll call you within 24 hours to arrange your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
          Your name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Smith"
          className="w-full rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
          style={{ backgroundColor: '#F5F5F2', border: '1px solid #E5E5E0', color: 'var(--color-text)' }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@business.co.uk"
          className="w-full rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
          style={{ backgroundColor: '#F5F5F2', border: '1px solid #E5E5E0', color: 'var(--color-text)' }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
          Phone <span style={{ color: 'var(--color-text-muted)' }}>(optional but helps us reach you faster)</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="07XXX XXXXXX"
          className="w-full rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
          style={{ backgroundColor: '#F5F5F2', border: '1px solid #E5E5E0', color: 'var(--color-text)' }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
          Tell us about your business <span style={{ color: 'var(--color-text-muted)' }}>(optional)</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What do you do, and what are you looking for?"
          rows={3}
          className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
          style={{ backgroundColor: '#F5F5F2', border: '1px solid #E5E5E0', color: 'var(--color-text)' }}
        />
      </div>

      <button
        type="submit"
        disabled={!canSubmit || submitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-[var(--color-accent)]/20 hover:shadow-[var(--color-accent)]/40"
        style={{ backgroundColor: 'var(--color-accent)' }}
      >
        {submitting ? 'Sending...' : 'Book my free call'}
      </button>

      <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>
        We'll call you within 24 hours. No spam, no hard sell.
      </p>
    </form>
  );
}
