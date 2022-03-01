import { writable } from 'svelte/store';

const contact_toggle = () => {
    const { subscribe, update } = writable(false);

    return {
        subscribe,
        toggle: () => update((n) => !n),
    };
};

export const contact_modal = contact_toggle();
