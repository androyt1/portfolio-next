"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase as WorkIcon, GraduationCap as SchoolIcon, Star as StarIcon } from "lucide-react";

const Experience = () => {
    return (
        <section id='experience' className='pt-24'>
            <div className='min-h-screen flex flex-col items-center justify-center p-3 md:p-6 '>
                <div className='w-full flex justify-start  mb-4 md:mb-6'>
                    <h1 className='main-header'>Experience</h1>
                </div>
                <VerticalTimeline lineColor='#fff' animate={true}>
                    <VerticalTimelineElement
                        visible={true}
                        className='vertical-timeline-element--work'
                        contentStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                        dateClassName='date-classname'
                        date='2011 - present'
                        iconStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        icon={<WorkIcon />}>
                        <h3 className='vertical-timeline-element-title'>Creative Director</h3>
                        <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management,
                            Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        visible={true}
                        className='vertical-timeline-element--work'
                        contentStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                        dateClassName='date-classname'
                        date='2010 - 2011'
                        iconStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        icon={<WorkIcon />}>
                        <h3 className='vertical-timeline-element-title'>Art Director</h3>
                        <h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online
                            Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        visible={true}
                        className='vertical-timeline-element--work'
                        dateClassName='date-classname'
                        date='2008 - 2010'
                        contentStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                        iconStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        icon={<WorkIcon />}>
                        <h3 className='vertical-timeline-element-title'>Web Designer</h3>
                        <h4 className='vertical-timeline-element-subtitle'>Los Angeles, CA</h4>
                        <p>User Experience, Visual Design</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        visible={true}
                        className='vertical-timeline-element--work'
                        contentStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                        dateClassName='date-classname'
                        date='2006 - 2008'
                        iconStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        icon={<WorkIcon />}>
                        <h3 className='vertical-timeline-element-title'>Web Designer</h3>
                        <h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
                        <p>User Experience, Visual Design</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        visible={true}
                        className='vertical-timeline-element--education'
                        contentStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                        dateClassName='date-classname'
                        date='April 2013'
                        iconStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        icon={<SchoolIcon />}>
                        <h3 className='vertical-timeline-element-title'>
                            Content Marketing for Web, Mobile and Social Media
                        </h3>
                        <h4 className='vertical-timeline-element-subtitle'>Online Course</h4>
                        <p>Strategy, Social Media</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        visible={true}
                        className='vertical-timeline-element--education'
                        contentStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                        dateClassName='date-classname'
                        date='November 2012'
                        iconStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        icon={<SchoolIcon />}>
                        <h3 className='vertical-timeline-element-title'>
                            Agile Development Scrum Master
                        </h3>
                        <h4 className='vertical-timeline-element-subtitle'>Certification</h4>
                        <p>Creative Direction, User Experience, Visual Design</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        visible={true}
                        className='vertical-timeline-element--education'
                        contentStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                        dateClassName='date-classname'
                        date='2002 - 2006'
                        iconStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        icon={<SchoolIcon />}>
                        <h3 className='vertical-timeline-element-title'>
                            Bachelor of Science in Interactive Digital Media Visual Imaging
                        </h3>
                        <h4 className='vertical-timeline-element-subtitle'>Bachelor Degree</h4>
                        <p>Creative Direction, Visual Design</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        visible={true}
                        iconStyle={{ background: "rgb(16,74,119)", color: "#fff" }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;
