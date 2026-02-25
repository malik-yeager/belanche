"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface PaginationProps {
    onPrevious?: () => void;
    onNext?: () => void;
    hasPrevious?: boolean;
    hasNext?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
    onPrevious = () => { },
    onNext = () => { },
    hasPrevious = true,
    hasNext = true
}) => {
    const tBtn = useTranslations('Buttons');

    return (
        <>
            {/* Desktop: Absolute Center Left/Right */}
            <div className="hidden md:block">
                {/* Previous Button */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
                    <button
                        onClick={onPrevious}
                        disabled={!hasPrevious}
                        className={`group flex items-center justify-center w-12 h-[52px] border border-theme-text/20 bg-theme-text/5 backdrop-blur-md transition-all duration-300 shadow-xl
                            ${hasPrevious
                                ? 'hover:bg-theme-text hover:border-theme-text cursor-pointer'
                                : 'opacity-30 cursor-not-allowed'
                            }`}
                        aria-label={tBtn('previous')}
                    >
                        <ChevronLeft className={`w-6 h-6 transition-colors duration-300 ${hasPrevious ? 'stroke-theme-text group-hover:stroke-theme-bg' : 'stroke-theme-text'}`} />
                    </button>
                </div>

                {/* Next Button */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
                    <button
                        onClick={onNext}
                        disabled={!hasNext}
                        className={`group flex items-center justify-center w-12 h-[52px] border border-theme-text/20 bg-theme-text/5 backdrop-blur-md transition-all duration-300 shadow-xl
                            ${hasNext
                                ? 'hover:bg-theme-text hover:border-theme-text cursor-pointer'
                                : 'opacity-30 cursor-not-allowed'
                            }`}
                        aria-label={tBtn('next')}
                    >
                        <ChevronRight className={`w-6 h-6 transition-colors duration-300 ${hasNext ? 'stroke-theme-text group-hover:stroke-theme-bg' : 'stroke-theme-text'}`} />
                    </button>
                </div>
            </div>

            {/* Mobile: Bottom Flex Bar */}
            <div className="flex justify-between w-full pt-4 md:hidden">
                <button
                    onClick={onPrevious}
                    disabled={!hasPrevious}
                    className={`group flex items-center justify-center w-12 h-[52px] border border-theme-text/20 bg-theme-text/5 backdrop-blur-md transition-all duration-300 shadow-xl
                        ${hasPrevious
                            ? 'hover:bg-theme-text hover:border-theme-text cursor-pointer'
                            : 'opacity-30 cursor-not-allowed'
                        }`}
                    aria-label={tBtn('previous')}
                >
                    <ChevronLeft className={`w-6 h-6 transition-colors duration-300 ${hasPrevious ? 'stroke-theme-text group-hover:stroke-theme-bg' : 'stroke-theme-text'}`} />
                </button>

                <button
                    onClick={onNext}
                    disabled={!hasNext}
                    className={`group flex items-center justify-center w-12 h-[52px] border border-theme-text/20 bg-theme-text/5 backdrop-blur-md transition-all duration-300 shadow-xl
                        ${hasNext
                            ? 'hover:bg-theme-text hover:border-theme-text cursor-pointer'
                            : 'opacity-30 cursor-not-allowed'
                        }`}
                    aria-label={tBtn('next')}
                >
                    <ChevronRight className={`w-6 h-6 transition-colors duration-300 ${hasNext ? 'stroke-theme-text group-hover:stroke-theme-bg' : 'stroke-theme-text'}`} />
                </button>
            </div>
        </>
    );
};

export default Pagination;
