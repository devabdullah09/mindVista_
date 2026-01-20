import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  
  // WhatsApp number with country code (Pakistan +92)
  const phoneNumber = '923098391932'
  
  const handleClick = () => {
    // Opens WhatsApp in a new tab with the phone number
    window.open(`https://wa.me/${phoneNumber}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Main Button */}
      <div className="relative">
        {/* Pulsing Ring Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Button Container */}
        <div className={`relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:shadow-green-500/50 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}>
          <FaWhatsapp className="w-9 h-9 text-white" />
        </div>

        {/* Tooltip */}
        <div className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}>
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-semibold">
            Chat with us on WhatsApp
            {/* Arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}

export default WhatsAppButton
