import React from 'react';
import PlaceDetailsClient from './PlaceDetailsClient';
import { getAllTripIds, getTripData } from '../../../../lib/markdown';
import { Place } from '../../../../data/mockData';

export async function generateStaticParams() {
    const paths = getAllTripIds();
    return paths.map((path: any) => ({
        id: path.params.id,
    }));
}

export default async function PlacePage({ params }: { params: Promise<{ id: string, locale: string }> }) {
    const { id, locale } = await params;
    const placeData = await getTripData(id, locale);
    return <PlaceDetailsClient id={id} placeData={placeData} />;
}
