<script lang="ts">
    import Logo from './logo.svelte';
</script>

<header>
    <nav>
        <div class="hidden lg:flex lg:items-center gap-3">
            <a href="/"><Logo height="h-20" width="w-20" /></a>
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
