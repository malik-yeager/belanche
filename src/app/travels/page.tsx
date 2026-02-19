import React from 'react';
import { getSortedTripsData } from '../../lib/markdown';
import TravelsClient from './TravelsClient';

export default function TravelsPage() {
    const places = getSortedTripsData();
    return <TravelsClient initialPlaces={places} />;
}
