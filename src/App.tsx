import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <HelmetProvider>
      <div className="text-[#1d4d85] app min-w-[280px] min-h-screen bg-background">
        <Helmet>
          <title>Mavintop | Mavintop Hospital Davanagere - Maternal & Child Health, Infertility Care</title>
          <meta name="description" content="Mavintop Hospital (mavintop) in Davanagere, Karnataka, is the top choice for maternal and child health, infertility care, gynecology, pediatrics, and advanced medical services. Trusted since 2010. Visit https://www.mavintophospital.com/ for the best care." />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <Header />
        <Main />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
