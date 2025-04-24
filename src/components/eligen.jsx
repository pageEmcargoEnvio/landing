import { 
  ClockIcon,
  LockClosedIcon,
  TruckIcon,
  MapIcon,
  CubeIcon 
} from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';

const PorQueNosEligen = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

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

  const features = [
    {
      icon: <ClockIcon className="w-10 h-10 text-blue-600" />,
      title: "Compromiso",
      description: "Nos esforzamos por alcanzar la excelencia en todas las áreas de nuestro trabajo, y por entregar resultados de la más alta calidad."
    },
    {
      icon: <LockClosedIcon className="w-10 h-10 text-blue-600" />,
      title: "Seguridad",
      description: "Implementamos rigurosas medidas de seguridad para proteger la carga, el personal y el entorno."
    },
    {
      icon: <TruckIcon className="w-10 h-10 text-blue-600" />,
      title: "Eficiencia",
      description: "Utilizamos tecnología avanzada y estrategias inteligentes para optimizar los tiempos, los recursos y los costos en cada operación."
    },
    {
      icon: <MapIcon className="w-10 h-10 text-blue-600" />,
      title: "Cobertura Nacional",
      description: "Llegamos a cada rincón del país con nuestra red de distribución."
    },
    {
      icon: <CubeIcon className="w-10 h-10 text-blue-600" />,
      title: "Flexibilidad",
      description: "Servicios personalizados según tus necesidades específicas."
    }
  ];

  return (
    <section 
      id="por-que-nos-eligen" 
      ref={sectionRef}
      className={`py-16 bg-gray-50 ${animated ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex flex-col lg:flex-row gap-12 items-center ${animated ? 'animate-slide-up' : ''}`}>
          {/* Texto */}
          <div className={`lg:w-1/2 ${animated ? 'animate-delay-fade-1' : 'opacity-0'}`}>
            <div className="mb-8">
              <span className={`text-blue-600 font-semibold uppercase tracking-wide ${animated ? 'animate-delay-fade-2' : 'opacity-0'}`}>
                EMCARGO EXPRESS
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mt-2 mb-6 ${animated ? 'animate-delay-fade-3' : 'opacity-0'}`}>
                ¿Por qué nos eligen?
              </h2>
              <p className={`text-gray-600 text-lg ${animated ? 'animate-delay-fade-4' : 'opacity-0'}`}>
                Ofrecemos soluciones logísticas integrales con estándares de calidad que nos distinguen en el mercado.
              </p>
            </div>

            <div className={`space-y-8 ${animated ? 'animate-delay-fade-5' : 'opacity-0'}`}>
              {features.map((feature, index) => (
                <div key={index} className={`flex items-start gap-4 ${animated ? `animate-delay-fade-${5 + index}` : 'opacity-0'}`}>
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen */}
          <div className={`lg:w-1/2 h-96 lg:h-auto ${animated ? 'animate-delay-fade-9' : 'opacity-0'}`}>
            <img 
              src="\cargando caja.jpg" 
              alt="Equipo de logística trabajando" 
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
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
        
        .animate-delay-fade-8 {
          animation: fadeIn 0.6s ease-out 1.0s forwards;
        }
        
        .animate-delay-fade-9 {
          animation: fadeIn 0.6s ease-out 1.1s forwards;
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

export default PorQueNosEligen;