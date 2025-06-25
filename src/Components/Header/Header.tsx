import Logo from '@/assets/Images/Logo.png';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import { SelectedPage } from '@/Components/Shared/Types';

const Header = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const flexBetween = 'flex items-center justify-between';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`backdrop-blur-md bg-white/80 border-b border-blue-100 shadow-sm ${flexBetween} ${
        isTopOfPage ? '' : 'bg-[#e3f0ff]/90'
      } transition fixed top-0 z-30 w-full p-2 md:px-16`}
      aria-label="Main header"
    >
      <a
        href="#home"
        className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
      >
        <img
          className="w-10 sm:w-20 drop-shadow-md"
          src={Logo}
          alt="Mavintop Hospital Logo"
        />
        <span className="font-extrabold text-xl sm:text-2xl text-gradient tracking-tight">
          Mavintop
        </span>
      </a>
      <NavBar
        flexBetween={flexBetween}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </header>
  );
};

export default Header;
