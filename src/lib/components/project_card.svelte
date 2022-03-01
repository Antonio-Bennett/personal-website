<script lang="ts">
    import type { ProjectType } from '$lib/utils/types';
    import { fly } from 'svelte/transition';

    export let project: ProjectType;
</script>

<a href="/projects/{project.id}"
    ><div
        class="overflow-hidden col-span-1 rounded-2xl border border-gray-100 shadow-md transition dark:border-gray-800 hover:shadow-lg hover:scale-105 shadow-gray-300 dark:hover:shadow-gray-900 dark:shadow-gray-800 hover:shadow-gray-400">
        <span>
            <img
                src={project.imgs[0]}
                alt=""
                class="object-cover w-full h-full bg-left aspect-square" />
        </span>
        <div class="flex flex-col gap-2 items-center p-4 dark:bg-mainDark">
            <p
                class="font-sans text-xl font-semibold dark:text-gray-200 text-mainDark">
                {project.title}
            </p>
            <p class="font-medium dark:text-gray-200 text-mainDark">
                {project.category}
            </p>
        </div>
    </div>
</a>
