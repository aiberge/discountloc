import React from 'react';
import { Phone, MessageSquare, MapPin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="luxury-gradient">Contactez-nous</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-6 transform hover:scale-105 transition duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-none bg-[#8C1C11]/10">
                  <Phone className="h-6 w-6 text-[#8C1C11]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Téléphone</h3>
                  <a href="tel:+33695628795" className="text-[#8C1C11] hover:text-[#a82419]">
                    +33 6 95 62 87 95
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 transform hover:scale-105 transition duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-none bg-[#8C1C11]/10">
                  <MessageSquare className="h-6 w-6 text-[#8C1C11]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">WhatsApp</h3>
                  <a 
                    href="https://wa.me/33695628795"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8C1C11] hover:text-[#a82419]"
                  >
                    Contactez-nous sur WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 transform hover:scale-105 transition duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-none bg-[#8C1C11]/10">
                  <Mail className="h-6 w-6 text-[#8C1C11]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <a href="mailto:contact@hammaouicar.ma" className="text-[#8C1C11] hover:text-[#a82419]">
                    contact@hammaouicar.ma
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 transform hover:scale-105 transition duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-none bg-[#8C1C11]/10">
                  <MapPin className="h-6 w-6 text-[#8C1C11]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Adresse</h3>
                  <p className="text-neutral-400">11 Bd de la Corderie, 13007 Marseille, France</p>
                </div>
              </div>
            </div>

            <div className="glass-card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46461.79949346805!2d5.3170201164451845!3d43.296201769200174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c1598de175b3%3A0xee989bbdc7b97ffa!2sDISCOUNTLOC%20%2C%20Location%20de%20voitures%20la%20moins%20cher%20de%20Marseille%20%C3%A0%20partir%20de%2030euros%2Fjour%20%2C%20570%20euros%20%C3%A0%20partir%20d%27un%20mois.!5e0!3m2!1sfr!2sma!4v1732052313666!5m2!1sfr!2sma"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="glass-card p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full bg-neutral-800 border-neutral-700 rounded-none 
                           text-white focus:ring-[#8C1C11] focus:border-[#8C1C11]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full bg-neutral-800 border-neutral-700 rounded-none 
                           text-white focus:ring-[#8C1C11] focus:border-[#8C1C11]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-300">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full bg-neutral-800 border-neutral-700 rounded-none 
                           text-white focus:ring-[#8C1C11] focus:border-[#8C1C11]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full bg-neutral-800 border-neutral-700 rounded-none 
                           text-white focus:ring-[#8C1C11] focus:border-[#8C1C11]"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}