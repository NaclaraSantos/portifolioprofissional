import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5531986245953"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
    >
      <MessageCircle size={24} />
    </a>
  );
}