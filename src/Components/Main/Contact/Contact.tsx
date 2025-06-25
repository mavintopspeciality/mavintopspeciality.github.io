import React from 'react';
import { timingsAndHolidays, googleMapUrl } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';

const Contact: React.FC = () => {
    return (
        <SectionWrapper id="contact">
        <div className="container mx-auto p-2 sm:p-4 md:p-8 animate-fadeInUp flex flex-col items-center w-full">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-gradient drop-shadow-md">Contact Us</h1>
            <div className="mb-8 bg-white/90 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <h2 className="text-2xl font-bold mb-4 text-primary">Timings and Holidays</h2>
                <ul className="list-disc list-inside space-y-2 pl-5 text-gray-800 text-sm sm:text-base">
                    <li><strong>Neonatal and pediatric OPD:</strong> {timingsAndHolidays.neonatalPediatricOPD}</li>
                    <li><strong>Obstetrics and gynaecology OPD:</strong> {timingsAndHolidays.obstetricsGynecologyOPD}</li>
                    <li><strong>Sunday:</strong> {timingsAndHolidays.sunday}</li>
                    <li><strong>General holidays:</strong> {timingsAndHolidays.generalHolidays}</li>
                    <li><strong>Emergency services:</strong> {timingsAndHolidays.emergencyServices}</li>
                    <li><strong>For Appointments:</strong> {timingsAndHolidays.appointmentsOnSpot}</li>
                    <li><strong>For Appointments over Phone:</strong> {timingsAndHolidays.appointmentsPhone}</li>
                </ul>
                <p className="mt-4 text-gray-800 text-sm sm:text-base"><strong>Email:</strong> {timingsAndHolidays.email}</p>
                <p className="mt-4 text-gray-800 text-sm sm:text-base"><strong>Contact:</strong> {timingsAndHolidays.contact}</p>
            </div>
            <div className="my-8 animate-fadeIn w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <h2 className="text-2xl font-bold mb-4 text-center text-primary">Our Location</h2>
                <div className="relative overflow-hidden rounded-2xl shadow-lg border border-blue-100 w-full aspect-[16/9]">
                    <iframe 
                        src={googleMapUrl} 
                        className="absolute top-0 left-0 w-full h-full rounded-2xl" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location">
                    </iframe>
                </div>
            </div>
        </div>
        </SectionWrapper>
    );
};

export default Contact;