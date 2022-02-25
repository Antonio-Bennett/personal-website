<script>
    import '../app.css';
    import Header from '$lib/components/header.svelte';
    import Footer from '$lib/components/footer.svelte';
</script>

<div class="dark:bg-[#0d2438]">
    <Header />
    <main class="px-8 md:px-24">
        <slot />
    </main>
    <Footer />
</div>
