import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const TrackOrderButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');
  const [error, setError] = useState('');

  const validateCode = (code) => {
    const isValid = /^\d{5,10}$/.test(code);
    if (!isValid) {
      setError('Ingresa un código válido');
    } else {
      setError('');
    }
    return isValid;
  };

  const handleTrack = () => {
    if (validateCode(trackingCode)) {
      const whatsappMessage = `Hola, para rastrear el pedido número ${trackingCode}`;
      window.open(`https://wa.me/573508255787?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }
  };

  const handleContact = (e) => {
    e.preventDefault();
    window.open('https://wa.me/573508255787', '_blank');
  };

  return (
    <>
      {/* Botón flotante - Siempre muestra texto en móviles */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-3 md:left-8 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 z-50"
      >
        <MagnifyingGlassIcon className="w-6 h-6" />
        <span className="ml-2 sm:inline">Rastrear pedido</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => {
                setIsOpen(false);
                setError('');
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Rastrear tu pedido</h2>
            
            <div className="mb-6">
              <label htmlFor="trackingCode" className="block text-sm font-medium text-gray-700 mb-2">
                Código de seguimiento
              </label>
              <input
                type="text"
                id="trackingCode"
                value={trackingCode}
                onChange={(e) => {
                  setTrackingCode(e.target.value);
                  if (error) validateCode(e.target.value);
                }}
                onBlur={() => validateCode(trackingCode)}
                placeholder="Ingresa el codigo"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                }`}
                maxLength={10}
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleTrack}
                disabled={!trackingCode || error}
                className={`px-6 py-2 rounded-lg flex items-center ${
                  trackingCode && !error
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } transition-colors duration-300`}
              >
                <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                Rastrear
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                ¿No tienes tu código?{' '}
                <a 
                  href="https://wa.me/573508255787" 
                  onClick={handleContact}
                  className="text-green-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrackOrderButton;