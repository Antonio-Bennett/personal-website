<script lang="ts">
    import Logo from './logo.svelte';
    import MenuIcon from './menuIcon.svelte';
</script>

<header>
    <nav class="flex flex-row-reverse lg:flex-row p-2">
        <div class="lg:hidden">
            <MenuIcon styles="h-14 w-14" />
        </div>
        <div class="hidden lg:flex lg:items-center gap-3">
            <a href="/"><Logo styles="h-20 w-20" /></a>
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
