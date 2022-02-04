<script lang="ts">
    export let projects = [];
</script>

{#each projects as project (project.id)}
    <div
        class="col-span-1 border border-gray-100 overflow-hidden rounded-2xl shadow-md shadow-gray-300">
        <span>
            <img
                src={project.img}
                alt=""
                class="w-full h-auto object-contain" />
        </span>
        <div class="flex flex-col items-center gap-2 p-4">
            <p class="text-xl font-semibold font-serif text-mainDark">
                {project.title}
            </p>
            <p class="text-[#1e3851] font-medium">
                {project.category}
            </p>
        </div>
    </div>
{/each}
