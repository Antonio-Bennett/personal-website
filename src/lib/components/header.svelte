<script lang="ts">
    import { slide } from 'svelte/transition';

    import type { Theme } from '$lib/utils/types';
    import { menu_modal } from '$lib/stores/menu';
    import { contact_modal } from '$lib/stores/contact';
    import { setTheme, theme } from '$lib/stores/theme';

    import Logo from './logo.svelte';
    import Menu from './menu.svelte';
    import MenuIcon from './menu_icon.svelte';
    import Contact from './contact.svelte';

    $: nextTheme = ($theme === 'dark' ? 'light' : 'dark') as Theme;
    const handleThemeIconClick = () => {
        setTheme(nextTheme);
    };
</script>

<svelte:head>
    <title>Antonio Bennett Portfolio</title>
</svelte:head>

<header>
    <nav
        class="flex justify-between items-center py-4 px-8 md:flex-row md:px-24">
        <div on:click={() => ($menu_modal ? menu_modal.toggle() : '')}>
            <a href="/"><Logo styles="h-auto w-16 dark:text-gray-200" /></a>
        </div>
        <ul
            class="hidden gap-5 font-sans text-xl text-gray-700 md:flex dark:text-gray-200">
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About Me</a></li>
            <li>
                <a href="https://blog.antoniobennett.dev/" target="_blank"
                    >Blog</a>
            </li>
        </ul>
        <div class="flex gap-4 items-center">
            <svg
                on:click={handleThemeIconClick}
                class:hidden={$theme === 'dark'}
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="p-1 rounded-lg bg-gray-100 hover:text-[#6366f1] transition-colors dark:text-gray-300 cursor-pointer iconify iconify--ph iconify--ri dark:bg-mainDark"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                ><path
                    fill="currentColor"
                    d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z" /></svg>
            <svg
                on:click={handleThemeIconClick}
                class:hidden={$theme === 'light'}
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="p-1 bg-gray-100 rounded-lg transition-colors cursor-pointer dark:text-gray-300 hover:text-red-200 iconify iconify--ph dark:bg-mainDark"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 256"
                ><path
                    fill="currentColor"
                    d="M128 56a72 72 0 1 0 72 72a72.1 72.1 0 0 0-72-72Zm0 120a48 48 0 1 1 48-48a48 48 0 0 1-48 48ZM116 28V12a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0Zm74.2 37.8a12 12 0 0 1 0-17l11.3-11.3a12 12 0 0 1 17 17l-11.3 11.3a12 12 0 0 1-8.5 3.5a12.2 12.2 0 0 1-8.5-3.5ZM256 128a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12Zm-37.5 73.5a12 12 0 0 1 0 17a11.6 11.6 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5l-11.3-11.3a12 12 0 0 1 17-17ZM140 228v16a12 12 0 0 1-24 0v-16a12 12 0 0 1 24 0Zm-74.2-37.8a12 12 0 0 1 0 17l-11.3 11.3A12 12 0 0 1 46 222a11.6 11.6 0 0 1-8.5-3.5a12 12 0 0 1 0-17l11.3-11.3a12 12 0 0 1 17 0ZM28 140H12a12 12 0 0 1 0-24h16a12 12 0 0 1 0 24Zm9.5-85.5a12 12 0 0 1 17-17l11.3 11.3a12 12 0 0 1 0 17a12.2 12.2 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5Z" /></svg>
            <button
                on:click={() => {
                    $menu_modal ? menu_modal.toggle() : '';
                    contact_modal.toggle();
                }}
                class="hidden md:inline-block text-white text-lg font-semibold font-sans rounded-lg bg-[#6366f1] px-6 py-2 shadow-md shadow-slate-300 dark:shadow-[#4e50be]"
                >Contact</button>
            <MenuIcon styles="md:hidden h-8 w-8 dark:text-gray-200" />
        </div>
    </nav>
    <div transition:slide={{ duration: 700 }}>
        <Menu />
    </div>
    <Contact />
</header>
