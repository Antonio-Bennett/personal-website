import { writable } from 'svelte/store';

const menu_toggle = () => {
    const { subscribe, update } = writable(false);

    return {
        subscribe,
        toggle: () => update((n) => !n),
    };
};

export const menu_modal = menu_toggle();
