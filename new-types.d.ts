import { MouseEvent, Dispatch, SetStateAction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type NavLinkProps = {
    href: string;
    text: string;
};

export type MobileNavProps = {
    isOpen: boolean;
    activeLink: string;
    clickToScroll: boolean;
    router: AppRouterInstance;
    setClickToScroll: Dispatch<SetStateAction<boolean>>;
    setActiveLink: Dispatch<SetStateAction<string>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type HeroProps = {
    title: string;
    paragraph: string;
};

export type AboutProps = {
    mainTitle: string;
    firstSubTitle: string;
    firstParagrapgh: string;
    secondSubTitle: string;
    achievments: string[];
};

export type SkillComponentProps = {
    name: string;
    icon: React.ReactNode;
    years: number;
};

export type SkillsProps = {
    mainTitle: string;
    subTitle: string;
    paragraph: string;
    subTitle2: string;
    skills: {
        name: string;
        icon: React.ReactNode;
        years: number;
    }[];
};

export type ContactProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
};
