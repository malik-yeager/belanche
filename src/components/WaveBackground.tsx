"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

export default function WaveBackground() {
    const pathname = usePathname();

    // Only show on the homepage
    if (pathname !== '/') {
        return null;
    }

    return (
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto block">
                <path className="fill-theme-wave transition-colors duration-300" fillOpacity="1" d="M0,64L120,90.7C240,117,480,171,720,176C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
        </div>
    );
}
