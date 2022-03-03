//Unreleased Svelte type
import type { Action } from '$lib/utils/types';

export const click_outside: Action = (node) => {
    const handle_click = ({ target }: MouseEvent) => {
        if (!node.contains(target as Node))
            node.dispatchEvent(new CustomEvent('outclick'));
    };

    document.addEventListener('click', handle_click, true);

    return {
        destroy() {
            document.removeEventListener('click', handle_click, true);
        },
    };
};
