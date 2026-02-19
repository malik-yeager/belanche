import React, { useState } from 'react';
import { places, categories } from '../data/mockData';
import PlaceCard from '../components/PlaceCard';
import type { Place } from '../data/mockData';

const Travels: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPlaces = selectedCategory === 'All'
        ? places
        : places.filter((place: Place) => place.category === selectedCategory);

    return (
        <div className="container mx-auto px-4 space-y-8">
            <div className="text-center space-y-4 py-8">
                <h1 className="text-4xl font-bold text-theme-text">My Travels</h1>
                <p className="text-theme-text/70 max-w-2xl mx-auto">
                    Explore my adventures filtered by the type of experience you're looking for.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                        ${selectedCategory === category
                                ? 'bg-theme-highlight text-theme-bg shadow-lg shadow-theme-highlight/30'
                                : 'bg-theme-surface text-theme-text hover:bg-theme-accent'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Places Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPlaces.map((place) => (
                    <PlaceCard key={place.id} place={place} />
                ))}
            </div>

            {filteredPlaces.length === 0 && (
                <div className="text-center py-12 text-theme-text/60">
                    No places found in this category.
                </div>
            )}
        </div>
    );
};

export default Travels;
