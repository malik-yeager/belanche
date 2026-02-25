import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Place } from '../data/mockData';

const tripsDirectory = path.join(process.cwd(), 'content/trips');

export function getSortedTripsData(locale: string = 'en'): Place[] {
    // Get file names under /content/trips
    if (!fs.existsSync(tripsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(tripsDirectory);

    // Create a Set of base IDs so we don't process variations of the same post uniquely
    const allTripsData: Place[] = [];
    const processedIds = new Set<string>();

    fileNames.forEach((fileName) => {
        // Only look at standard `.md` or explicit locale `.en.md` etc to extract the base ID
        const idMatch = fileName.match(/^(.*?)(?:\.(?:en|hi|te))?\.md$/);
        if (!idMatch) return;

        const id = idMatch[1];
        if (processedIds.has(id)) return;
        processedIds.add(id);

        // Determine which file to actually read based on locale fallback
        let targetFileName = `${id}.${locale}.md`;
        let fullPath = path.join(tripsDirectory, targetFileName);

        // Fallback to English, then base .md if the exact locale file doesn't exist
        if (!fs.existsSync(fullPath)) {
            targetFileName = `${id}.en.md`;
            fullPath = path.join(tripsDirectory, targetFileName);

            if (!fs.existsSync(fullPath)) {
                targetFileName = `${id}.md`;
                fullPath = path.join(tripsDirectory, targetFileName);
                if (!fs.existsSync(fullPath)) return; // Skip if no file exists at all
            }
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        allTripsData.push({
            id,
            ...matterResult.data,
        } as Place);
    });

    return allTripsData;
}

export function getAllTripIds() {
    if (!fs.existsSync(tripsDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(tripsDirectory);
    const processedIds = new Set<string>();

    fileNames.forEach(fileName => {
        const idMatch = fileName.match(/^(.*?)(?:\.(?:en|hi|te))?\.md$/);
        if (idMatch) processedIds.add(idMatch[1]);
    });

    return Array.from(processedIds).map(id => ({
        params: { id }
    }));
}

export async function getTripData(id: string, locale: string = 'en'): Promise<Place & { contentHtml: string }> {
    let fullPath = path.join(tripsDirectory, `${id}.${locale}.md`);

    // Fallback logic
    if (!fs.existsSync(fullPath)) {
        fullPath = path.join(tripsDirectory, `${id}.en.md`);
        if (!fs.existsSync(fullPath)) {
            fullPath = path.join(tripsDirectory, `${id}.md`);
            if (!fs.existsSync(fullPath)) {
                throw new Error(`Trip not found: ${id}`);
            }
        }
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
