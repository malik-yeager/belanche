import PlaceCard from '../../components/PlaceCard';
import FeaturedTrips from '../../components/FeaturedTrips';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import { getSortedTripsData } from '../../lib/markdown';
import { getTranslations } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tHome = await getTranslations('Homepage');
  const tBtn = await getTranslations('Buttons');
  // Fetch data from markdown files using the current locale
  const latestPlaces = getSortedTripsData(locale).slice(0, 5);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="w-full h-[50vh] relative group">
        <img
          src="/world.webp"
          alt="World Map"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>

        {/* Quote Overlay */}
        <div className="absolute inset-0 container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-left text-white drop-shadow-lg animate-fade-in pl-4 md:pl-8">
            <Quote size={48} className="text-theme-highlight mb-4 opacity-80" />
            <blockquote className="text-3xl md:text-5xl font-subheading italic font-medium leading-tight mb-6 text-white/95">
              {tHome('quote')}
            </blockquote>
            <cite className="text-lg text-white/80 font-subheading font-medium not-italic tracking-wider uppercase block">
              {tHome('quoteAuthor')}
            </cite>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-10">
        {/* Latest Travels Section */}
        <div className="space-y-8 mt-12">
          {/* Section Header */}
          <div className="flex items-center gap-6 w-full mb-8">
            <div className="flex-1 h-1 rounded-full bg-theme-accent/50"></div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-theme-text tracking-tight">{tHome('curatedTravels')}</h2>
          </div>

          <div className="relative w-full">
            <FeaturedTrips places={latestPlaces} />
          </div>


          {/* About Me Section */}
          <div className="mt-24 mb-12">
            {/* Section Header */}
            <div className="flex items-center gap-6 w-full mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-theme-text tracking-tight uppercase">{tHome('theManBehind')}</h2>
              <div className="flex-1 h-1 rounded-full bg-theme-accent/50"></div>
            </div>

            <div className=" flex flex-col-reverse lg:flex-row items-center gap-12 animate-fade-in py-8 relative">

              {/* Left side Text Content */}
              <div className="w-full lg:w-7/12 flex flex-col justify-center">
                <div className="relative">
                  <h4 className="text-5xl md:text-6xl font-heading font-black text-theme-text mb-4 tracking-tighter">{tHome('malik')}</h4>
                  <p className="text-lg md:text-xl font-subheading text-theme-highlight font-bold uppercase tracking-widest mb-8">{tHome('explorerTechie')}</p>

                  {/* Shady white gradient text effect for light theme and dark for dark theme */}
                  <div className="text-xl md:text-2xl leading-relaxed font-subheading font-medium mb-10 max-w-3xl transparent-text-gradient bg-clip-text space-y-4">
                    <p>
                      {tHome('aboutQuote1')}
                    </p>
                    <p>
                      {tHome('aboutQuote2')}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-theme-text text-theme-bg hover:bg-theme-highlight transition-all duration-300 font-bold shadow-lg hover:shadow-theme-highlight/25 hover:-translate-y-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      {tBtn('followJourney')}
                    </button>
                    <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-theme-surface text-theme-text hover:bg-theme-accent/20 transition-all duration-300 border-2 border-theme-text/10 font-bold hover:border-theme-text/30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                      {tBtn('connect')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right side Large Image */}
              <div className="w-full lg:w-5/12 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-theme-accent/10 mb-8 lg:mb-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-theme-highlight/20 to-transparent z-10 mix-blend-overlay"></div>
                <img
                  src="/profile.webp"
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
