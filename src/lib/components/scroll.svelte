<script lang="ts">
    import { fade } from 'svelte/transition';
    let scrollY = 0;
</script>

<svelte:window bind:scrollY />

{#key scrollY < 100}
    <div
        on:click={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        class="fixed right-6 bottom-6 rounded-3xl bg-[#6366f1] text-white"
        class:hidden={scrollY < 100}
        transition:fade={{ duration: 300 }}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--ic"
            width="40"
            height="40"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            ><path
                fill="currentColor"
                d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z" /></svg>
    </div>
{/key}
