import React from 'react';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80"
            alt="Landscaping" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl slide-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Créez votre espace extérieur de rêve
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Expert en aménagement paysager au Québec depuis plus de 10 ans
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  Obtenez une soumission gratuite
                </button>
                <button className="btn-secondary">
                  Voir nos promotions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Leader en entretien paysager au Québec
            </h2>
            <p className="text-lg text-gray-600 mb-20">
              Avec plus de 10 ans d'expérience, nous transformons les espaces extérieurs en véritables chefs-d'œuvre. Notre engagement envers l'excellence et la satisfaction client nous distingue dans l'industrie.
            </p>
          </div>
        </div>
        
        {/* Service Types - Full Width */}
        <div className="grid md:grid-cols-2">
          <div className="service-card relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80"
              alt="Commercial Landscaping"
              className="w-full h-full object-cover"
            />
            <div className="service-overlay" />
            <div className="service-text">Commercial</div>
          </div>
          <div className="service-card relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80"
              alt="Residential Landscaping"
              className="w-full h-full object-cover"
            />
            <div className="service-overlay" />
            <div className="service-text">Résidentiel</div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">
            Ils nous font confiance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
            {/* Replace with actual partner logos */}
            <div className="h-12 bg-gray-200"></div>
            <div className="h-12 bg-gray-200"></div>
            <div className="h-12 bg-gray-200"></div>
            <div className="h-12 bg-gray-200"></div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Soumission gratuite</h2>
            <form className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full border-gray-300 border p-3 focus:border-brand focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border-gray-300 border p-3 focus:border-brand focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Courriel
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-gray-300 border p-3 focus:border-brand focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border-gray-300 border p-3 focus:border-brand focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service désiré
                  </label>
                  <select
                    id="service"
                    className="w-full border-gray-300 border p-3 focus:border-brand focus:outline-none"
                    required
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="landscaping">Aménagement paysager</option>
                    <option value="maintenance">Entretien régulier</option>
                    <option value="irrigation">Système d'irrigation</option>
                    <option value="lighting">Éclairage paysager</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={8}
                    className="w-full border-gray-300 border p-3 focus:border-brand focus:outline-none"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Les Entretiens Gauthier</h3>
              <p className="text-gray-400">
                Expert en aménagement paysager depuis plus de 10 ans
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">À propos</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Heures d'ouverture</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Lun-Ven: 8h00 - 17h00</li>
                <li>Sam: 9h00 - 14h00</li>
                <li>Dim: Fermé</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="text-gray-400 space-y-2">
                <li>info@entretiengauthier.com</li>
                <li>+1 (450) 555-0123</li>
                <li>Québec, Canada</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Les Entretiens Gauthier. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;