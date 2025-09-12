import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = [
    {
      image: "/carousel-1.jpg",
      title: "EMCARGO EXPRESS",
      subtitle: "Transporte confiable, eficiente y seguro",
      description:
        "Tu carga viaja segura con nosotros, garantizando entregas puntuales y un transporte sin contratiempos.",
      buttons: true,
    },
    {
      image: "/carousel-2.jpg",
      title: "Comprometidos con tu satisfacción",
      subtitle: "Soluciones logísticas integrales",
      description:
        "Expertos en logística, movemos tu carga con rapidez y precisión.",
      buttons: true,
    },
    {
      image: "/carousel-3.jpg",
      title: "Servicio de grúa profesional",
      subtitle: "Asistencia y traslado de vehículos",
      description:
        "Contamos con grúas especializadas y personal capacitado para movilizar tu vehículo de forma segura, rápida y eficiente.",
      buttons: true,
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [activeIndex, paused]);

  return (
    <div
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-full transition-transform duration-700 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="container mx-auto px-4 text-white text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                  <span className="text-blue-500"></span>
                </h1>
                <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto lg:mx-0">
                  {slide.description}
                </p>

                {slide.buttons && (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href="#contacto"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
                    >
                      Ver más
                    </a>
                    <a
                      href="https://wa.me/573508255787"
                      className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contáctanos
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex
                ? "bg-blue-600"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
