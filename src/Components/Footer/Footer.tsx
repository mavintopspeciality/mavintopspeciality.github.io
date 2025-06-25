import { FooterData } from '../Shared/Consts';
import ContactDiv from './ContactDiv';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#aed4ff] to-[#e3f0ff] mt-10 sm:mt-20 p-4 sm:p-10 md:px-8 lg:px-16 border-t border-blue-100 shadow-inner">
      <div className="max-w-[1250px] m-auto flex flex-col md:flex-row justify-center gap-8 sm:gap-14 flex-wrap md:flex-nowrap">
        <div className="font-bold text-center md:text-left mb-6 md:mb-0">
          <img className="mx-auto md:mx-0 mb-2 sm:mb-4 drop-shadow-md" width={40} src={FooterData.logo} alt="Logo" />
          <div className="space-y-2 sm:space-y-3 text-xs sm:text-base">
            {FooterData.addresses.map((address, index) => (
              <p key={index}>{address}</p>
            ))}
          </div>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base">{FooterData.phone}</p>
          <p className="mt-1 sm:mt-2 text-xs sm:text-base">{FooterData.email}</p>
        </div>
        <div className="flex gap-6 sm:gap-10 justify-center mb-6 md:mb-0">
          <div>
            <p className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Departments</p>
            <ul className="space-y-1 text-xs sm:text-base">
              {FooterData.departments.map((department, index) => (
                <li key={index}>{department}</li>
              ))}
            </ul>
          </div>
          <ul className="space-y-1 text-xs sm:text-base">
            {FooterData.links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <ContactDiv />
      </div>
      <div className="text-center text-[10px] sm:text-xs text-gray-500 mt-4 sm:mt-8">&copy; {new Date().getFullYear()} Mavintop Hospital. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
