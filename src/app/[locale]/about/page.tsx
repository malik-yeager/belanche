import React from 'react';
import { getTranslations } from 'next-intl/server';

export default async function About() {
    const t = await getTranslations('About');
    return (
        <div className="min-h-screen bg-theme-bg text-theme-text transition-colors duration-300 font-serif overflow-x-hidden">

            {/* Hero — Split Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

                {/* Left: Image & Vertical Text */}
                <div className="relative h-[50vh] md:h-auto bg-theme-surface flex items-center justify-center overflow-hidden">
                    {/* Decorative background gradients */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_30%_70%,var(--color-theme-highlight)_0%,transparent_60%)]"></div>
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_70%_30%,var(--color-theme-accent)_0%,transparent_50%)]"></div>

                    <div className="absolute left-4 md:left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] md:text-xs tracking-[0.3em] text-theme-text/40 uppercase whitespace-nowrap z-10 hidden md:block">
                        {t('softwareEngineerBangalore')}
                    </div>

                    <div className="relative w-full max-w-lg aspect-[3/4] md:aspect-auto md:h-[80%] flex items-center justify-center p-8">
                        <img
                            src="/profile.webp"
                            alt="Shaik Malikbaba"
                            className="w-full h-full object-cover rounded-2xl shadow-2xl grayscale-[20%] contrast-[1.05] hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Right: Intro Text */}
                <div className="flex flex-col justify-center p-8 md:p-20 relative">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-accent/30 to-transparent"></div>

                    <div className="flex items-center gap-4 mb-8 text-theme-highlight/80 text-xs tracking-[0.35em] uppercase font-mono">
                        <span className="w-8 h-px bg-theme-highlight/50 block"></span>
                        {t('theAuthor')}
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-2 tracking-tight text-theme-text">
                        Shaik<br />
                        <em className="text-theme-highlight not-italic font-serif italic">{t('malik')}</em>
                    </h1>

                    <div className="text-sm font-mono text-theme-text/50 tracking-[0.15em] mb-12 pb-12 border-b border-theme-accent/20">
                        {t('softwareEngineerTravelWriter')}
                    </div>

                    <p className="text-lg md:text-xl font-light leading-relaxed text-theme-text/80 max-w-lg mb-12">
                        {/* Splitting the text to maintain the strong tag */}
                        {t.raw('introText').split('software that matters')[0]}
                        <strong className="font-semibold text-theme-text">{t('softwareThatMatters')}</strong>
                        {t.raw('introText').split('software that matters')[1] || t.raw('introText').split('काम आने वाला सॉफ़्टवेयर')[1] || t.raw('introText').split('ముఖ్యమైన సాఫ్ట్‌వేర్')[1]}
                    </p>

                    <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-theme-text/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-theme-highlight animate-pulse"></span>
                        {t('bangaloreIndia')}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 space-y-24">

                {/* The Engineer */}
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-light text-theme-text">
                        {t('theEngineerTitle')}
                    </h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-theme-text/70 max-w-7xl">
                        {t('engineerP1')}
                    </p>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-theme-text/70 max-w-7xl">
                        {t('engineerP2')}
                    </p>
                </div>

                {/* The Traveler */}
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-light text-theme-text">
                        {t('theTravelerTitle')}
                    </h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-theme-text/70 max-w-7xl">
                        {t('travelerP1')}
                    </p>

                    <blockquote className="border-l-2 border-theme-highlight pl-6 md:pl-8 py-4 my-12">
                        <p className="text-2xl md:text-3xl italic font-light text-theme-text/90 leading-normal">
                            {t('travelQuote')}
                        </p>
                        <footer className="mt-4 font-mono text-xs tracking-widest text-theme-highlight uppercase">
                            {t('quoteAuthor')}
                        </footer>
                    </blockquote>

                    <p className="text-lg md:text-xl font-light leading-relaxed text-theme-text/70 max-w-7xl">
                        {t('travelerP2')}
                    </p>
                </div>

            </div>

            {/* Signature Footer */}
            <div className="py-24 text-center border-t border-theme-accent/20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-theme-highlight/40">✦</div>
                <div className="h-20 w-px bg-gradient-to-b from-theme-highlight/40 to-transparent mx-auto mb-8"></div>
                <p className="text-xl font-light italic text-theme-text/50">
                    {t('footerText')}
                </p>
            </div>
        </div>
    );
}
