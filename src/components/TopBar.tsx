"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Map, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { TriplogSVG } from './TriplogSVG';

const TopBar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();
    const [mounted, setMounted] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [ripple, setRipple] = React.useState<{ x: number; y: number; id: number } | null>(null);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = [
        { name: 'About Me', path: '/about', icon: <User size={18} /> },
        { name: 'My Travels', path: '/travels', icon: <Map size={18} /> },
        { name: 'Contact Me', path: '/contact', icon: <Mail size={18} /> },
    ];

    const handleLinkClick = (e: React.MouseEvent, closeMobile?: boolean) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        setRipple({ x, y, id });
        setTimeout(() => setRipple(null), 600);
        if (closeMobile) setIsMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300 bg-theme-topbar/90 border-theme-accent/50">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold transition-colors text-theme-highlight hover:opacity-80">
                            <img src="/triplog.webp" alt="Triplog" className="w-auto" />
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.path;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.path}
                                        onClick={handleLinkClick}
                                        className={`group relative flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 overflow-hidden
                                        ${isActive
                                                ? 'bg-theme-surface text-theme-text shadow-sm'
                                                : 'text-theme-text/70 hover:text-theme-highlight hover:bg-theme-surface/50'
                                            }`}
                                    >
                                        {item.icon}
                                        <span className="relative inline-flex flex-col h-[1.2em] overflow-hidden">
                                            <span className="translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-in-out leading-tight">
                                                {item.name}
                                            </span>
                                            <span className="absolute top-full group-hover:-translate-y-full transition-transform duration-300 ease-in-out leading-tight text-theme-highlight">
                                                {item.name}
                                            </span>
                                        </span>
                                        {/* Ripple */}
                                        {ripple && (
                                            <span
                                                key={ripple.id}
                                                className="absolute rounded-full bg-theme-highlight/20 animate-ripple pointer-events-none"
                                                style={{ left: ripple.x, top: ripple.y, width: 8, height: 8, transform: 'translate(-50%, -50%)' }}
                                            />
                                        )}
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
                                <div className="w-5 h-5 block" />
                            ) : (
                                theme === 'light' ? <Moon size={20} /> : <Sun size={20} />
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-full transition-colors bg-theme-surface text-theme-text hover:bg-theme-accent/50 ml-2 relative z-[60]"
                            aria-label="Toggle Menu"
                        >
                            <div className="w-5 h-5 flex flex-col justify-center items-center">
                                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
                                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown — compact, not full-screen */}
            {/* Backdrop */}
            <div
                onClick={() => setIsMenuOpen(false)}
                className={`md:hidden fixed inset-0 top-16 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Menu Panel */}
            <div
                className={`md:hidden absolute left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top
                    bg-theme-bg/95 backdrop-blur-xl border-b border-theme-accent/30 shadow-xl
                    ${isMenuOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}
            >
                <div className="flex flex-col py-2 w-full">
                    {navItems.map((item, i) => {
                        const isActive = pathname === item.path;
                        return (
                            <React.Fragment key={item.name}>
                                <Link
                                    href={item.path}
                                    onClick={(e) => handleLinkClick(e, true)}
                                    className={`relative flex items-center gap-4 w-full px-6 py-2 text-base font-medium overflow-hidden
                                        transition-all duration-200 active:bg-theme-surface/70 border-y border-theme-text/10
                                        ${isActive
                                            ? 'bg-theme-surface text-theme-highlight'
                                            : 'text-theme-text hover:bg-theme-surface/50'
                                        }
                                        ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}
                                    style={{ transitionDelay: isMenuOpen ? `${i * 60}ms` : '0ms' }}
                                >
                                    <span className={`transition-transform duration-200 ${isActive ? 'text-theme-highlight' : 'text-theme-text/70'}`}>
                                        {React.cloneElement(item.icon as React.ReactElement<{ size: number }>, { size: 20 })}
                                    </span>
                                    <span>{item.name}</span>

                                    {/* Ripple on click */}
                                    {ripple && (
                                        <span
                                            key={ripple.id}
                                            className="absolute rounded-full bg-theme-highlight/15 animate-ripple pointer-events-none"
                                            style={{ left: ripple.x, top: ripple.y, width: 8, height: 8, transform: 'translate(-50%, -50%)' }}
                                        />
                                    )}
                                </Link>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default TopBar;