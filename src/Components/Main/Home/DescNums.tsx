import { descNums } from '@/Components/Shared/Consts';

const DescNums = () => {
  return (
    <div className="flex px-2 xs:px-4 sm:px-5 md:px-0 gap-5 flex-wrap items-center md:flex-nowrap text-center justify-center md:justify-around mt-10 animate-fadeInUp">
      {descNums.map((descNum, index) => (
        <div
          className="rounded-3xl shadow-xl p-6 md:px-2 lg:w-1/5 w-xl bg-white/80 hover:shadow-2xl transition-all duration-300 border border-blue-100"
          key={index}
        >
          <h3 className="lg:text-4xl text-2xl font-bold mb-2 text-gradient drop-shadow-sm">
            {descNum.num}
          </h3>
          <p className="lg:text-base text-sm text-gray-700">{descNum.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DescNums;
