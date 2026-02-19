import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { places } from '../data/mockData';
import Tabs from '../components/Tabs';
import { MapPin, ArrowLeft } from 'lucide-react';

const PlaceDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const place = places.find((p) => p.id === id);

    const [activeTab, setActiveTab] = useState('journey');


    if (!place) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h2 className="text-2xl font-bold text-theme-text mb-4">Place not found</h2>
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center px-6 py-3 bg-theme-text text-theme-bg rounded-full hover:bg-theme-main transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Home
                </button>
            </div>
        );
    }

    const tabs = [
        { id: 'journey', label: 'Journey' },
        { id: 'overview', label: 'Overview' },
        { id: 'things', label: 'Things to Take Care' },
    ];

    return (
        <div className="w-full animate-fade-in pb-12 mt-8">
            <div className="container mx-auto px-4 w-full mb-8">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center text-theme-text/70 hover:text-theme-text mb-6 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Home
                </button>
                <h1 className="text-4xl md:text-6xl font-black text-theme-text tracking-tight mb-6">{place.title}</h1>
            </div>

            <div className="container mx-auto px-4 w-full">
                {/* Tabs Navigation */}
                <div className="mb-8 overflow-x-auto">
                    <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <div className="col-span-1 lg:col-span-3">
                        <div className="min-h-[400px]">

                            {activeTab === 'overview' && (
                                <div className="prose prose-lg dark:prose-invert max-w-none animate-fade-in">
                                    <h3 className="text-2xl font-bold mb-4 text-theme-text">About the Trip</h3>
                                    <p className="text-theme-text/90 leading-relaxed mb-8">
                                        {place.overview}
                                    </p>
                                    <div className="bg-theme-surface/50 p-6 rounded-xl border border-theme-accent/30">
                                        <h4 className="text-xl font-bold mb-3 text-theme-text">Quick Summary</h4>
                                        <p className="text-theme-text/80">
                                            {place.description}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'journey' && (
                                <div className="animate-fade-in space-y-16">
                                    {place.duration > 1 ? (
                                        place.itinerary.map((day) => (
                                            <div key={day.day} className="border-b border-theme-accent/20 pb-12 last:border-0">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <span className="text-4xl font-black text-theme-highlight/80 dark:text-theme-highlight/60 drop-shadow-sm">
                                                        {day.day < 10 ? `0${day.day}` : day.day}
                                                    </span>
                                                    <h3 className="text-2xl font-bold text-theme-text">{day.title}</h3>
                                                </div>

                                                <p className="text-theme-text/90 text-lg leading-relaxed whitespace-pre-line prose dark:prose-invert mb-8">
                                                    {day.description}
                                                </p>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {day.images.map((img, idx) => (
                                                        <div key={idx} className="rounded-xl overflow-hidden shadow-sm h-64 group relative">
                                                            <img
                                                                src={img}
                                                                alt={`Day ${day.day} - ${idx + 1}`}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        // Single day journey fallback
                                        <div className="space-y-8">
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {place.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-center bg-theme-bg p-4 rounded-xl border border-theme-accent/30">
                                                        <MapPin size={20} className="text-theme-highlight mr-3 flex-shrink-0" />
                                                        <span className="text-theme-text font-medium">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === 'things' && (
                                <div className="animate-fade-in">
                                    <h3 className="text-2xl font-bold mb-6 text-theme-text">Things to Take Care Of</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {place.thingsToTake.map((thing, idx) => (
                                            <div key={idx} className="flex items-start p-4 bg-theme-surface text-theme-text rounded-xl border border-theme-accent/50 hover:shadow-md transition-shadow">
                                                <span className="mr-3 text-xl bg-theme-accent/20 p-1.5 rounded-lg">⚠️</span>
                                                <span className="font-medium mt-1">{thing}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    <div className="col-span-1 hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-theme-surface/30 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-theme-accent/30 text-center animate-fade-in relative overflow-hidden group">

                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-highlight via-theme-accent to-theme-highlight opacity-50"></div>

                                <div className="relative mx-auto mb-6 w-28 h-28">
                                    <div className="absolute inset-0 bg-theme-highlight/20 rounded-full blur-md animate-pulse"></div>
                                    <div className="relative w-full h-full bg-theme-bg p-1 rounded-full overflow-hidden shadow-inner border-2 border-theme-surface">
                                        <img
                                            src="/profile.png"
                                            alt="Shaik Malikbaba"
                                            className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                <h4 className="text-2xl font-black text-theme-text mb-1">Shaik Malikbaba</h4>
                                <p className="text-xs text-theme-highlight font-bold uppercase tracking-widest mb-4">Software Engineer</p>

                                <div className="w-full h-px bg-theme-accent/20 mb-6"></div>

                                <p className="text-theme-text/80 text-sm leading-relaxed mb-6 italic">
                                    "Coding in Bangalore, traveling the world. documenting every step of the journey."
                                </p>

                                <div className="flex justify-center gap-3">
                                    <button className="px-4 py-2 rounded-full bg-theme-text text-theme-bg text-sm font-bold hover:bg-theme-highlight transition-all hover:scale-105 shadow-md">
                                        Follow
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;
