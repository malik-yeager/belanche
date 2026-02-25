import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Can be imported from a shared config
const locales = ['en', 'hi', 'te'];

export default getRequestConfig(async ({ requestLocale }) => {
    // Await the requestLocale promise manually for Next 15+ async APIs
    let locale = await requestLocale;

    // Validate that the incoming `locale` parameter is valid
    if (!locale || !locales.includes(locale as any)) {
        notFound();
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
