import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    servicio: '',
    contacto: '',
    descripcion: ''
  });

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
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-lg">
                Comunícate con nosotros
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                ¿Buscas transporte <span className="text-blue-600">confiable</span> para tu mercancía?
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Con EMCARGO Express, tus envíos están en manos de expertos. Ofrecemos soluciones personalizadas para todas tus necesidades logísticas.
              </p>
            </div>

            <div className="space-y-6">
              {/* Teléfono */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <PhoneIcon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">Llámanos</h3>
                  <a href="tel:3170582122" className="text-blue-600 text-2xl font-medium hover:text-blue-700 transition-colors">
                    +57 317 0582122
                  </a>
                  <p className="text-gray-500 mt-1">Disponibles 24/7 para atenderte</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <EnvelopeIcon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">Correo electrónico</h3>
                  <a href="mailto:contacto@emcargoexpress.com" className="text-blue-600 text-xl font-medium hover:text-blue-700 transition-colors">
                    contacto@emcargoexpress.com
                  </a>
                  <p className="text-gray-500 mt-1">Respuesta en menos de 24 horas</p>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <MapPinIcon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">Ubicación</h3>
                  <p className="text-gray-800 text-xl">Bogotá, Colombia</p>
                  <p className="text-gray-500 mt-1">Cobertura en toda la región</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Envíanos un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-lg font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    required
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="correo" className="block text-lg font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    required
                    onChange={(e) => setFormData({...formData, correo: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="servicio" className="block text-lg font-medium text-gray-700 mb-2">
                  Servicio de interés
                </label>
                <select 
                  id="servicio"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
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
                <label htmlFor="contacto" className="block text-lg font-medium text-gray-700 mb-2">
                  Teléfono o WhatsApp
                </label>
                <input
                  id="contacto"
                  type="text"
                  placeholder="Número de contacto"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  required
                  onChange={(e) => setFormData({...formData, contacto: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="descripcion" className="block text-lg font-medium text-gray-700 mb-2">
                  Descripción de tu envío
                </label>
                <textarea
                  id="descripcion"
                  placeholder="Detalla lo que necesitas transportar"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg h-40"
                  required
                  onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-5 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;