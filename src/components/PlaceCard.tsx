import React from 'react';
import { Camera, CalendarDays, BookOpen } from 'lucide-react';
import Link from 'next/link';
import type { Place } from '../data/mockData';

interface PlaceCardProps {
    place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
    return (
        <Link href={`/place/${place.id}`} className="group block w-full bg-theme-surface shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_56px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 font-sans cursor-pointer">

            {/* IMAGE */}
            <div className="overflow-hidden w-full h-[320px]">
                <img
                    src={place.coverImage}
                    alt={place.title}
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.04]"
                />
            </div>

            {/* BADGE */}
            <div className="flex justify-center -mt-[18px] mb-0 relative z-10">
                <div className="group/badge inline-block bg-theme-surface font-sans text-[0.65rem] font-medium tracking-[0.2em] uppercase text-theme-text/80 px-[26px] py-[9px] whitespace-nowrap shadow-[0_2px_14px_rgba(0,0,0,0.12)] relative overflow-hidden transition-colors duration-300 hover:text-white z-0">
                    <div className="absolute inset-0 bg-theme-highlight origin-left scale-x-0 transition-transform duration-300 group-hover/badge:scale-x-100 -z-10"></div>
                    {place.category}
                </div>
            </div>

            {/* BODY */}
            <div className="p-[20px_28px_32px] text-center">
                <h2 className="font-heading text-[1.45rem] font-bold text-theme-text leading-[1.35] tracking-[0.03em] uppercase mb-[18px]">
                    {place.title}
                </h2>

                <div className="flex flex-wrap items-center justify-center text-[0.72rem] tracking-[0.08em] text-theme-text/60 gap-y-2">
                    <div className="flex items-center gap-[5px]">
                        <Camera className="w-[13px] h-[13px] stroke-theme-text/40 shrink-0" />
                        <span>{place.location}</span>
                    </div>

                    <div className="w-[1px] h-[14px] bg-theme-text/20 mx-[14px] hidden sm:block"></div>

                    <div className="flex items-center gap-[5px]">
                        <CalendarDays className="w-[13px] h-[13px] stroke-theme-text/40 shrink-0" />
                        <span>{place.duration} {place.duration === 1 ? 'Day' : 'Days'}</span>
                    </div>

                    <div className="w-[1px] h-[14px] bg-theme-text/20 mx-[14px] hidden sm:block"></div>

                    <div className="flex items-center gap-[5px] text-[0.72rem] tracking-[0.12em] uppercase text-theme-text underline underline-offset-[3px] transition-colors duration-200 hover:text-theme-text/60">
                        <BookOpen className="w-[13px] h-[13px] stroke-theme-text transition-colors duration-200" />
                        Read the Post
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default PlaceCard;
