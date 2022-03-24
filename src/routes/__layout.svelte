<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';
    export const load: Load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
    import '../app.css';
    import { theme } from '$lib/stores/theme';
    import Header from '$lib/components/header.svelte';
    import Footer from '$lib/components/footer.svelte';
    import Scroll from '$lib/components/scroll.svelte';
    import PageTransition from '$lib/components/page_transition.svelte';
    import { browser } from '$app/env';

    export let url: string;

    $: if (browser) document.querySelector('html').className = $theme;
</script>

<div class={$theme}>
    <div class="dark:bg-[#0d2438]">
        <Header />
        <main class="overflow-x-hidden px-8 min-h-screen md:px-24">
            <PageTransition {url}>
                <slot />
            </PageTransition>
        </main>
        <Scroll />
        <Footer />
    </div>
</div>
