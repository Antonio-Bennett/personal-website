<script lang="ts">
    import { menu_modal } from '$lib/stores/menu_store';

    import Logo from './logo.svelte';
    import Menu from './menu.svelte';
    import MenuIcon from './menu_icon.svelte';
</script>

<svelte:head>
    <title>Antonio Bennett Portfolio</title>
</svelte:head>

<header>
    <nav
        class="flex justify-between items-center px-8 my-4 md:flex-row md:px-24">
        <div on:click={() => ($menu_modal ? '' : menu_modal.toggle())}>
            <a href="/"><Logo styles="h-auto w-16" /></a>
        </div>
        <div class="md:hidden">
            <MenuIcon styles="h-8 w-8" />
        </div>
        <ul class="hidden gap-5 font-sans text-lg text-gray-700 md:flex">
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>
        <button
            class="hidden md:inline-block text-white text-lg font-semibold font-sans rounded-lg bg-[#6366f1] px-6 py-2 shadow-md shadow-slate-300"
            >Contact</button>
    </nav>
    <Menu />
</header>
