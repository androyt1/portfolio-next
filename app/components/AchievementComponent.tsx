import { ReactNode } from "react";

type AchievementProp = {
    icon: React.ReactNode;
    text: string;
};

const AchievementComponent = ({ icon, text }: AchievementProp) => {
    return (
        <li className='flex items-center justify-start gap-4'>
            <span className='text-xl text-sky-400'>▫</span> <span>{text}</span>
        </li>
    );
};

export default AchievementComponent;
