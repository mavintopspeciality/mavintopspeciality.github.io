import { DoctorsData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
import Doctor from './Doctor';

const Doctors = () => {
  return (
    <SectionWrapper id="doctors">
      <h3 className="text-4xl font-extrabold text-center mb-20 text-gradient drop-shadow-md animate-fadeIn">
        {DoctorsData.heading}
      </h3>
      <div className="flex flex-wrap justify-center gap-10 px-5 md:px-0 animate-fadeInUp">
        {DoctorsData.doctors.map((doctor, index) => (
          <div
            key={index}
            className="p-5 border border-blue-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-xs bg-white/90"
          >
            <Doctor doc={doctor} />
          </div>
        ))}
      </div>
      <img
        className="m-auto max-w-full h-auto mt-12 rounded-2xl shadow-lg animate-fadeIn"
        src={DoctorsData.img}
        alt="Doctors"
      />
    </SectionWrapper>
  );
};

export default Doctors;
