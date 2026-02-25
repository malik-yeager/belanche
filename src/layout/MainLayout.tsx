import React from 'react';
import TopBar from '../components/TopBar';
import Newsletter from '../components/Newsletter';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col transition-colors duration-300 bg-theme-bg text-theme-text relative overflow-x-hidden">
            <TopBar />
            <main className="flex-grow w-full z-10 relative">
                {children}
            </main>

            <Newsletter />

            <footer className="py-3 mt-auto bg-theme-wave transition-colors duration-300 relative z-10">
                <div className="text-center text-sm opacity-80 text-white">
                    &copy; {new Date().getFullYear()} Triplogs. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
