import { GlobeAmericasIcon, TruckIcon } from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';

const Nosotros = () => {
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

  return (
    <section 
      id="nosotros" 
      ref={sectionRef}
      className={`py-16 bg-gray-50 ${animated ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex flex-col md:flex-row gap-12 items-center ${animated ? 'animate-slide-up' : ''}`}>
          {/* Imagen */}
          <div className={`w-full md:w-1/2 h-full relative ${animated ? 'animate-delay-fade-1' : 'opacity-0'}`}>
            <img 
              src="/about.jpg" 
              alt="Equipo EMCARGO EXPRESS" 
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Contenido */}
          <div className={`w-full md:w-1/2 ${animated ? 'animate-delay-fade-2' : 'opacity-0'}`}>
            <div className="mb-6">
              <span className={`text-blue-600 font-semibold uppercase tracking-wide ${animated ? 'animate-delay-fade-3' : 'opacity-0'}`}>
                Sobre nosotros
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mt-2 mb-4 ${animated ? 'animate-delay-fade-4' : 'opacity-0'}`}>
                Tu socio en logística y transporte
              </h2>
              <p className={`text-gray-600 text-lg leading-relaxed ${animated ? 'animate-delay-fade-5' : 'opacity-0'}`}>
                Somos expertos en transporte de mercancías y mensajería. Nuestro personal capacitado garantiza 
                una recogida y entrega rápida y segura, asegurando que tus envíos lleguen a su destino a tiempo 
                y en perfectas condiciones. ¡Tu confianza es nuestra prioridad!
              </p>
            </div>

            {/* Misión y Visión */}
            <div className={`grid gap-8 mt-8 ${animated ? 'animate-delay-fade-6' : 'opacity-0'}`}>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <GlobeAmericasIcon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Misión</h3>
                  <p className="text-gray-600">
                    Brindar un servicio de transporte de carga y correspondencia cumpliendo los protocolos de 
                    seguridad y tiempos de entrega establecidos con el cliente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <TruckIcon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visión</h3>
                  <p className="text-gray-600">
                    En EMCARGO EXPRESS, nuestra visión es liderar en soluciones de envío y transporte, 
                    mejorando continuamente para ofrecer un servicio confiable y eficiente a nuestros clientes.
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="#servicios" 
              className={`inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg 
                        hover:bg-blue-700 transition-colors duration-300 ${animated ? 'animate-delay-fade-7' : 'opacity-0'}`}
            >
              Ver nuestros servicios
            </a>
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
        
        .animate-delay-fade-1 {
          animation: fadeIn 0.6s ease-out 0.3s forwards;
        }
        
        .animate-delay-fade-2 {
          animation: fadeIn 0.6s ease-out 0.4s forwards;
        }
        
        .animate-delay-fade-3 {
          animation: fadeIn 0.6s ease-out 0.5s forwards;
        }
        
        .animate-delay-fade-4 {
          animation: fadeIn 0.6s ease-out 0.6s forwards;
        }
        
        .animate-delay-fade-5 {
          animation: fadeIn 0.6s ease-out 0.7s forwards;
        }
        
        .animate-delay-fade-6 {
          animation: fadeIn 0.6s ease-out 0.8s forwards;
        }
        
        .animate-delay-fade-7 {
          animation: fadeIn 0.6s ease-out 0.9s forwards;
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

export default Nosotros;