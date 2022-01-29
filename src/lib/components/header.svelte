<script lang="ts">
    import Logo from './logo.svelte';
    import MenuIcon from './menuIcon.svelte';
</script>

<header>
    <nav
        class="flex my-4 mx-auto px-24 justify-between items-center md:flex-row">
        <div class="flex gap-2 items-center">
            <a href="/"><Logo styles="h-auto w-20" /></a>
            <h3>Antonio</h3>
        </div>
        <div class="md:hidden">
            <MenuIcon styles="h-8 w-8" />
        </div>
        <div class="hidden md:flex md:items-center gap-3">
            <ul class="flex gap-3 text-lg">
                <li><a href="/about">About</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </nav>
</header>
