import { CubeIcon, PhoneIcon, StarIcon, UsersIcon } from '@heroicons/react/24/solid';

const NuestrosObjetivos = () => {
  const stats = [
    { icon: <UsersIcon className="w-8 h-8" />, value: "784+", label: "Clientes felices" },
    { icon: <CubeIcon className="w-8 h-8" />, value: "954+", label: "Envíos realizados" },
    { icon: <StarIcon className="w-8 h-8" />, value: "1230+", label: "Opiniones positivas" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Texto y descripción */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <span className="text-blue-600 font-semibold uppercase tracking-wide">
                EMCARGO EXPRESS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Nuestros objetivos
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nuestra prioridad es ofrecer soluciones en transporte de mercancía eficientes en todo el país, 
                adaptándonos a las necesidades de cada cliente y asegurando operaciones fluidas y confiables.
              </p>
            </div>

            {/* Contacto */}
            <div className="flex items-center mt-8">
              <div className="bg-blue-600 p-3 rounded-full">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <div className="ml-4">
                <p className="font-semibold">Llámanos</p>
                <a 
                  href="tel:3508255787" 
                  className="text-blue-600 text-xl hover:text-blue-800 transition-colors"
                >
                  +57 3508255787
                </a>
              </div>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl text-center ${
                    index === 0 ? 'bg-blue-600' : 
                    index === 1 ? 'bg-gray-800' : 'bg-green-600'
                  } text-white`}
                >
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestrosObjetivos;