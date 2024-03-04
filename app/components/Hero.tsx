"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Typewriter from "typewriter-effect";
import me from "../../public/assets/hand.svg";
import { defaultHeroProps } from "../lib/constants";

const Hero = () => {
    const { title, paragraph } = defaultHeroProps;
    const router = useRouter();

    const handleClick = (text: string) => {
        router.replace(`/#${text}`);
    };

    return (
        <section id='hero'>
            <div className='min-h-screen w-full grid grid-cols-1 md:grid-cols-2 bg-slate-800 p-3 '>
                <div className='w-full h-full flex flex-col justify-center pb-5 items-start  min-h-[50vh]'>
                    <h1 className='text-3xl md:text-4xl  text-sky-200 mt-12'>{title} 👋 </h1>
                    <h3 className='text-4xl md:text-5xl  font-semibold tracking-tighter mt-4 md:mt-6 text-sky-400'>
                        <Typewriter
                            options={{
                                strings: [
                                    "Javascript/Typescript",
                                    "React/Redux/Next",
                                    "Node/Express",
                                    "AWS",
                                    "Clean/Reusable Code",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <p className='text-slate-300 text-md md:text-xl font-normal mt-4 md:mt-6 text-left'>
                        {paragraph}
                    </p>
                    <div className='w-full md:w-4/6 grid grid-cols-2 gap-6 mt-6 md:mt-8'>
                        <button
                            className='w-full py-2 md: rounded-full font-semibold bg-white text-slate-800'
                            onClick={() => handleClick("contact")}>
                            Contact Me
                        </button>
                        <button className='w-full py-2 md: rounded-full font-semibold bg-transparent border border-sky-400 text-sky-400'>
                            Download CV
                        </button>
                    </div>
                </div>
                <div className='w-full h-full flex justify-center items-center md:py-10 md:px-2 md:border-l-4  border-l-[#fff] '>
                    <Image
                        src={me}
                        priority
                        // width={300}
                        // height={300}
                        className=' '
                        alt='Andrew Aghoghovwia'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
