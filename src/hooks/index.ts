import type { GetSession, Handle } from '@sveltejs/kit';
import { get_cookie_value } from '$lib/utils/get_cookie_value';
import { isTheme } from '$lib/utils/types';

const getThemeFromCookie = (cookie: string) => {
    const theme = get_cookie_value(cookie, 'theme');
    return isTheme(theme) ? theme : null;
};

export const handle: Handle = async ({ event, resolve }) => {
    const cookie = event.request.headers.get('cookie');
    event.locals.theme = getThemeFromCookie(cookie);

    return resolve(event);
};

export const getSession: GetSession = ({ locals }) => {
    const theme = locals.theme;

    return { theme };
};
