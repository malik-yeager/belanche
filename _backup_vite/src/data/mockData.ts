

export interface Place {
    id: string;
    title: string;
    location: string;
    coverImage: string;
    description: string;
    category: string; // e.g., 'Adventure', 'Relaxation', 'City', 'Nature'
    duration: number; // in days
    budget: string;
    overview: string;
    highlights: string[];
    itinerary: {
        day: number;
        title: string;
        description: string;
        images: string[];
    }[];
    thingsToTake: string[];
}

export const places: Place[] = [
    {
        id: 'paris-trip',
        title: 'Autumn in Paris',
        location: 'Paris, France',
        coverImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000',
        description: 'A 5-day journey through the city of lights, exploring art, endless cafes, and autumnal parks.',
        category: 'City',
        duration: 5,
        budget: '$1500 - $2000',
        overview: 'Paris in autumn is a dream. The leaves turn golden, the air is crisp, and the hot chocolate tastes better than ever. This trip focuses on the classic sights but also some hidden gems.',
        highlights: ['Eiffel Tower at Sunset', 'Louvre Museum', 'Montmartre Artists', 'Seine River Cruise', 'Versailles Day Trip'],
        thingsToTake: ['Comfortable walking shoes', 'Umbrella', 'Camera', 'Universal adapter', 'Light jacket'],
        itinerary: [
            {
                day: 1,
                title: 'Arrival & The Iron Lady',
                description: 'We landed in Paris around 10 AM, completely exhausted but running on pure adrenaline. After navigating the maze that is Charles de Gaulle airport, we finally made it to our Airbnb in Le Marais. The host, Madame Dubois, was sweet but spoke zero English, so we communicated mostly through hand gestures and smiles.\n\nFirst stop? Food, obviously. We found a small corner cafe and I ordered my first authentic croissant. Flaky, buttery heaven. We spent the afternoon just wandering aimlessly until we turned a corner and BAM—there she was. The Eiffel Tower. It’s bigger than you imagine. We grabbed some wine and cheese (cliché, I know, but necessary) and sat on the grass at Champ de Mars watching the tower sparkle at night. I may have teared up a little.',
                images: [
                    'https://images.unsplash.com/photo-1511739001486-6bfe10ce7859?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&q=80&w=800'
                ]
            },
            {
                day: 2,
                title: 'Art & History',
                description: 'Woke up late because the bed was too comfortable. Rushed to the Louvre because everyone said "get there early," but the line was already winding around the pyramid. Pro tip: buy tickets online! Once inside, we got lost immediately. The Mona Lisa was... smaller than expected, and crowded with selfie sticks, but the rest of the museum was mind-blowing.\n\nFor lunch, we grabbed a quick baguette sandwich from a vendor. My feet were killing me by 2 PM, so we took a break in the Tuileries Garden, watching people chase pigeons. Ended the day with a dinner in Saint-Germain where I tried escargots for the first time. They basically taste like garlic butter, which is to say, delicious.',
                images: [
                    'https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1582260273766-3d7f999653f5?auto=format&fit=crop&q=80&w=800'
                ]
            },
            {
                day: 3,
                title: 'Bohemian Vibes',
                description: 'Took the metro to Montmartre today. The station steps nearly killed us, but the view from the top at Sacré-Coeur was worth every gasp. This area feels like a village within the city. We watched artists painting portraits in Place du Tertre and I almost bought a painting of a cat wearing a beret.\n\nStopped at a cafe where Amélie was filmed! Unfortunately, I forgot my umbrella and it started pouring rain out of nowhere. We ran into a souvenir shop to buy a cheap poncho that ripped five minutes later. Currently smelling like wet dog, but laughing about it. Finished the night walking past the Moulin Rouge—it’s so bright and chaotic.',
                images: [
                    'https://images.unsplash.com/photo-1549144511-2c069bc1d782?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1495562569060-2eec283878fa?auto=format&fit=crop&q=80&w=800'
                ]
            },
            {
                day: 4,
                title: 'Royal Day Trip',
                description: ' Hoped on the RER C train to Versailles. The train was packed, literally shoulder-to-shoulder. The Palace of Versailles is insane—gold everywhere. I can see why the French Revolution happened; the Hall of Mirrors alone has more wealth than my entire neighborhood.\n\nThe gardens, though? That was my favorite part. We rented a golf cart because walking another 10 miles sounded like torture. Felt like royalty driving around the massive grounds. Got back to the city late and crashed immediately.',
                images: [
                    'https://images.unsplash.com/photo-1549487928-8673a3031072?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1594912785461-9c849162985b?auto=format&fit=crop&q=80&w=800'
                ]
            },
            {
                day: 5,
                title: 'Shopping & Departure',
                description: 'Last day blues. Checked out and left our bags at a locker service. Went to Galeries Lafayette just to look at the ceiling (and maybe buy some macarons because I have no self-control). The architecture is stunning.\n\nWalked down the Champs-Élysées one last time, dodging tourists and overpriced shops. Grabbed a final crepe (Nutella and banana, the classic) before heading to the airport. Paris, you were expensive and exhausting, but I’m already planning when to come back.',
                images: [
                    'https://images.unsplash.com/photo-1565060169194-1ddbc1b54a20?auto=format&fit=crop&q=80&w=800'
                ]
            }
        ]
    },
    {
        id: 'kyoto-zen',
        title: 'Kyoto Zen Experience',
        location: 'Kyoto, Japan',
        coverImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000',
        description: 'Immerse yourself in traditional Japanese culture, temples, and bamboo forests.',
        category: 'Culture',
        duration: 4,
        budget: '$1200 - $1800',
        overview: 'Kyoto is the heart of traditional Japan. This itinerary takes you through thousands of vermilion torii gates, serene rock gardens, and the famous bamboo grove.',
        highlights: ['Fushimi Inari Shrine', 'Kinkaku-ji (Golden Pavilion)', 'Arashiyama Bamboo Grove', 'Gion District', 'Tea Ceremony'],
        thingsToTake: ['Slip-on shoes (for temples)', 'Cash (Yen)', 'Pocket Wi-Fi', 'Modest clothing for shrines'],
        itinerary: [
            {
                day: 1,
                title: 'Southern Kyoto',
                description: 'Japan! We finally made it. The Shinkansen ride from Tokyo was silky smooth. Kyoto station is huge and futuristic, a weird contrast to the ancient city we expected. Checked into our ryokan (traditional inn) and sleeping on the floor—let’s see how my back handles this.\n\nHeaded straight to Fushimi Inari. You know the one with the thousands of orange gates? Yeah, it’s stunning, but hiking it in jeans was a mistake. I was sweating buckets by the halfway point. Stopped for some kitsune udon at a small shop near the top. The broth was perfect. On the way down, I realized I lost my lens cap somewhere on the mountain. RIP lens cap.',
                images: [
                    'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?auto=format&fit=crop&q=80&w=800'
                ]
            },
            {
                day: 2,
                title: 'Northern Kyoto',
                description: 'Woke up surprisingly refreshed! The tatami mats are actually comfy. Today we went to Kinkaku-ji, the Golden Pavilion. It is literally covered in gold leaf. It shines so bright it hurts your eyes. Took about 500 photos of the exact same angle.\n\nLater, we went to Ryoan-ji to see the famous rock garden. It’s supposed to be zen and meditative, but there was a school group of 50 kids yelling behind us. Still, managed to find a quiet moment to just sit and stare at the rocks. It’s strangely calming. Had okonomiyaki for dinner—it’s like a savory pancake and I’m obsessed.',
                images: [
                    'https://images.unsplash.com/photo-1623594896791-38102ff9841f?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1528360983277-13d9b152c611?auto=format&fit=crop&q=80&w=800'
                ]
            },
            {
                day: 3,
                title: 'Arashiyama',
                description: 'Bamboo forest day! We got there at 6 AM to beat the crowds, and it was magical. The sound of the bamboo swaying in the wind is something else. Then we walked to the Monkey Park. Warning: the monkeys are bold. One tried to unzip my backpack looking for snacks!\n\nStopped at a convenience store (Konbini) for lunch. Don’t judge—Japanese 7-Eleven is gourmet. I bought an egg salad sandwich and a rice ball (onigiri). Also realized I forgot my toothbrush at the last hotel, so I had to mime "brushing teeth" to the cashier to find one. The struggle is real.',
                images: [
                    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1576675784201-0e142b423952?auto=format&fit=crop&q=80&w=800'
                ]
            },
            {
                day: 4,
                title: 'Eastern Kyoto',
                description: 'Explored the historic streets of Higashiyama. The streets (Sannenzaka & Ninenzaka) are lined with old wooden houses and shops. I tripped on the stairs of Sannenzaka—legend says if you trip there, you’ll have bad luck for 3 years. Great.\n\nEnded the day in Gion, hoping to spot a Geisha. Didn’t see one, but the atmosphere at dusk with the lanterns lighting up is incredibly romantic. We had a kaiseki dinner (fancy multi-course meal) which cost a fortune but was a work of art. Kyoto, you have my heart.',
                images: [
                    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1590490710777-a720df545465?auto=format&fit=crop&q=80&w=800'
                ]
            }
        ]
    },
    {
        id: 'swiss-alps',
        title: 'Hiking the Swiss Alps',
        location: 'Interlaken, Switzerland',
        coverImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=1000',
        description: 'Breathtaking views, fresh mountain air, and hiking trails for every level.',
        category: 'Nature',
        duration: 3,
        budget: '$2000 - $2500',
        overview: 'Switzerland is a paradise for nature lovers. Interlaken serves as the perfect base to explore the Jungfrau region, featuring snow-capped peaks and crystal clear lakes.',
        highlights: ['Jungfraujoch', 'Lake Brienz', 'Harder Kulm', 'Grindelwald First'],
        thingsToTake: ['Hiking boots', 'Warm layers', 'Sunscreen', 'Water bottle', 'Swiss Travel Pass'],
        itinerary: [
            {
                day: 1,
                title: 'Top of Europe',
                description: 'Journey to the highest railway station in Europe.',
                images: [
                    'https://images.unsplash.com/photo-1527668752968-14dc70a27c73?auto=format&fit=crop&q=80&w=800'
                ]
            },
            {
                day: 2,
                title: 'Adventure Day',
                description: 'Thrills and views in Grindelwald.',
                images: [
                    'https://images.unsplash.com/photo-1498354177663-874e5b615b3e?auto=format&fit=crop&q=80&w=800'
                ]
            },
            {
                day: 3,
                title: 'Lakes & Views',
                description: 'Relaxing boat ride and panoramic views.',
                images: [
                    'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80&w=800'
                ]
            }
        ]
    },
    {
        id: 'nyc-weekend',
        title: 'Weekend in NYC',
        location: 'New York City, USA',
        coverImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000',
        description: 'A fast-paced weekend exploring the concrete jungle.',
        category: 'City',
        duration: 2,
        budget: '$800 - $1200',
        overview: 'The city that never sleeps offers endless energy. This quick trip hits the major highlights of Manhattan.',
        highlights: ['Central Park', 'Times Square', 'Empire State Building', 'Brooklyn Bridge'],
        thingsToTake: ['Comfortable sneakers', 'Portable charger', 'MetroCard'],
        itinerary: [
            {
                day: 1,
                title: 'Midtown Madness',
                description: 'The iconic sights of NYC.',
                images: [
                    'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800'
                ]
            },
            {
                day: 2,
                title: 'Downtown & Brooklyn',
                description: 'Financial district and bridge views.',
                images: [
                    'https://images.unsplash.com/photo-1543716627-83281169fc03?auto=format&fit=crop&q=80&w=800'
                ]
            }
        ]
    },
    {
        id: 'bali-retreat',
        title: 'Bali Yoga Retreat',
        location: 'Ubud, Indonesia',
        coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000',
        description: 'Relaxation, yoga, and healthy food in the jungle.',
        category: 'Relaxation',
        duration: 7,
        budget: '$800 - $1200',
        overview: 'Escape to the lush jungles of Ubud for a week of wellness. Daily yoga, meditation, and healthy organic food will rejuvenate your soul.',
        highlights: ['Monkey Forest', 'Tegalalang Rice Terrace', 'Yoga Barn', 'Campuhan Ridge Walk'],
        thingsToTake: ['Yoga mat', 'Bug spray', 'Light breathable clothing', 'Swimsuit'],
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Ubud',
                description: 'Settling into the jungle villa.',
                images: [
                    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800'
                ]
            }
            // Simplified for brevity, assume 7 days logic handles this
        ]
    },
    {
        id: 'kerala-roadtrip',
        title: 'Kerala Coastal Roadtrip',
        location: 'Kerala, India',
        coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000',
        description: 'Driving through the coconut trees, backwaters, and misty hills of God\'s Own Country.',
        category: 'Nature',
        duration: 3,
        budget: '$400 - $600',
        overview: 'This trip was pure chaos and beauty. We rented a car and just drove south from Kochi. No plans, just vibes. The food was spicy, the weather was humid, and the views were unbelievable.',
        highlights: ['Fort Kochi', 'Alleppey Houseboat', 'Munar Tea Gardens', 'Varkala Cliff'],
        thingsToTake: ['Mosquito repellent (lots of it)', 'Flip flops', 'Raincoat', 'Sunglasses'],
        itinerary: [
            {
                day: 1,
                title: 'Fort Kochi & The Lost Wallet',
                description: 'Woke up early to the sound of seagulls. We started the day at a small roadside place and I ate the crispiest masala dosa of my life. Seriously, the chutney redefined my existence.\n\nWalked around Fort Kochi seeing the Chinese fishing nets. It was super hot. Tragedy struck in the afternoon—I realized I left my wallet at a cafe. Panicked, ran back 2km in the heat, and guess what? The owner had kept it safe behind the counter. Faith in humanity restored. Celebrated with a fresh lime soda.',
                images: [
                    'https://images.unsplash.com/photo-1590050752117-238cb0fb9d4b?auto=format&fit=crop&q=80&w=800'
                ]
            },
            {
                day: 2,
                title: 'Backwaters & Toothbrush Hunt',
                description: 'Drove to Alleppey today. The traffic was crazy, buses drive like they are in Formula 1. checked into our houseboat around noon. It’s so peaceful floating on the water.\n\nrealized I packed everything except my toothbrush. We docked at a tiny village and I had to pantomime "brushing teeth" to a confused shopkeeper who finally handed me a Neem stick. I bought a plastic one too, just in case.',
                images: [
                    'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800'
                ]
            },
            {
                day: 3,
                title: 'Munnar Hills',
                description: 'Left the heat for the hills. The drive up to Munnar is terrifyingly beautiful—windy roads with tea gardens on both sides. Stopped for tea (obviously) at a roadside stall.\n\nIt started raining mist, visibility was near zero. We just parked the car and sat on the bonnet eating Maggi noodles. Sometimes the simplest moments are the best.',
                images: [
                    'https://images.unsplash.com/photo-1628109673531-b84789073289?auto=format&fit=crop&q=80&w=800'
                ]
            }
        ]
    }
];

export const categories = ['All', 'City', 'Nature', 'Culture', 'Relaxation', 'Adventure'];
