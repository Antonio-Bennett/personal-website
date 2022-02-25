<script lang="ts">
    import { menu_modal } from '$lib/stores/menu_store';

    import Logo from './logo.svelte';
    import Menu from './menu.svelte';
    import MenuIcon from './menu_icon.svelte';
    import Contact from './contact.svelte';
    import { contact_modal } from '$lib/stores/contact_store';
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
        <div class="md:hidden">
            <MenuIcon styles="h-8 w-8 dark:text-gray-200" />
        </div>
        <ul
            class="hidden gap-5 font-sans text-xl text-gray-700 md:flex dark:text-gray-200">
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>
        <button
            on:click={() => {
                $menu_modal ? menu_modal.toggle() : '';
                contact_modal.toggle();
            }}
            class="hidden md:inline-block text-white text-lg font-semibold font-sans rounded-lg bg-[#6366f1] px-6 py-2 shadow-md shadow-slate-300 dark:shadow-[#4e50be]"
            >Contact</button>
    </nav>
    <Menu />
    <Contact />
</header>
