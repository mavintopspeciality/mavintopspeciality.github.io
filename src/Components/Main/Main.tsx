import Home from '@/Components/Main/Home/Home';
import Services from './Services/Services';
import Doctors from './Doctors/Doctors';
import Contact from './Contact/Contact';
import ContactButtons from './ContactButtons';

const Main = () => {
  return (
    <main className="m-auto max-w-[1250px] px-2 md:px-8 lg:px-16 animate-fadeIn">
      <Home />
      <Services />
      <Doctors />
      <Contact />
      <ContactButtons />
    </main>
  );
};

export default Main;
