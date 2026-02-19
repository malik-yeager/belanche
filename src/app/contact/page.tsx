import React from 'react';

export default function Contact() {
    return (
        <div className="container mx-auto px-4 max-w-2xl mt-12 pb-20">
            <h1 className="text-3xl font-bold mb-4 text-theme-text">Contact Me</h1>
            <p className="text-theme-text/80 mb-8">
                Feel free to reach out via email or social media!
            </p>
            {/* Can add form or email link here later */}
            <div className="p-6 bg-theme-surface rounded-lg border border-theme-accent/30">
                <p className="text-theme-text">
                    Email: <a href="mailto:hello@triplogs.com" className="text-theme-highlight hover:underline">hello@triplogs.com</a>
                </p>
            </div>
        </div>
    );
}
