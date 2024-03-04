import { SkillComponentProps } from "@/new-types";

const SkillComponent = ({ name, icon, years }: SkillComponentProps) => {
    return (
        <div className='grid grid-cols-4 border-b-2 border-white py-1 w-full '>
            <div className='col-span-1'>{icon}</div>
            <div className='col-span-2 flex justify-start items-center text-white'>
                <span className='font-semibold'>{name}</span>
            </div>
            <div className='col-span-1 flex justify-start items-center gap-2 text-white '>
                <span>Years:</span>
                <span>{years}</span>
            </div>
        </div>
    );
};

export default SkillComponent;
