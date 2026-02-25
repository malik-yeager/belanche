import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'hi', 'te'],

    // Used when no locale matches
    defaultLocale: 'en',

    // Create /en, /hi, /te routes automatically
    localePrefix: 'always'
});

export const config = {
    // Match only internationalized pathnames
    // Do not match api routes, internal Next.js files, or static public assets
    matcher: ['/((?!api|_next|.*\\..*).*)']
};
