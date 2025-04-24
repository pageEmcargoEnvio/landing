import {
    ArrowRightIcon,
    EnvelopeIcon,
    MapPinIcon,
    PaperAirplaneIcon,
    PhoneIcon
} from '@heroicons/react/24/outline';
  
  const Footer = () => {
    const services = [
      "Envío de mercancía tipo paquete",
      "Transporte de carga puerta a puerta",
      "Envío de mensajería express"
    ];
  
    const quickLinks = [
      { name: "Nosotros", href: "#nosotros" },
      { name: "Servicios", href: "#servicios" },
      { name: "Contacto", href: "#contacto" }
    ];
  
    return (
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Columna 1: Contacto */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" />
                Dirección
              </h3>
              <address className="not-italic">
                <p className="mb-4">Cra 127 #63, Bogotá D.C</p>
                
                <a 
                  href="https://wa.me/573508255787" 
                  className="flex items-center mb-4 hover:text-blue-400 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  +57 3508255787
                </a>
                
                <a 
                  href="mailto:info@emcargoexpress.com" 
                  className="flex items-center hover:text-blue-400 transition-colors"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  info@emcargoexpress.com
                </a>
              </address>
            </div>
  
            {/* Columna 2: Servicios */}
            <div>
              <h3 className="text-xl font-bold mb-6">Servicios</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#servicios" 
                      className="flex items-center hover:text-blue-400 transition-colors"
                    >
                      <ArrowRightIcon className="w-4 h-4 mr-2" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Columna 3: Links rápidos */}
            <div>
              <h3 className="text-xl font-bold mb-6">Links rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="flex items-center hover:text-blue-400 transition-colors"
                    >
                      <ArrowRightIcon className="w-4 h-4 mr-2" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Columna 4: Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6">¿Necesitas transporte?</h3>
              <p className="mb-4">Escríbenos para recibir más información</p>
              
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="px-4 py-3 w-full rounded-l focus:outline-none text-gray-900"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 px-4 rounded-r flex items-center transition-colors"
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
  
          {/* Derechos de autor */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EMCARGO EXPRESS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;