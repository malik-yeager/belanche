import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Place } from '../data/mockData';

const tripsDirectory = path.join(process.cwd(), 'content/trips');

export function getSortedTripsData(): Place[] {
    // Get file names under /content/trips
    if (!fs.existsSync(tripsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(tripsDirectory);
    const allTripsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(tripsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        } as Place;
    });

    // Sort trips by date if we had a date field, for now just return them
    return allTripsData;
}

export function getAllTripIds() {
    if (!fs.existsSync(tripsDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(tripsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getTripData(id: string): Promise<Place & { contentHtml: string }> {
    const fullPath = path.join(tripsDirectory, `${id}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Trip not found: ${id}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    } as Place & { contentHtml: string };
}
