import React from 'react';
import { timingsAndHolidays, googleMapUrl } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';

const Contact: React.FC = () => {
    return (
        <SectionWrapper id="contact">
        <div className="container mx-auto p-6 animate-fadeInUp">
            <h1 className="text-3xl font-extrabold mb-6 text-center text-gradient drop-shadow-md">Contact Us</h1>
            <div className="mb-8 bg-white/90 rounded-2xl shadow-xl p-4 sm:p-6 w-full max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-primary">Timings and Holidays</h2>
                <ul className="list-disc list-inside space-y-2 pl-5 text-gray-800">
                    <li><strong>Neonatal and pediatric OPD:</strong> {timingsAndHolidays.neonatalPediatricOPD}</li>
                    <li><strong>Obstetrics and gynaecology OPD:</strong> {timingsAndHolidays.obstetricsGynecologyOPD}</li>
                    <li><strong>Sunday:</strong> {timingsAndHolidays.sunday}</li>
                    <li><strong>General holidays:</strong> {timingsAndHolidays.generalHolidays}</li>
                    <li><strong>Emergency services:</strong> {timingsAndHolidays.emergencyServices}</li>
                    <li><strong>For Appointments:</strong> {timingsAndHolidays.appointmentsOnSpot}</li>
                    <li><strong>For Appointments over Phone:</strong> {timingsAndHolidays.appointmentsPhone}</li>
                </ul>
                <p className="mt-4 text-gray-800"><strong>Email:</strong> {timingsAndHolidays.email}</p>
                <p className="mt-4 text-gray-800"><strong>Contact:</strong> {timingsAndHolidays.contact}</p>
            </div>
            <div className="my-8 px-0 sm:px-4 animate-fadeIn w-full max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center text-primary">Our Location</h2>
                <div className="relative overflow-hidden rounded-2xl shadow-lg border border-blue-100 w-full aspect-[16/9] mx-auto" style={{ maxWidth: '100%' }}>
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