<script>
    import ProjectList from '$lib/components/project_list.svelte';

    export let projects;
</script>

<div class="flex flex-col items-center mt-16 mb-24">
    <h1 class="text-mainDark text-3xl md:text-5xl font-sans font-bold">
        Projects
    </h1>
    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 w-full gap-10">
        <ProjectList {projects} />
    </div>
</div>
