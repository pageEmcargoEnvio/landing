import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Servicios = () => {
  const services = [
    {
      id: 1,
      title: "Envío de mercancía tipo paquete",
      description: "Cualquier tamaño (carga masiva o semimasiva)",
      image: "/service-1.jpg",
      message:
        "¡Hola EMCARGO EXPRESS! Vi su página web y me interesa el servicio de envío de mercancía tipo paquete. ¿Podrían enviarme más información? ¡Gracias!",
    },
    {
      id: 2,
      title: "Transporte de carga y correspondencia puerta a puerta",
      description:
        "Envía tus encomiendas con nosotros y disfruta de un servicio ágil y seguro",
      image: "/service-2.jpg",
      message:
        "¡Hola EMCARGO EXPRESS! Vi su página web y me interesa el servicio de transporte de carga y correspondencia puerta a puerta. ¿Podrían enviarme más información? ¡Gracias!",
    },
    {
      id: 3,
      title: "Envío de mensajería",
      description:
        "Documentos, cartas, tarjetas, impresos, muestras de productos",
      image: "/service-3.jpg",
      message:
        "¡Hola EMCARGO EXPRESS! Vi su página web y me interesa el servicio de envío de mensajería. ¿Podrían enviarme más información? ¡Gracias!",
    },
    {
      id: 4,
      title: "Transporte de vehículos tipo niñera",
      description:
        "Envío de vehículos nuevos o usados en camiones tipo niñera (madriza), ideal para concesionarios, flotillas o traslados múltiples.",
      image: "/service-vehiculos.jpg",
      message:
        "¡Hola EMCARGO EXPRESS! Vi su página web y estoy interesado en el servicio de transporte de vehículos tipo niñera. ¿Podrían enviarme más información sobre disponibilidad y costos? ¡Gracias!",
    },
    {
      id: 5,
      title: "Transporte especializado de motocicletas",
      description:
        "Traslado seguro y profesional de motocicletas, con equipos adecuados para evitar daños durante el transporte.",
      image: "/service-motos.jpg",
      message:
        "¡Hola EMCARGO EXPRESS! Vi su página web y me interesa el servicio de transporte de motocicletas. ¿Podrían darme más información sobre cómo funciona y los costos? ¡Gracias!",
    },
    {
      id: 6,
      title: "Servicio de grúa de carga",
      description:
        "Movilización de vehículos pesados, maquinaria o autos averiados mediante grúas especializadas y operadores capacitados.",
      image: "/service-grua.jpg",
      message:
        "¡Hola EMCARGO EXPRESS! Estoy interesado en su servicio de grúa de carga. ¿Podrían darme más detalles sobre cobertura y tarifas? ¡Gracias!",
    },
  ];

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            Nuestros servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            ¿Necesitas enviar? Lo tenemos todo para ti
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <a
                  href={`https://wa.me/573508255787?text=${encodeURIComponent(
                    service.message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="mr-2">Solicitar servicio</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
