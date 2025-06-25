import { FooterData } from '../Shared/Consts';
import ContactDiv from './ContactDiv';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#aed4ff] to-[#e3f0ff] mt-20 p-10 md:px-16 border-t border-blue-100 shadow-inner">
      <div className="max-w-[1250px] m-auto flex flex-col md:flex-row justify-center gap-14 flex-wrap md:flex-nowrap">
        <div className="font-bold text-center md:text-left">
          <img className="mx-auto md:mx-0 mb-4 drop-shadow-md" width={50} src={FooterData.logo} alt="Logo" />
          <div className="space-y-3">
            {FooterData.addresses.map((address, index) => (
              <p key={index}>{address}</p>
            ))}
          </div>
          <p className="mt-4">{FooterData.phone}</p>
          <p className="mt-2">{FooterData.email}</p>
        </div>
        <div className="flex gap-10 justify-center">
          <div>
            <p className="font-bold text-lg mb-2">Departments</p>
            <ul className="space-y-1">
              {FooterData.departments.map((department, index) => (
                <li key={index}>{department}</li>
              ))}
            </ul>
          </div>
          <ul className="space-y-1">
            {FooterData.links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <ContactDiv />
      </div>
      <div className="text-center text-xs text-gray-500 mt-8">&copy; {new Date().getFullYear()} Mavintop Hospital. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
