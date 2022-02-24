import { writable } from 'svelte/store';

const contactToggle = () => {
    const { subscribe, update } = writable(false);

    return {
        subscribe,
        toggle: () => update((n) => !n),
    };
};

export const contact_modal = contactToggle();
