/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
    import type { Theme } from '$lib/utils/types';

    interface Locals {
        theme: Theme | null;
    }

    interface Session {
        theme: Theme | null;
    }
}
