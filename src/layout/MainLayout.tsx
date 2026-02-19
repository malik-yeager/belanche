import React from 'react';
import TopBar from '../components/TopBar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col transition-colors duration-300 bg-theme-bg text-theme-text relative overflow-x-hidden">
            <TopBar />
            <main className="flex-grow w-full z-10 relative">
                {children}
            </main>

            {/* Wave SVG Background */}
            <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto block">
                    <path className="fill-theme-wave transition-colors duration-300" fillOpacity="1" d="M0,64L120,90.7C240,117,480,171,720,176C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </div>

            <footer className="py-6 mt-auto transition-colors duration-300 relative z-10">
                <div className="text-center text-sm opacity-80 text-theme-text">
                    &copy; {new Date().getFullYear()} Triplogs. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
