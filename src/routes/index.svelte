<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';
    export const load: Load = async ({ fetch }) => {
        const res = await fetch('/projects', {
            headers: {
                Accept: 'application/json',
            },
        });

        const { projects } = await res.json();

        if (res.ok) {
            return {
                props: {
                    projects,
                },
            };
        }
    };
</script>

<script lang="ts">
    import Graphic from '$lib/components/graphic.svelte';
    import ProjectCard from '$lib/components/project_card.svelte';
    import type { ProjectType } from '$lib/utils/types';

    export let projects: [ProjectType];
</script>

<div class="grid md:grid-cols-3">
    <section
        class="flex flex-col gap-2 justify-center items-center my-3 md:items-start">
        <h1
            class="mt-6 font-sans text-3xl font-bold dark:text-white text-mainDark">
            HEY! I'M ANTONIO
        </h1>
        <h2
            class="font-sans text-lg font-normal text-gray-400 md:text-2xl md:font-medium">
            A Software Developer & Tech Enthusiast
        </h2>
        <a
            href="/favicon.png"
            download
            class="shadow[#eef2ff] my-10 flex items-center gap-2 rounded-lg border border-slate-300 bg-[#eef2ff] p-4 font-semibold text-gray-600 shadow-lg">
            <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </span>
            <span>Download Resume</span>
        </a>
    </section>
    <span class="col-span-2">
        <Graphic />
    </span>
    <section class="flex flex-col items-center mt-20 mb-8 md:col-span-3">
        <h2
            class="mb-10 font-sans text-3xl font-bold md:text-5xl dark:text-white text-mainDark">
            Selected Projects
        </h2>
        <div
            class="grid grid-cols-1 gap-10 w-full md:grid-cols-2 lg:grid-cols-3">
            {#each projects as project (project.id)}
                <ProjectCard {project} />
            {/each}
        </div>
        <a
            href="/projects"
            class="mt-14 mb-16 rounded-lg bg-[#6366f1] py-3 px-6 font-sans text-xl font-semibold text-white shadow-md shadow-slate-300 dark:shadow-[#4e50be]"
            ><button>More Projects</button></a>
    </section>
</div>
