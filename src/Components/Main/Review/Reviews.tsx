import { FeedbackData } from '@/Components/Shared/Consts';
import { Helmet } from 'react-helmet-async';
import SectionWrapper from '../SectionWrapper';
import Review from './Review';

const Reviews = () => {
  return (
    <>
      <Helmet>
        <title>Mavintop | Mavintop Hospital Davanagere - Maternal & Child Health, Infertility Care</title>
        <meta name="description" content="Mavintop Hospital (mavintop) in Davanagere, Karnataka, is the top choice for maternal and child health, infertility care, gynecology, pediatrics, and advanced medical services. Trusted since 2010. Visit https://www.mavintophospital.com/ for the best care." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <SectionWrapper id="reviews">
        <h3 className="text-3xl font-bold text-center mb-10 md:mb-20">
          {FeedbackData.heading}
        </h3>
        <div className="items-center flex flex-col md:flex-row justify-center gap-5">
          {FeedbackData.feedbacks.map((user, index) => (
            <Review key={index} index={index} user={user} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Reviews;
