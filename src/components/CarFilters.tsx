import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface FilterProps {
  priceRange: string;
  setPriceRange: (range: string) => void;
  carType: string;
  setCarType: (type: string) => void;
}

export default function CarFilters({ priceRange, setPriceRange, carType, setCarType }: FilterProps) {
  return (
    <div className="mb-12">
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-6">
          <SlidersHorizontal className="w-5 h-5 text-[#8C1C11]" />
          <h3 className="text-lg font-semibold text-white">Filtres</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Gamme de Prix
            </label>
            <select 
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full bg-neutral-800 border-neutral-700 text-white rounded-none 
                       focus:ring-[#8C1C11] focus:border-[#8C1C11] p-2"
            >
              <option value="">Tous les prix</option>
              <option value="0-30">0 - 30 €</option>
              <option value="31-50">31 - 50 €</option>
              <option value="51-100">51 - 100 €</option>
              <option value="101+">Plus de 100 €</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Type de Véhicule
            </label>
            <select 
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full bg-neutral-800 border-neutral-700 text-white rounded-none 
                       focus:ring-[#8C1C11] focus:border-[#8C1C11] p-2"
            >
              <option value="">Tous les types</option>
              <option value="SUV">SUV</option>
              <option value="Berline">Berline</option>
              <option value="Citadine">Citadine</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}