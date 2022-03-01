export const get_cookie_value = (
    cookie: string | null,
    name: string
): string | null =>
    cookie?.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || null;
