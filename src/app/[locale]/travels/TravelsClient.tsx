"use client";

import React, { useState, useEffect } from 'react';
import { categories } from '../../../data/mockData';
import PlaceCard from '../../../components/PlaceCard';
import Pagination from '../../../components/Pagination';
import { useIsMobile } from '../../../hooks/useMobile';
import { useTranslations } from 'next-intl';
import { Filter, ChevronDown } from 'lucide-react';
import type { Place } from '../../../data/mockData';

interface TravelsClientProps {
    initialPlaces: Place[];
}

const TravelsClient: React.FC<TravelsClientProps> = ({ initialPlaces }) => {
    const isMobile = useIsMobile();
    const t = useTranslations('Travels');
    const [selectedCategory, setSelectedCategory] = useState(t('all'));
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(0);
    const [mobileVisibleCount, setMobileVisibleCount] = useState(6);
    const itemsPerPageDesktop = 6;

    // Reset pagination completely if screen bounds change
    useEffect(() => {
        setCurrentPage(0);
        setMobileVisibleCount(6);
    }, [isMobile]);

    // Derived State
    const filteredPlaces = selectedCategory === t('all')
        ? initialPlaces
        : initialPlaces.filter((place: Place) => place.category === selectedCategory);

    const desktopTotalPages = Math.ceil(filteredPlaces.length / itemsPerPageDesktop);

    const currentPlaces = isMobile
        ? filteredPlaces.slice(0, mobileVisibleCount)
        : filteredPlaces.slice(currentPage * itemsPerPageDesktop, (currentPage + 1) * itemsPerPageDesktop);

    const hasMoreMobile = mobileVisibleCount < filteredPlaces.length;

    // Handlers
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setIsFilterOpen(false);
        setCurrentPage(0);
        setMobileVisibleCount(6);
    };

    return (
        <div className="container mx-auto px-4 space-y-8 pb-32">

            {/* Header & Filter Row */}
            <div className="flex flex-col md:flex-row justify-between items-center py-12 border-b border-theme-accent/20 mb-12">
                <h1 className="text-5xl font-heading font-black text-theme-text uppercase tracking-tight mb-6 md:mb-0">{t('title')}</h1>

                {/* Filter Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="flex items-center gap-2 px-6 py-3 bg-theme-surface border border-theme-text/10 rounded-full hover:border-theme-text/30 transition-all font-sans font-medium text-theme-text shadow-sm"
                    >
                        <Filter size={18} className="text-theme-highlight" />
                        <span>{t('tripType')} <span className="font-bold">{selectedCategory === 'All' ? t('all') : selectedCategory}</span></span>
                        <ChevronDown size={16} className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    <div className={`absolute right-0 mt-2 w-56 bg-theme-surface border border-theme-accent/20 rounded-2xl shadow-xl overflow-hidden z-20 transition-all duration-300 origin-top-right ${isFilterOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                        <div className="py-2">
                            {/* Add "All" option mapping */}
                            <button
                                onClick={() => handleCategoryChange(t('all'))}
                                className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors hover:bg-theme-bg/50
                                    ${selectedCategory === t('all') ? 'text-theme-highlight bg-theme-bg/30' : 'text-theme-text/80'}
                                `}
                            >
                                {t('all')}
                            </button>
                            {categories.map((category: string) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryChange(category)}
                                    className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors hover:bg-theme-bg/50
                                        ${selectedCategory === category ? 'text-theme-highlight bg-theme-bg/30' : 'text-theme-text/80'}
                                    `}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Places Grid with Relative Container for Pagination */}
            <div className="relative w-full md:px-14 py-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {currentPlaces.map((place) => (
                        <PlaceCard key={place.id} place={place} />
                    ))}
                </div>

                {filteredPlaces.length === 0 && (
                    <div className="text-center py-20 text-theme-text/60 font-medium font-sans">
                        {t('noPlaces')}
                    </div>
                )}

                {/* Mobile: Lazy Loading Button */}
                {isMobile && hasMoreMobile && (
                    <div className="flex justify-center mt-6 w-full relative z-20">
                        <button
                            onClick={() => setMobileVisibleCount(prev => prev + 6)}
                            className="bg-theme-surface text-theme-text border border-theme-text/10 hover:border-theme-text/30 px-8 py-3 rounded-full font-sans font-bold transition-all hover:bg-theme-accent/20 shadow-sm"
                        >
                            {t('showMore')}
                        </button>
                    </div>
                )}

                {/* Desktop: Pagination always renders on desktop, disabled if it's the only page */}
                <div className={isMobile ? "hidden" : "block"}>
                    <Pagination
                        hasPrevious={currentPage > 0}
                        hasNext={currentPage < desktopTotalPages - 1}
                        onNext={() => setCurrentPage(prev => Math.min(prev + 1, desktopTotalPages - 1))}
                        onPrevious={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
                    />
                </div>
            </div>
        </div>
    );
};

export default TravelsClient;
