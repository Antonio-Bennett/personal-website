<script lang="ts">
    import GraphicDark from '$lib/components/graphic_dark.svelte';
</script>

<div class="grid md:grid-cols-3 m-auto px-24">
    <div class="flex flex-col items-center justify-center gap-2 md:items-start">
        <h1 id="name" class="text-3xl font-semibold font-serif text-slate-900">
            HEY! I'M ANTONIO
        </h1>
        <h2
            class="text-lg font-normal font-serif text-gray-400 md:text-2xl md:font-medium"
        >
            A Web Developer & Tech Enthusiast
        </h2>
    </div>
    <span class="col-span-2">
        <GraphicDark />
    </span>
</div>

<style>
    #name {
        color: #1e3851;
    }
</style>
