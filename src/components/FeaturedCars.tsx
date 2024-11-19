import { useState, useMemo } from 'react';
import { Users, Fuel, Cog, X } from 'lucide-react';
import CarFilters from './CarFilters';

const cars = [
  {
    id: 1,
    name: 'Range Rover Velar',
    image: '/range.jpg',
    specs: {
      passengers: '5',
      transmission: 'Automatique', 
      fuel: 'Diesel'
    },
    price: 150,
    type: 'SUV',
    category: 'Premium'
  },
  {
    id: 2,
    name: 'Volkswagen T-Roc',
    image: '/te.jpg', 
    specs: {
      passengers: '5',
      transmission: 'Automatique',
      fuel: 'Diesel'
    },
    price: 80,
    type: 'SUV'
  },
  {
    id: 3,
    name: 'Volkswagen Golf 8',
    image: '/8.jpg',
    specs: {
      passengers: '5', 
      transmission: 'Automatique',
      fuel: 'Diesel'
    },
    price: 70,
    type: 'Berline'
  },
  {
    id: 4,
    name: 'Dacia Duster',
    image: '/duster.jpg',
    specs: {
      passengers: '5',
      transmission: 'Manuelle',
      fuel: 'Diesel'
    },
    price: 45,
    type: 'SUV'
  },
  {
    id: 5,
    name: 'Peugeot 208',
    image: '/208.jpeg',
    specs: {
      passengers: '5',
      transmission: 'Manuelle', 
      fuel: 'Diesel'
    },
    price: 35,
    type: 'Citadine'
  },
  {
    id: 6,
    name: 'Renault Clio 5',
    image: '/clio24.jpg',
    specs: {
      passengers: '5',
      transmission: 'Manuelle',
      fuel: 'Diesel'
    },
    price: 30,
    type: 'Citadine'
  },
  {
    id: 7,
    name: 'Dacia Sandero Stepway',
    image: '/stepway.webp',
    specs: {
      passengers: '5',
      transmission: 'Manuelle',
      fuel: 'Diesel'
    },
    price: 30,
    type: 'Citadine'
  },
  {
    id: 8,
    name: 'Dacia Logan',
    image: '/logan.webp',
    specs: {
      passengers: '5',
      transmission: 'Manuelle',
      fuel: 'Diesel'
    },
    price: 30,
    type: 'Berline'
  },
  {
    id: 9,
    name: 'Citroen C-Elysée',
    image: '/Clise.jpg',
    specs: {
      passengers: '5',
      transmission: 'Manuelle',
      fuel: 'Diesel'
    },
    price: 35,
    type: 'Berline'
  }
];

export default function FeaturedCars() {
  const [priceRange, setPriceRange] = useState('');
  const [carType, setCarType] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      let matchesPrice = true;
      let matchesType = true;

      if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        if (priceRange === "101+") {
          matchesPrice = car.price >= 101;
        } else if (max) {
          matchesPrice = car.price >= min && car.price <= max;
        }
      }

      if (carType) {
        matchesType = car.type === carType;
      }

      return matchesPrice && matchesType;
    });
  }, [priceRange, carType]);

  return (
    <section id="cars" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="luxury-gradient">Notre Collection</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Une sélection raffinée de véhicules pour tous vos besoins
          </p>
        </div>

        <CarFilters 
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          carType={carType}
          setCarType={setCarType}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div 
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  onClick={() => setSelectedImage(car.image)}
                />
                <div className="absolute top-0 right-0 bg-[#8C1C11] text-white px-4 py-2 rounded-bl-lg">
                  {car.price} €/jour
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{car.name}</h3>
                
                <ul className="mb-6 space-y-2">
                  <li className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-[#8C1C11] rounded-full mr-2"></span>
                    <Users className="h-4 w-4 mr-2 text-[#8C1C11]" />
                    <span className="text-sm">{car.specs.passengers} places</span>
                  </li>
                  <li className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-[#8C1C11] rounded-full mr-2"></span>
                    <Cog className="h-4 w-4 mr-2 text-[#8C1C11]" />
                    <span className="text-sm">{car.specs.transmission}</span>
                  </li>
                  <li className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-[#8C1C11] rounded-full mr-2"></span>
                    <Fuel className="h-4 w-4 mr-2 text-[#8C1C11]" />
                    <span className="text-sm">{car.specs.fuel}</span>
                  </li>
                </ul>

                <a
                  href={`https://wa.me/33695628795?text=Je suis intéressé par la ${car.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#8C1C11] text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-[#a82419] transition-colors"
                >
                  Réserver
                </a>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Car preview"
                className="w-full h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}