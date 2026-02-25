"use client";

import React, { useState, useEffect } from 'react';
import PlaceCard from './PlaceCard';
import Pagination from './Pagination';
import { useIsMobile } from '../hooks/useMobile';
import type { Place } from '../data/mockData';

interface FeaturedTripsProps {
    places: Place[];
}

const FeaturedTrips: React.FC<FeaturedTripsProps> = ({ places }) => {
    const isMobile = useIsMobile();
    const itemsPerPage = isMobile ? 1 : 3;
    const [currentPage, setCurrentPage] = useState(0);

    // Reset page if screen size toggles the itemsPerPage layout
    useEffect(() => {
        setCurrentPage(0);
    }, [itemsPerPage]);

    // Calculate total pages based on current logic
    const totalPages = Math.ceil(places.length / itemsPerPage);
    const hasNext = currentPage < totalPages - 1;
    const hasPrevious = currentPage > 0;

    // Slice array for current page display
    const currentPlaces = places.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const handleNext = () => {
        if (hasNext) setCurrentPage(prev => prev + 1);
    };

    const handlePrevious = () => {
        if (hasPrevious) setCurrentPage(prev => prev - 1);
    };

    return (
        <div className="relative w-full md:px-14 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
                {currentPlaces.map((place) => (
                    <PlaceCard key={place.id} place={place} />
                ))}
            </div>

            {(totalPages > 1) ? (
                /* Always show desktop arrows (disabled if 1 page), show mobile arrows only if needed */
                <div className={totalPages <= 1 ? "hidden md:block" : "block"}>
                    <Pagination
                        hasPrevious={hasPrevious}
                        hasNext={hasNext}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    />
                </div>
            ) : (
                /* Still render the component wrapper on desktop when disabled for visual consistency */
                <div className="hidden md:block">
                    <Pagination
                        hasPrevious={hasPrevious}
                        hasNext={hasNext}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    />
                </div>
            )}
        </div>
    );
};

export default FeaturedTrips;
