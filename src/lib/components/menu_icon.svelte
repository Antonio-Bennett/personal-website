<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let styles: string;
    let open = false;

    $: d = open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16';

    const dispatch = createEventDispatcher();
    const toggle = () => {
        open = !open;
        dispatch('toggle');
    };
</script>

<svg
    on:click={toggle}
    xmlns="http://www.w3.org/2000/svg"
    class={styles}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" {d} />
</svg>
