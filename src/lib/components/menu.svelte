<script lang="ts">
    import { beforeNavigate } from '$app/navigation';
    import { createEventDispatcher } from 'svelte';

    export let hidden: boolean;
    const dispatch = createEventDispatcher();

    beforeNavigate(() => {
        dispatch('toggle');
    });
</script>

<nav
    class="absolute px-8 w-full font-sans text-xl bg-white shadow-lg text-mainDark shadow-gray-200"
    class:hidden>
    <ul class="flex flex-col gap-3 items-start">
        <li class="pb-2 w-full border-b-2"><a href="/projects">Projects</a></li>
        <li class="pb-2 w-full border-b-2"><a href="/about">About Me</a></li>
        <li class="pb-2 w-full border-b-2"><a href="/blog">Blog</a></li>
        <button
            class="text-white text-lg font-semibold font-sans rounded-lg bg-[#6366f1] px-6 py-2 mb-4 shadow-md shadow-slate-300"
            >Contact</button>
    </ul>
</nav>
