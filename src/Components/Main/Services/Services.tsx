import { ServicesData } from '@/Components/Shared/Consts';
import Service from './Service';
import { useState } from 'react';
import { SelectedService } from '@/Components/Shared/Types';
import ListItem from './ListItem';
import Banner1 from './Banner1';
import SectionWrapper from '../SectionWrapper';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const [selectedService, setSelectedService] = useState<SelectedService>(
    SelectedService.Inpatient
  );

  const selectedServiceData = ServicesData.find(
    (service) => service.id === selectedService
  );

  return (
    <>
      <Helmet>
        <title>Mavintop | Mavintop Hospital Davanagere - Maternal & Child Health, Infertility Care</title>
        <meta name="description" content="Mavintop Hospital (mavintop) in Davanagere, Karnataka, is the top choice for maternal and child health, infertility care, gynecology, pediatrics, and advanced medical services. Trusted since 2010. Visit https://www.mavintophospital.com/ for the best care." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <SectionWrapper id="services">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-10 text-gradient drop-shadow-md animate-fadeIn">
          Services
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-8 animate-fadeInUp">
          {/* Service Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
            {ServicesData?.map((service, index) => (
              <Service
                key={index}
                service={service}
                SelectService={selectedService}
                setSelectService={setSelectedService}
              />
            ))}
          </div>
          {/* Service Details Panel */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            <div className="w-full max-w-xl bg-white/95 rounded-2xl shadow-2xl p-4 sm:p-8 transition-all min-h-[20rem]">
              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-primary text-center">
                {selectedServiceData?.heading}
              </h3>
              <div className="min-h-[12rem]">
                {selectedServiceData?.subheading && (
                  <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-700 text-center">
                    {selectedServiceData.subheading}
                  </h4>
                )}
                <ul className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                  {selectedServiceData?.texts.map((text, index) => (
                    <ListItem key={index} text={text} />
                  ))}
                </ul>
                {selectedServiceData?.subheading1 && (
                  <>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-700 text-center">
                      {selectedServiceData.subheading1}
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                      {selectedServiceData.texts1.map((text, index) => (
                        <ListItem key={index} text={text} />
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Banner1 />
      </SectionWrapper>
    </>
  );
};

export default Services;
