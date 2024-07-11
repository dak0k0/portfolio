'use client';

import React, { ReactNode, useEffect, useRef, useState} from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/styles/constants';
import { SideNavItem } from '@/styles/types';
import { Icon } from "@iconify/react";
import { motion, useCycle } from "framer-motion";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        }
    }),
    closed: {
        clipPath: "circle(0px at 100% 0)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
}

const variants = {
    open: {
        transition: { staggerChildren: 0.02, delayChildren: 0.15}
    },
    closed: {
        transition: { staggerChildren: 0.01, staggerDirection: -1}
    }
}

const HeaderMobile = () => {
    const pathname = usePathname();
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);


    return (
        <motion.nav 
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            className={`inset-0 z-50 w-full md:hidden ${
                isOpen ? "" : "pointer-events-none"
            }`}
            ref={containerRef}
        >
            <motion.div
                className="absolute inset-0 right-0 w-full bg-offwhite"
                variants={sidebar}
            />

            <motion.ul
                className="absolute grid w-full gap-3 px-10 py-16"
                variants={variants}
            >

                {SIDENAV_ITEMS.map( (item, idx) => {
                    const isLastItem = idx === SIDENAV_ITEMS.length - 1;

                    return(
                        <div key={idx}>
                            <CustomMenuItem>
                                <Link
                                    href={item.path}
                                    onClick={() => toggleOpen()}
                                    className={`flex w-full text-2xl ${
                                        item.path === pathname ? "font-bold" : ""
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            </CustomMenuItem>
                        </div>
                    )
                })}

            </motion.ul>
            <div className="h-[14vh] bg-evergreen flex">
                <Link href="/" className="text-offwhite text-4xl tracking-widest flex items-center pl-5">dakota yu</Link>
                <MenuToggle toggle={toggleOpen}/>
            </div>
        </motion.nav>
    )
}

export default HeaderMobile

const MenuToggle = ({ toggle }: { toggle: any}) => (
    <button 
        onClick={toggle}
        className="pointer-events-auto absolute right-5 top-[calc(7vh-23px)] z-30"
    >
        <svg width="46" height="46" viewBox="0 0 46 46">
            <Path
                variants={{
                    closed: { d: "M 5 9.154 L 41 9.154", stroke:"#EFECE7" },
                    open: { d: "M 9 37 L 37 9", stroke:"hsl(0, 0%, 18%)" },
                }}
            />
            <Path
                d="M 5 23 L 41 23"
                stroke="#EFECE7"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{duration: 0.1}}
            />
            <Path
                variants={{
                    closed: { d: "M 5 36.846 L 41 36.846", stroke:"#EFECE7" },
                    open: { d: "M 9 9 L 37 37", stroke:"hsl(0, 0%, 18%)"}
                }}
            />
        </svg>
            
    </button>
)

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="4"
        stroke="hsl(0,0%,18%)"
        strokeLinecap="round"
        {...props}
    />
)

const MenuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100},
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000, duration: 0.02},
        }
    }
}

const CustomMenuItem = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <motion.li variants={MenuItemVariants} className={className}>
            {children}
        </motion.li>
    )
}

const useDimensions = (ref: any) => {
    const dimensions = useRef({width: 0, height: 0})

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight
        }
    }, [ref]);

    return dimensions.current;
}