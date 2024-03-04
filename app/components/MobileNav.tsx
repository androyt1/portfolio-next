"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { NavLinks } from "../lib/constants";
import { handleListItemClick } from "../utils/functions";
import { MobileNavProps } from "@/new-types";

const MobileNav = ({
    isOpen,
    activeLink,
    clickToScroll,
    router,
    setClickToScroll,
    setActiveLink,
    setIsOpen,
}: MobileNavProps) => {
    const menuVariants: Variants = {
        initial: {
            opacity: 0,
            zIndex: -10,
        },
        animate: {
            opacity: 1,
            zIndex: 100,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
                staggerDirection: -1,
            },
        },
        exit: {
            opacity: 0,
            zIndex: -10,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                staggerDirection: 1,
                when: "afterChildren",
            },
        },
    };

    const itemVariant: Variants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key='sidebar'
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={menuVariants}
                    className='fixed md:hidden top-[64px] left-0 bottom-0 w-full h-full bg-black/50 backdrop-blur-sm  z-[-999]'>
                    <ul className='flex flex-col justify-center items-center h-full w-full space-y-6 '>
                        {NavLinks.map(({ href, text }) => (
                            <motion.li
                                variants={itemVariant}
                                exit={{ y: -200, opacity: 0, transition: { duration: 0.5 } }}
                                key={href}
                                className={
                                    activeLink === href
                                        ? "  text-sky-400 cursor-pointer text-xl font-bold"
                                        : "text-md cursor-pointer text-white font-semibold"
                                }
                                onClick={(e) => {
                                    handleListItemClick(
                                        e,
                                        router,
                                        clickToScroll,
                                        setClickToScroll,
                                        setActiveLink
                                    );
                                    setIsOpen(false);
                                }}>
                                {text}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileNav;
