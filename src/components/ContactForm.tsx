import React from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block text-white mb-2">Nome</label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-secondary"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-white mb-2">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-secondary"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-white mb-2">Mensagem</label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-secondary"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-secondary text-primary font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
      >
        <Send size={20} />
        Enviar
      </button>
    </form>
  );
}