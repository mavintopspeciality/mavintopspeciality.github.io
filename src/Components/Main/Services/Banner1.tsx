import { Banner1Data } from '@/Components/Shared/Consts';
import ListItem from './ListItem';

const Banner1 = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 md:gap-10 mt-20 w-full">
      <div className="max-w-xs md:max-w-md w-full">
        <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-5">
          {Banner1Data.heading}
        </h3>
        <ul className="text-sm md:ml-5 gap-2 md:gap-5 flex flex-col">
          {Banner1Data.texts.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </ul>
      </div>
      <div className="bg-[#9ae7ff] shadow-xl rounded-2xl p-5 pb-0 max-w-xs md:max-w-md w-full flex items-center justify-center">
        <img src={Banner1Data.img} alt="Banner1" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default Banner1;
