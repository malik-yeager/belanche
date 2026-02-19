import React from 'react';
import { places } from '../data/mockData';
import PlaceCard from '../components/PlaceCard';
import { Quote } from 'lucide-react';

const Home: React.FC = () => {
    // Show latest 3 or all? User said "latest records". Let's show all for now or slice.
    // Assuming 'places' mock data is static, we'll just show all or a subset.
    const latestPlaces = places;

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="w-full h-[50vh] p-4 relative group">
                <img
                    src="/world.jpg"
                    alt="World Map"
                    className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>

                {/* Quote Overlay */}
                <div className="absolute inset-0 container mx-auto px-4 flex items-center">
                    <div className="max-w-2xl text-left text-white drop-shadow-lg animate-fade-in pl-4 md:pl-8">
                        <Quote size={48} className="text-theme-highlight mb-4 opacity-80" />
                        <blockquote className="text-3xl md:text-5xl font-serif italic font-medium leading-tight mb-6 text-white/95">
                            "The world is a book and those who do not travel read only one page."
                        </blockquote>
                        <cite className="text-lg text-white/80 font-medium not-italic tracking-wider uppercase block">
                            — Saint Augustine
                        </cite>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-10">
                {/* Latest Travels Section */}
                <div className="space-y-8 mt-12">
                    <div className="flex flex-col items-center text-center gap-3">
                        <h2 className="text-4xl font-bold text-theme-text">Curated Travel Experiences</h2>
                        <p className="text-2xl text-theme-text  max-w-3xl">
                            Discover handpicked destinations and unforgettable journeys crafted just for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {latestPlaces.map((place) => (
                            <PlaceCard key={place.id} place={place} />
                        ))}
                    </div>


                    {/* About Me Section - Relocated from PlaceDetails */}
                    <div className="mt-20 mb-12">
                        <div className="bg-theme-surface rounded-2xl p-8 md:p-12 shadow-sm border border-theme-accent/30 flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-theme-highlight/20 rounded-full flex-shrink-0 overflow-hidden shadow-lg border-4 border-theme-surface">
                                <img
                                    src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=400"
                                    alt="Author"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h4 className="text-3xl font-black text-theme-text mb-2">Malik</h4>
                                <p className="text-sm text-theme-highlight font-bold uppercase tracking-widest mb-4">Explorer & Techie</p>
                                <p className="text-theme-text/80 text-lg leading-relaxed mb-6 max-w-2xl">
                                    "Just a guy who loves code, coffee, and getting lost in new cities. Sharing the raw, messy, and beautiful moments of my travels. Join me as I discover the world one commit at a time."
                                </p>
                                <div className="flex justify-center md:justify-start gap-4">
                                    <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-theme-text text-theme-bg hover:bg-theme-highlight transition-colors font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                        Follow
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-theme-surface text-theme-text hover:bg-theme-accent/50 transition-colors border border-theme-accent/30 font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                        Tweet
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

export default Home;
