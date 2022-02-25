<script lang="ts">
    export let articles;
</script>

{#each articles as article}
    <p>{article.id}</p>
{/each}
