'use client'

import clsx from 'clsx';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { useMediaQuery } from '@mui/material';

export default function Header() {
    const pathname = usePathname()

    const matches = useMediaQuery('(max-width: 768px)');

    return(
    <div className="hidden md:flex h-44 bg-evergreen flex-col">
        <div className="flex items-center justify-center h-28">
            <Link href="/" className="text-offwhite text-4xl tracking-widest">dakota yu</Link>
        </div>
        <div className="h-16 flex flex-row bg-dark_evergreen text-offwhite w-full">
            <Link href="/about" className={clsx("w-1/4 flex items-center justify-center text-sm normal-phones:text-base hover:bg-light_evergreen hover:text-dark_evergreen hover:duration-300",
                                            {
                                                'bg-dark_gray': pathname === '/about',
                                            }
            )}>about</Link>
            <Link href="/professional-experience" className={clsx("w-1/4 flex items-center justify-center text-sm normal-phones:text-base hover:bg-light_evergreen hover:text-dark_evergreen hover:duration-300",
                                            {
                                                'bg-dark_gray': pathname === '/professional-experience',
                                            }
            
            )}>{matches ? "experience" : "professional experience"}</Link>
            <Link href="/projects" className={clsx("w-1/4 flex items-center justify-center text-sm normal-phones:text-base hover:bg-light_evergreen hover:text-dark_evergreen hover:duration-300",
                                            {
                                                'bg-dark_gray': pathname === '/projects',
                                            }
            
            )}>projects</Link>
            <Link href="/contact-me" className={clsx("w-1/4 flex items-center justify-center text-sm normal-phones:text-base hover:bg-light_evergreen hover:text-dark_evergreen hover:duration-300",
                                            {
                                                'bg-dark_gray': pathname === '/contact-me',
                                            }
            
            )}>{matches ? "contact" : "contact me"}</Link>
        </div>
    </div>
    )
}