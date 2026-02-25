import React from 'react';
import { getSortedTripsData } from '../../../lib/markdown';
import TravelsClient from './TravelsClient';

export default async function TravelsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const places = getSortedTripsData(locale);
    return <TravelsClient initialPlaces={places} />;
}
