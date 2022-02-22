import { writable } from 'svelte/store';

const menuToggle = () => {
    const { subscribe, update } = writable(false);

    return {
        subscribe,
        toggle: () => update((n) => !n),
    };
};

export const menu_modal = menuToggle();
