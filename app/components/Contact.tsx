import ContactComponent from "./ContactComponent";
import { ContactDetails } from "../lib/constants";
import { Suspense } from "react";

const Contact = () => {
    return (
        <section id='contact' className='pt-24'>
            <div className='min-h-screen flex flex-col items-center justify-center p-3 md:p-6 '>
                <div className='w-full flex justify-start  mb-4 md:mb-6'>
                    <h1 className='main-header '>Contact</h1>
                </div>
                <div className='w-full flex-1 grid grid-cols-1 md:grid-cols-2'>
                    <div className='bg-dark-blue'>
                        <Suspense
                            fallback={
                                <div className='flex-1 flex justify-center items-center text-white text-3xl font-semibold'>
                                    Loading Map
                                </div>
                            }>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.9689060370574!2d-0.1765581238802813!3d51.385249519620245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487607cdbe01d641%3A0xdb18548ed3a3489c!2s17%20Tavern%20Cl%2C%20Carshalton%20SM5%201JE!5e0!3m2!1sen!2suk!4v1709276707180!5m2!1sen!2suk'
                                style={{ border: 0, width: "100%", height: "100%" }}
                                allowFullScreen={true}
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'></iframe>
                        </Suspense>
                    </div>
                    <div className='flex flex-col p-3'>
                        <h3 className='sub-header mt-4'>Reach me on 🥢</h3>
                        {ContactDetails.map(({ icon, label, value }) => (
                            <ContactComponent key={label} icon={icon} label={label} value={value} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
