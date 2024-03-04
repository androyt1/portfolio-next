import { NavLinkProps, ContactProps, HeroProps, AboutProps, SkillsProps } from "@/new-types";
import { SkillIcons } from "../utils/SkillIcons";

const NavLinks: NavLinkProps[] = [
    {
        href: "/#hero",
        text: "Home",
    },
    {
        href: "/#about",
        text: "About",
    },
    {
        href: "/#skills",
        text: "Skills",
    },
    {
        href: "/#experience",
        text: "Experience",
    },

    {
        href: "/#projects",
        text: "Projects",
    },
    {
        href: "/#contact",
        text: "Contact",
    },
];

export { NavLinks };

const { Phone, Email, Whatsapp, Address, LinkedIn } = SkillIcons;
export const ContactDetails: ContactProps[] = [
    {
        icon: <Phone color='#fff' size={20} />,
        label: "Phone",
        value: "+447821460751",
    },
    {
        icon: <Whatsapp color='#fff' size={20} />,
        label: "Whatsapp",
        value: "+447821460751",
    },
    {
        icon: <Email color='#fff' size={20} />,
        label: "Email",
        value: "androyt1@gmail.com",
    },
    {
        icon: <LinkedIn color='#fff' size={20} />,
        label: "LinkedIn",
        value: "www.linkedin.com/in/andrew-aghoghovwia",
    },
    {
        icon: <Address color='#fff' size={20} />,
        label: "Address",
        value: "17 Tavern Cl, Carshalton SM5 1JE, England, UK.",
    },
];

// Hero Section
export const defaultHeroProps: HeroProps = {
    title: "Hi, I'm Andrew",
    paragraph:
        "I build beautiful, optimized and functional websites and applications following best practises.",
};

// About Section

export const AboutPageData: AboutProps = {
    mainTitle: "About",
    firstSubTitle: "6+ Years of Relevant  Experience",
    firstParagrapgh:
        "An ambitious problem solver with over four years of experience and a passion for online businesses. Highly skilled in creating logical and innovative solutions to complex problems using technologies such as React/Redux ,Node/Express and MongoDB",
    secondSubTitle: "Achievements",
    achievments: [
        "Built rich and engaging frontend experiences designed to help people stay safe online.",
        "Wrote readable and elegant code admired by all.",
        "Refined high level designs into lower level, actionable technical specifications.",
        "Designed and maintained innovative web applications.",
        "Refined high level designs into lower level, actionable technical specifications.",
        "Worked on both greenfield and legacy projects.",
        "Worked with different web technologies (RESTful, WebSockets, GraphQL). Skills",
    ],
};

// Skill Section
const {
    React,
    Vue,
    HTML,
    CSS,
    SCSS,
    JQUERY,
    Javascript,
    Typescript,
    NextJs,
    NodeJs,
    Mongodb,
    MySQL,
    Git,
    AWS,
} = SkillIcons;

export const skillsData: SkillsProps = {
    mainTitle: "",
    subTitle: "",
    paragraph: "",
    subTitle2: "",
    skills: [
        {
            name: "HTML",
            icon: <HTML color='#fff' size={30} />,
            years: 8,
        },
        {
            name: "CSS",
            icon: <CSS color='#fff' size={30} />,
            years: 8,
        },
        {
            name: "SCSS",
            icon: <SCSS color='#fff' size={30} />,
            years: 5,
        },
        {
            name: "JQUERY",
            icon: <JQUERY color='#fff' size={30} />,
            years: 6,
        },
        {
            name: "Javascript",
            icon: <Javascript color='#fff' size={30} />,
            years: 8,
        },
        {
            name: "Typescript",
            icon: <Typescript color='#fff' size={30} />,
            years: 3,
        },
        {
            name: "React",
            icon: <React color='#fff' size={30} />,
            years: 6,
        },
        {
            name: "Vue",
            icon: <Vue color='#fff' size={30} />,
            years: 3,
        },
        {
            name: "NextJs",
            icon: <NextJs color='#fff' size={30} />,
            years: 3,
        },
        {
            name: "NodeJs",
            icon: <NodeJs color='#fff' size={30} />,
            years: 4,
        },
        {
            name: "Mongodb",
            icon: <Mongodb color='#fff' size={30} />,
            years: 4,
        },
        {
            name: "MySQL",
            icon: <MySQL color='#fff' size={30} />,
            years: 3,
        },
        {
            name: "Git/GitHub",
            icon: <Git color='#fff' size={30} />,
            years: 6,
        },
        {
            name: "AWS",
            icon: <AWS color='#fff' size={30} />,
            years: 2,
        },
    ],
};
