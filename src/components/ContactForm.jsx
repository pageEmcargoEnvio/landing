import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useRef, useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    servicio: '',
    contacto: '',
    descripcion: ''
  });

  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Nuevo contacto EMCARGO Express:
      Nombre: ${formData.nombre}
      Email: ${formData.correo}
      Servicio: ${formData.servicio}
      Contacto: ${formData.contacto}
      Descripción: ${formData.descripcion}`;

    window.open(`https://wa.me/573170582122?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section 
      id="contacto"
      ref={sectionRef}
      className={`py-14 md:py-20 bg-gradient-to-b from-gray-50 to-white ${animated ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${animated ? 'animate-slide-up' : ''}`}>
          {/* Información de contacto */}
          <div className="space-y-5 md:space-y-8">
            <div className={`space-y-2 md:space-y-4 ${animated ? 'animate-delay-fade' : ''}`}>
              <span className={`text-blue-600 font-semibold uppercase tracking-wider text-sm md:text-lg ${animated ? 'animate-delay-fade-1' : ''}`}>
                Comunícate con nosotros
              </span>
              <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold leading-tight ${animated ? 'animate-delay-fade-2' : ''}`}>
                ¿Buscas transporte <span className="text-blue-600">confiable</span> para tu mercancía?
              </h2>
              <p className={`text-gray-600 text-sm md:text-xl leading-relaxed ${animated ? 'animate-delay-fade-3' : ''}`}>
                Con EMCARGO Express, tus envíos están en manos de expertos. Ofrecemos soluciones personalizadas para todas tus necesidades logísticas.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {/* Teléfono */}
              <div className={`flex items-start ${animated ? 'animate-delay-fade-4' : ''}`}>
                <div className="bg-blue-100 p-2 md:p-4 rounded-full flex-shrink-0">
                  <PhoneIcon className="h-5 w-5 md:h-8 md:w-8 text-blue-600" />
                </div>
                <div className="ml-3 md:ml-6">
                  <h3 className="text-base md:text-xl font-semibold text-gray-800">Llámanos</h3>
                  <a href="tel:3170582122" className="text-blue-600 text-lg md:text-2xl font-medium hover:text-blue-700 transition-colors">
                    +57 317 0582122
                  </a>
                  <p className="text-gray-500 mt-0.5 text-xs md:text-lg">Disponibles 24/7 para atenderte</p>
                </div>
              </div>

              {/* Email */}
              <div className={`flex items-start ${animated ? 'animate-delay-fade-5' : ''}`}>
                <div className="bg-blue-100 p-2 md:p-4 rounded-full flex-shrink-0">
                  <EnvelopeIcon className="h-5 w-5 md:h-8 md:w-8 text-blue-600" />
                </div>
                <div className="ml-3 md:ml-6">
                  <h3 className="text-base md:text-xl font-semibold text-gray-800">Correo electrónico</h3>
                  <a href="mailto:contacto@emcargoexpress.com" className="text-blue-600 text-sm md:text-xl font-medium hover:text-blue-700 transition-colors">
                    contacto@emcargoexpress.com
                  </a>
                  <p className="text-gray-500 mt-0.5 text-xs md:text-lg">Respuesta en menos de 24 horas</p>
                </div>
              </div>

              {/* Ubicación */}
              <div className={`flex items-start ${animated ? 'animate-delay-fade-6' : ''}`}>
                <div className="bg-blue-100 p-2 md:p-4 rounded-full flex-shrink-0">
                  <MapPinIcon className="h-5 w-5 md:h-8 md:w-8 text-blue-600" />
                </div>
                <div className="ml-3 md:ml-6">
                  <h3 className="text-base md:text-xl font-semibold text-gray-800">Ubicación</h3>
                  <p className="text-gray-800 text-sm md:text-xl">Bogotá, Colombia</p>
                  <p className="text-gray-500 mt-0.5 text-xs md:text-lg">Cobertura en toda la región</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className={`bg-white p-5 sm:p-7 md:p-10 rounded-lg md:rounded-2xl shadow-md md:shadow-xl border border-gray-100 ${animated ? 'animate-delay-fade-7' : ''}`}>
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8 ${animated ? 'animate-delay-fade-7' : ''}`}>
              Envíanos un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-xs md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full p-2 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-lg"
                    required
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="correo" className="block text-xs md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full p-2 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-lg"
                    required
                    onChange={(e) => setFormData({...formData, correo: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="servicio" className="block text-xs md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
                  Servicio de interés
                </label>
                <select 
                  id="servicio"
                  className="w-full p-2 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-lg"
                  onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option>Envío de mercancía tipo paquete</option>
                  <option>Transporte de carga puerta a puerta</option>
                  <option>Envío de mensajería</option>
                  <option>Servicio express</option>
                  <option>Otro servicio</option>
                </select>
              </div>

              <div>
                <label htmlFor="contacto" className="block text-xs md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
                  Teléfono o WhatsApp
                </label>
                <input
                  id="contacto"
                  type="text"
                  placeholder="Número de contacto"
                  className="w-full p-2 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-lg"
                  required
                  onChange={(e) => setFormData({...formData, contacto: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="descripcion" className="block text-xs md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
                  Descripción de tu envío
                </label>
                <textarea
                  id="descripcion"
                  placeholder="Detalla lo que necesitas transportar"
                  className="w-full p-2 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-lg h-28 md:h-40"
                  required
                  onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-xl font-semibold py-3 md:py-5 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Estilos CSS para las animaciones */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-delay-fade {
          animation: fadeIn 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-delay-fade-1 {
          animation: fadeIn 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animate-delay-fade-2 {
          animation: fadeIn 0.6s ease-out 0.5s forwards;
          opacity: 0;
        }
        
        .animate-delay-fade-3 {
          animation: fadeIn 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-delay-fade-4 {
          animation: fadeIn 0.6s ease-out 0.7s forwards;
          opacity: 0;
        }
        
        .animate-delay-fade-5 {
          animation: fadeIn 0.6s ease-out 0.8s forwards;
          opacity: 0;
        }
        
        .animate-delay-fade-6 {
          animation: fadeIn 0.6s ease-out 0.9s forwards;
          opacity: 0;
        }
        
        .animate-delay-fade-7 {
          animation: fadeIn 0.6s ease-out 1.0s forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;