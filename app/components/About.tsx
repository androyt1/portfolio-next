"use client";
import React from "react";
import Image from "next/image";
import user from "../../public/assets/bro.svg";
import { CheckCheck } from "lucide-react";
import AchievementComponent from "./AchievementComponent";
import { AboutPageData } from "../lib/constants";

const About = () => {
    const { mainTitle, firstSubTitle, firstParagrapgh, secondSubTitle, achievments } =
        AboutPageData;
    return (
        <section id='about' className='pt-24'>
            <div className='min-h-screen flex flex-col items-center justify-center p-3 md:p-6 '>
                <div className='w-full flex justify-start  mb-4 md:mb-6'>
                    <h1 className='main-header'>{mainTitle}</h1>
                </div>
                <div className='flex-1 grid grid-cols-1 md:grid-cols-2 md:gap-10'>
                    <div>
                        <h2 className='sub-header'>{firstSubTitle} 🥢</h2>
                        <p className='mt-2 text-slate-400 text-left'>{firstParagrapgh}</p>
                        <h2 className='sub-header mt-4'>{secondSubTitle} 🥢</h2>
                        <ul className='ml-4 space-y-2 mt-2 text-slate-400 '>
                            {achievments?.map((achievment, index) => (
                                <AchievementComponent
                                    key={index}
                                    icon={<CheckCheck size={30} className='text-sky-200' />}
                                    text={achievment}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className='flex-1 flex justify-center items-center border-double rounded-md md:border-l-4  border-[#fff]'>
                        <Image
                            src={user}
                            alt='Picture of a web developer working'
                            priority
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
