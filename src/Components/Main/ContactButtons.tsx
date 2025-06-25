import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { contactDetails } from '@/Components/Shared/Consts';

const ContactButtons: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-4 z-50">
      <a href={`tel:${contactDetails.phoneNumbers[0]}`} className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
        <FontAwesomeIcon icon={faPhone} className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
      {/* <a href={`https://wa.me/91${contactDetails.whatsappNumber}`} className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300">
        <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7 sm:h-8 sm:w-8" />
      </a> */}
    </div>
  );
};

export default ContactButtons;