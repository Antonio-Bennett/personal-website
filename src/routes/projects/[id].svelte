<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import project_tech from '$lib/utils/project_tech.json';
    import type { ProjectType } from '$lib/utils/types';
    export let project: ProjectType;
</script>

<div class="mb-24">
    <section class="grid gap-6 my-12 md:grid-cols-3">
        <h1
            class="mb-6 font-sans text-3xl font-bold md:col-span-3 md:text-5xl dark:text-gray-200 text-mainDark">
            {project.title.toUpperCase()}
        </h1>
        {#each project.imgs.reverse() as img}
            <div class="flex col-span-1 justify-center">
                <img
                    class="object-cover object-center w-full h-64 bg-top rounded-2xl shadow-md dark:shadow-lg shadow-gray-400 dark:shadow-mainDark"
                    src={img}
                    alt="" />
            </div>
        {/each}
    </section>
    <section>
        <div class="grid gap-8 md:grid-cols-3">
            <a
                href={project.github}
                target="_blank"
                in:fly={{ duration: 400, x: -200, delay: 600 }}
                ><button
                    class="w-full h-36 font-sans text-5xl text-white font-bold rounded-2xl transition-colors bg-[#6366f1] hover:bg-slate-200 hover:text-[#6366f1] dark:hover:text-[#6366f1] dark:text-gray-200 dark:hover:bg-gray-200"
                    >Github</button
                ></a>

            <div class="md:col-span-2">
                <h3
                    class="mb-3 w-full text-2xl font-medium md:text-3xl dark:text-gray-200 text-mainDark">
                    Tools and Technologies
                </h3>
                <div class="flex overflow-x-auto gap-2">
                    {#each project.tech as tech, idx}
                        <a
                            href={project_tech[tech].link}
                            target="_blank"
                            in:fade={{
                                delay: 700 + idx * 200,
                                duration: 400,
                            }}>
                            <img
                                class="h-12 md:h-16 lg:h-24"
                                src={project_tech[tech].svg}
                                alt="" /></a>
                    {/each}
                </div>
            </div>
        </div>
        <div class="mt-10 md:col-span-2 md:mt-0">
            <h3
                class="mt-6 mb-3 text-2xl font-medium dark:text-gray-200 text-mainDark">
                Objective
            </h3>
            <p class="dark:text-gray-300 text-mainDark">{project.objective}</p>
            <h3
                class="mt-6 mb-3 text-2xl font-bold dark:text-gray-200 text-mainDark">
                Challenges
            </h3>
            <p class="dark:text-gray-300 text-mainDark">{project.c_o}</p>
        </div>
    </section>
</div>
