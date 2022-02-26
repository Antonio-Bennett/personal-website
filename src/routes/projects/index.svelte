<script lang="ts">
    import ProjectCard from '$lib/components/project_card.svelte';
    import type { ProjectType } from '$lib/utils/types';
    export let projects: [ProjectType];
</script>

<div class="flex flex-col items-center mt-16 mb-24">
    <h1
        class="mb-10 font-sans text-3xl font-bold md:text-5xl dark:text-white text-mainDark">
        Selected Projects
    </h1>
    <div
        class="grid grid-cols-1 gap-10 mt-8 w-full md:grid-cols-2 lg:grid-cols-3">
        {#each projects as project (project.id)}
            <ProjectCard {project} />
        {/each}
    </div>
</div>
