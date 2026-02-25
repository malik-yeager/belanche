import React from 'react';
import { useTranslations } from 'next-intl';

const Newsletter: React.FC = () => {
    const t = useTranslations('Newsletter');
    return (
        <div className="w-full bg-theme-surface border-t border-theme-accent/20">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-3xl font-heading font-black text-theme-text mb-4">
                            {t('title')}
                        </h3>
                        <p className="text-theme-text/70 text-lg leading-relaxed max-w-lg font-subheading font-medium">
                            {t('description')}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-end">
                        <form className="w-full max-w-md relative flex items-center" action="">
                            <input
                                type="email"
                                placeholder={t('placeholder')}
                                className="w-full pl-6 pr-36 py-4 rounded-full bg-theme-bg/50 border border-theme-accent/30 focus:outline-none focus:border-theme-highlight focus:ring-1 focus:ring-theme-highlight transition-all text-theme-text placeholder-theme-text/40 shadow-inner"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 bottom-2 px-6 rounded-full bg-theme-highlight text-white font-bold hover:bg-theme-highlight/90 transition-all shadow-md active:scale-95"
                            >
                                {t('subscribe')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
