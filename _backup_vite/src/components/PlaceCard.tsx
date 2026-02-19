import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Place } from '../data/mockData';

interface PlaceCardProps {
    place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
    return (
        <Link to={`/place/${place.id}`} className="group relative block rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-theme-surface border border-transparent hover:border-theme-highlight/20">
            <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                    src={place.coverImage}
                    alt={place.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-theme-bg/80 text-theme-text shadow-sm">
                    {place.category}
                </div>
            </div>
            <div className="p-5">
                <div className="flex items-center text-xs mb-2 space-x-4 text-theme-text/70">
                    <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {place.location}
                    </div>
                    <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {place.duration} {place.duration === 1 ? 'Day' : 'Days'}
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-2 transition-colors text-theme-text group-hover:text-theme-highlight">
                    {place.title}
                </h3>
                <p className="text-sm line-clamp-2 text-theme-text/80">
                    {place.description}
                </p>
            </div>
        </Link>
    );
};

export default PlaceCard;
