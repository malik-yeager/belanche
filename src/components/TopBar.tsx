"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Map, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const TopBar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = [
        { name: 'About Me', path: '/about', icon: <User size={18} /> },
        { name: 'My Travels', path: '/travels', icon: <Map size={18} /> },
        { name: 'Contact Me', path: '/contact', icon: <Mail size={18} /> },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300 bg-theme-bg/90 border-theme-accent/50">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold transition-colors text-theme-highlight hover:opacity-80">
                            <img src="/triplog.png" alt="Triplogs Logo" className="h-14 w-auto display-block object-contain" />
                            <span>Triplogs</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.path;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.path}
                                        className={`group flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 overflow-hidden
                                        ${isActive
                                                ? 'bg-theme-surface text-theme-text shadow-sm'
                                                : 'text-theme-text/70 hover:text-theme-highlight hover:bg-theme-surface/50'
                                            }`}
                                    >
                                        {item.icon}

                                        {/* Flip Text Container */}
                                        <span className="relative inline-flex flex-col h-[1.2em] overflow-hidden">
                                            {/* Original Text - slides up on hover */}
                                            <span className="translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-in-out leading-tight">
                                                {item.name}
                                            </span>
                                            {/* Duplicate Text - slides in from below */}
                                            <span className="absolute top-full group-hover:-translate-y-full transition-transform duration-300 ease-in-out leading-tight text-theme-highlight">
                                                {item.name}
                                            </span>
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full transition-colors bg-theme-surface text-theme-text hover:bg-theme-accent/50"
                            aria-label="Toggle Theme"
                        >
                            {!mounted ? (
                                <div className="w-5 h-5 block" /> // Placeholder to prevent hydration mismatch
                            ) : (
                                theme === 'light' ? <Moon size={20} /> : <Sun size={20} />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;