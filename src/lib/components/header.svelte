<script lang="ts">
    import Logo from './logo.svelte';
    import MenuIcon from './menu_icon.svelte';
</script>

<svelte:head>
    <title>Antonio Bennett Portfolio</title>
</svelte:head>

<header>
    <nav
        class="flex my-4 px-8 md:px-24 justify-between items-center md:flex-row">
        <div class="flex gap-2 items-center">
            <a href="/"><Logo styles="h-auto w-16" /></a>
        </div>
        <div class="md:hidden">
            <MenuIcon styles="h-8 w-8" />
        </div>
        <ul class="hidden md:flex gap-5 text-lg font-sans text-gray-700">
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <a
            href="/blog"
            class="hidden md:inline-block text-white text-lg font-semibold font-sans rounded-lg bg-[#6366f1] px-6 py-2 shadow-md shadow-slate-300"
            ><button>Blog</button></a>
    </nav>
</header>
