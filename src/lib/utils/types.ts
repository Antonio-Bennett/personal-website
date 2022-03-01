export type ProjectType = {
    id: string;
    title: string;
    category: string;
    imgs: [string];
    objective: string;
    c_o: string;
    github: string;
    tech: [string];
};

const themes = ['light', 'dark'] as const;
export type Theme = typeof themes[number];

export const isTheme = (theme: string): theme is Theme =>
    themes.includes(theme as Theme);
