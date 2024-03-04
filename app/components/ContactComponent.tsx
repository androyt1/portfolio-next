import React from "react";
import { ContactProps } from "@/new-types";

const ContactComponent = ({ icon, label, value }: ContactProps) => {
    return (
        <div className=' grid grid-cols-6 gap-4 mt-2 w-full'>
            <div className='col-span-2 border-b-2 border-slate-300 w-full p-1 text-slate-300 flex justify-start items-center gap-2'>
                {icon}
                {label}
            </div>
            <div className='col-span-4 border-b-2 border-slate-300 w-full p-1 text-slate-300'>
                {value}
            </div>
        </div>
    );
};

export default ContactComponent;
