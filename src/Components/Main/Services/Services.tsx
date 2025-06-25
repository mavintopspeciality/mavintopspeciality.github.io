import { ServicesData } from '@/Components/Shared/Consts';
import Service from './Service';
import { useState } from 'react';
import { SelectedService } from '@/Components/Shared/Types';
import ListItem from './ListItem';
import Banner1 from './Banner1';
import SectionWrapper from '../SectionWrapper';
// import Appointment from '@/Components/Main/Appointment/Appointment';

const Services = () => {
  const [selectedService, setSelectedService] = useState<SelectedService>(
    SelectedService.Inpatient
  );
  // const [isAppointmentOpen, setAppointmentOpen] = useState(false);

  // const openAppointment = () => setAppointmentOpen(true);
  // const closeAppointment = () => setAppointmentOpen(false);

  const selectedServiceData = ServicesData.find(
    (service) => service.id === selectedService
  );

  return (
    <SectionWrapper id="services">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gradient drop-shadow-md animate-fadeIn">
        Services
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 animate-fadeInUp">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {ServicesData?.map((service, index) => (
            <Service
              key={index}
              service={service}
              SelectService={selectedService}
              setSelectService={setSelectedService}
            />
          ))}
        </div>
        <div className="lg:min-w-[30rem] lg:max-w-[30rem] mt-8 lg:mt-0 bg-white/90 rounded-2xl shadow-xl p-6 animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            {selectedServiceData?.heading}
          </h3>
          <div className="lg:ml-5 min-h-[33.4375rem]">
            <h4 className="text-xl font-semibold mb-4 text-gray-700">
              {selectedServiceData?.subheading}
            </h4>
            <ul className="grid grid-cols-1 gap-4 md:gap-6 mb-6">
              {selectedServiceData?.texts.map((text, index) => (
                <ListItem key={index} text={text} />
              ))}
            </ul>
            {selectedServiceData?.subheading1 && (
              <>
                <h4 className="text-xl font-semibold mb-4 text-gray-700">
                  {selectedServiceData.subheading1}
                </h4>
                <ul className="grid grid-cols-1 gap-4 md:gap-6 mb-6">
                  {selectedServiceData.texts1.map((text, index) => (
                    <ListItem key={index} text={text} />
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
      <Banner1 />
      {/* <Appointment isOpen={isAppointmentOpen} onClose={closeAppointment} /> */}
    </SectionWrapper>
  );
};

export default Services;
