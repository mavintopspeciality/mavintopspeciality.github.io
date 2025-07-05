import { DoctorsData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
import Doctor from './Doctor';
import { Helmet } from 'react-helmet-async';

const Doctors = () => {
  return (
    <>
      <Helmet>
        <title>Mavintop | Mavintop Hospital Davanagere - Maternal & Child Health, Infertility Care</title>
        <meta name="description" content="Mavintop Hospital (mavintop) in Davanagere, Karnataka, is the top choice for maternal and child health, infertility care, gynecology, pediatrics, and advanced medical services. Trusted since 2010. Visit https://www.mavintophospital.com/ for the best care." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <SectionWrapper id="doctors">
        <h3 className="text-4xl font-extrabold text-center mb-20 text-gradient drop-shadow-md animate-fadeIn">
          {DoctorsData.heading}
        </h3>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 px-2 sm:px-5 md:px-0 animate-fadeInUp">
          {DoctorsData.doctors.map((doctor, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 border border-blue-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-[90vw] sm:max-w-xs bg-white/90"
            >
              <Doctor doc={doctor} />
            </div>
          ))}
        </div>
        <img
          className="m-auto max-w-full h-auto mt-8 sm:mt-12 rounded-2xl shadow-lg animate-fadeIn"
          src={DoctorsData.img}
          alt="Doctors"
        />
      </SectionWrapper>
    </>
  );
};

export default Doctors;
