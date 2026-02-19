import React from 'react';
import PlaceDetailsClient from './PlaceDetailsClient';
import { getAllTripIds, getTripData } from '../../../lib/markdown';
import { Place } from '../../../data/mockData';

export async function generateStaticParams() {
    const paths = getAllTripIds();
    return paths.map((path) => ({
        id: path.params.id,
    }));
}

export default async function PlacePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const placeData = await getTripData(id);
    return <PlaceDetailsClient id={id} placeData={placeData} />;
}
