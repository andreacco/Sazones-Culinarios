import React from 'react'
import Logo from "@/components/logo";
import { Dancing_Script } from 'next/font/google';
import { ThemeSwitcher } from '../../ThemeSwitch/ThemeSwitcher';
import Facebook from './SocialMedia/Facebook';
import Instagram from './SocialMedia/Instagram';
import Tiktok from './SocialMedia/Tiktok';
import SearchBar from './SearchBar';

const dancing = Dancing_Script({
    subsets: ["latin"],
    variable: "--title-font",
})

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='bg-sc-navbarBackground dark:bg-gradient-to-b dark:from-[#282c33] dark:to-sc-darkBackground flex w-full h-15 md:h-28 items-center justify-between p-3 z-10 '>
            <div className='flex items-center'>
                <Logo />
                <p className={`
                    ${dancing.variable} 
                    font-serif 
                    font-bold 
                    text-inherit 
                    pl-3 
                    text-sc-blacky
                    dark:text-sc-background
                    md:text-4xl
                `}>
                    Sazones Culinarios
                </p>
            </div>
            {/* <div className={`
                    ${isMenuOpen 
                    ? `flex 
                    items-center
                    flex-col 
                    absolute
                    top-16
                    right-0
                    bg-[#AFAFAF]
                    dark:bg-sc-darkBackground
                    h-full
                    px-5
                    z-[-1]
                    transition-transform
                    transform 
                    translate-x-0

                    md:relative
                    md:flex-row
                    md:top-0
                    md:bg-transparent
                    md:dark:bg-transparent
                    md:z-10
                    ` 
                    : `absolute
                    top-16
                    translate-x-full
                    opacity-100 
                    md:relative
                    md:translate-x-0
                    md:opacity-100
                    `}  
                    md:flex 
                    md:mr-5 
                    md:w-[590px] 
                    md:justify-between 
                    md:items-center
                    text-sc-blacky 
                    dark:text-sc-background
                `}> */}
            <div className={`
                flex 
                items-center
                flex-col 
                absolute
                top-[4.5rem]
                right-0
                bg-[#AFAFAF]
                dark:bg-sc-darkBackground
                h-full
                px-5
                mr-0
                z-[-1]
                md:relative
                md:flex-row
                md:top-0
                md:bg-transparent
                md:dark:bg-transparent
                md:z-10 
                transition-transform
                ${isMenuOpen ? `translate-y-0 opacity-100` : `-translate-y-full opacity-0 pointer-events-none md:translate-y-0 md:opacity-100`}
                md:flex 
                md:mr-5 
                md:w-[590px] 
                md:justify-between 
                md:items-center
                text-sc-blacky 
                dark:text-sc-background
            `}>
                <div className='flex flex-col items-center md:flex-row'>
                    <h1 className='p-3 text-xl'>Inicio</h1>
                    <h1 className='p-3 text-xl'>Cursos</h1>
                    <SearchBar />
                </div>
                <div className="flex flex-row justify-between mt-5 mb-5 md:mb-0 md:mt-0">
                    <Facebook />
                    <Instagram />
                    <Tiktok />
                </div>
                <ThemeSwitcher />
            </div>
            <div className='flex flex-col justify-between h-5 md:hidden' onClick={() => toggleOpen()}>
                <div className={`
                    ${isMenuOpen
                        ? `rotate-45 translate-y-2`
                        : `
                        `}
                        block
                        w-6 
                        h-1 
                        rounded-full 
                        bg-slate-50
                        transition
                        ease-in-out
                        transform
                        delay-75
                    `}>
                </div>
                <div className={`
                    ${isMenuOpen
                        ? `opacity-0`
                        : `
                        `}
                        block
                        w-6 
                        h-1 
                        rounded-full 
                        bg-slate-50
                        transition
                        ease-in-out
                        transform
                        delay-0
                    `}>
                </div>
                <div className={`
                    ${isMenuOpen
                        ? "rotate-[-45deg] -translate-y-2"
                        : `
                        `}
                        block
                        w-6 
                        h-1 
                        rounded-full 
                        bg-slate-50
                        transition
                        ease-in-out
                        transform
                        delay-75
                    `}>
                </div>
            </div>
        </div>
    );
}

export default NavBar
