"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NavLinks } from "../lib/constants";
import { Menu } from "lucide-react";
import { cookie } from "../fonts";
import clsx from "clsx";
import { X } from "lucide-react";
import MobileNav from "./MobileNav";
import { handleListItemClick } from "../utils/functions";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState<string>("/#hero");
    const [clickToScroll, setClickToScroll] = useState<boolean>(false);
    const router = useRouter();
    const smallDeviceWidth = 768;
    useEffect(() => {
        if (window.innerWidth >= smallDeviceWidth) {
            router.replace("/#hero");
            setActiveLink("/#hero");
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [router]);

    useEffect(() => {
        if (!clickToScroll) {
            const handleScroll = () => {
                const sections = document.querySelectorAll("section");

                let found = false;

                sections.forEach((section) => {
                    const rect = section.getBoundingClientRect();

                    if (rect.top <= 150 && rect.bottom >= 150 && !found) {
                        setActiveLink(`/#${section.id}`);
                        found = true;
                    }
                });
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [clickToScroll]);

    const [isOpen, setIsOpen] = useState(false);

    const mobileNavClick = () => {
        setIsOpen((prev) => !prev);
    };

    const [isGreaterThanNavHeight, setIsGreaterThanNavHeight] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 64) {
                setIsGreaterThanNavHeight(true);
            } else {
                setIsGreaterThanNavHeight(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`h-16 md:h-20  md:pt-0   fixed top-0 left-0 right-0  z-40 w-full  md:max-w-6xl mx-auto transition-colors duration-300 ease-linear  ${
                isGreaterThanNavHeight ? "bg-black   text-white" : "bg-transparent text-white"
            }`}>
            <nav className='w-full h-full flex  justify-between items-center px-2 relative'>
                <div>
                    <h3
                        className={clsx(
                            `text-4xl font-normal  hidden md:flex transition-colors duration-500 ease-linear ${
                                isGreaterThanNavHeight ? "text-sky-400" : "text-sky-400"
                            }`,
                            cookie.className
                        )}>
                        Aghoghovwia.A
                    </h3>
                    <h3
                        className={clsx(
                            "text-4xl font-bold text-sky-400 flex md:hidden",
                            cookie.className
                        )}>
                        A.A
                    </h3>
                </div>
                <ul className='hidden md:flex items-center gap-4'>
                    {NavLinks?.map(({ href, text }) => (
                        <li
                            key={text}
                            onClick={(e) =>
                                handleListItemClick(
                                    e,
                                    router,
                                    clickToScroll,
                                    setClickToScroll,
                                    setActiveLink
                                )
                            }
                            className={`transition-colors duration-500 ease-linear ${
                                activeLink === href
                                    ? " text-sky-400  cursor-pointer text-2xl"
                                    : " text-sm cursor-pointer"
                            }`}>
                            {text}
                        </li>
                    ))}
                </ul>
                <div className='block md:hidden cursor-pointer'>
                    {isOpen ? (
                        <X
                            color='#fff'
                            size={40}
                            className='font-semibold cursor-pointer'
                            onClick={mobileNavClick}
                        />
                    ) : (
                        <Menu
                            color='#fff'
                            size={40}
                            className='font-semibold cursor-pointer'
                            onClick={mobileNavClick}
                        />
                    )}
                </div>
                {/* mobile nav */}

                <MobileNav
                    isOpen={isOpen}
                    activeLink={activeLink}
                    clickToScroll={clickToScroll}
                    router={router}
                    setClickToScroll={setClickToScroll}
                    setActiveLink={setActiveLink}
                    setIsOpen={setIsOpen}
                />
            </nav>
        </header>
    );
};

export default Navbar;
