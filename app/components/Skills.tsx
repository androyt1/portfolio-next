"use client";
import React from "react";
import { CheckCheck } from "lucide-react";
import Image from "next/image";
import coder from "../../public/assets/coder.svg";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import SkillComponent from "./subcomponents/SkillComponent";
import { FaReact } from "react-icons/fa";
import { SkillIcons } from "../utils/SkillIcons";
import { skillsData } from "../lib/constants";

const Skills = () => {
    const { React, HTML } = SkillIcons;
    const { skills } = skillsData;
    return (
        <section id='skills' className='pt-24'>
            <div className='min-h-screen flex flex-col items-center justify-center p-3 md:p-6 '>
                <div className='w-full flex justify-start  mb-4 md:mb-6'>
                    <h1 className='main-header'>Skills</h1>
                </div>
                <div className='flex-1 grid grid-cols-1 md:grid-cols-2 md:gap-10'>
                    <div>
                        <h2 className='sub-header'>Technologies I have worked it 🥢</h2>
                        <p className='mt-2 text-slate-400 text-left'>
                            An ambitious problem solver with over four years of experience and a
                            passion for online businesses. Highly skilled in creating logical and
                            innovative solutions to complex problems using technologies such as
                            React/Redux ,Node/Express and MongoDB
                        </p>
                        <h2 className='sub-header mt-4'>Achievements 🥢</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 pt-4 '>
                            {skills?.map(({ name, icon, years }) => (
                                <SkillComponent key={name} name={name} icon={icon} years={years} />
                            ))}
                        </div>
                    </div>
                    <div className='flex-1 flex justify-center items-center border-double rounded-md md:border-l-4  border-[#fff] text-sky-50 text-xl font-semibold'>
                        {/* <Image src={coder} alt='coder' /> */}
                        <TagCloud
                            options={(w: Window & typeof globalThis): TagCloudOptions => ({
                                radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                                maxSpeed: "slow",
                            })}
                            // onClick={(tag: string, ev: MouseEvent) => alert(tag)}
                            onClickOptions={{ passive: true }}>
                            {[
                                "HTML",
                                "CSS",
                                "SCSS",
                                "TAILWIND CSS",
                                "JQUERY",
                                "REACT/REDUX",
                                "VUE",
                                "NEXT",
                                "NODE/EXPRESS",
                                "MONGODB",
                                "MYSQL",
                                "AWS",
                                "GIT/GITHUB",
                            ]}
                        </TagCloud>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
