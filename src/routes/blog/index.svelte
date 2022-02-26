<script lang="ts">
    import ArticleCard from '$lib/components/article_card.svelte';
    export let articles;
</script>

<div class="grid md:grid-cols-2 lg:grid-cols-3">
    {#each articles as article}
        <ArticleCard {article} />
    {/each}
</div>
