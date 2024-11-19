import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a,#000000)]"></div>
        <div className="absolute top-20 -left-24 w-96 h-96 bg-[#8C1C11]/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -right-24 w-96 h-96 bg-[#8C1C11]/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Star className="w-5 h-5 text-[#8C1C11]" fill="currentColor" />
              <span className="text-neutral-400">L'élégance de la location automobile</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="luxury-gradient">DISCOUNTLOC</span>
              <br />
              <span className="text-white">Location Premium</span>
            </h1>
            <p className="text-lg text-neutral-400 mb-8 max-w-lg">
                Découvrez notre collection exclusive de véhicules pour une expérience 
                      de conduite incomparable à Marseille.
                  </p>
            <div className="flex flex-wrap gap-4">
              <a href="#cars" className="btn-primary">
                Découvrir la flotte
                <ChevronRight className="inline-block ml-2 w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/212661507238" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-neutral-800 text-neutral-300 hover:border-[#8C1C11] hover:text-[#8C1C11] transition-all duration-300"
              >
                Réserver maintenant
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 glass-card p-4 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Luxury Car"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 glass-card p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[#8C1C11] font-semibold">À partir de</p>
                    <p className="text-white text-2xl font-bold">30 €/jour</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#8C1C11]" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#8C1C11]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#8C1C11]/10 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}