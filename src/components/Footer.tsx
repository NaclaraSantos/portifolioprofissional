import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-poppins font-semibold text-xl mb-4">Email</h3>
            <a href="mailto:anacsantosweb18@gmail.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail size={20} />
              anacsantosweb18@gmail.com
            </a>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-xl mb-4">Telefone</h3>
            <a href="tel:+5531986245953" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone size={20} />
              (31) 98624-5953
            </a>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-xl mb-4">Instagram</h3>
            <a href="https://instagram.com/anawebfrontend" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Instagram size={20} />
              @anawebfrontend
            </a>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-xl mb-4">Endereço</h3>
            <p className="flex items-center gap-2">
              <MapPin size={20} />
              Nova Lima - MG
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Ana Clara. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}