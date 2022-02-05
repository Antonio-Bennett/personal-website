<script lang="ts">
    // import GraphicDark from '$lib/components/graphic_dark.svelte';
    import GraphicLight from '$lib/components/graphic_light.svelte';
    import ProjectList from '$lib/components/project_list.svelte';

    let projects = [
        {
            id: 1,
            title: 'Portfolio',
            category: 'Web Application',
            img: 'https://picsum.photos/1080?random=1',
        },
        {
            id: 2,
            title: 'Static Site Generator',
            category: 'Cli Application',
            img: 'https://picsum.photos/1080?random=2',
        },
        {
            id: 3,
            title: 'Tic Tac Toe',
            category: 'Cli Application',
            img: 'https://picsum.photos/1080?random=3',
        },
    ];
</script>

<div class="grid md:grid-cols-3">
    <section
        class="flex flex-col items-center justify-center gap-2 md:items-start my-3">
        <h1 class="text-3xl font-semibold font-sans text-mainDark mt-6">
            HEY! I'M ANTONIO
        </h1>
        <h2
            class="text-lg font-normal font-sans text-gray-400 md:text-2xl md:font-medium">
            A Software Developer & Tech Enthusiast
        </h2>
        <a
            href="/favicon.png"
            download
            class="bg-[#eef2ff] border border-slate-300 shadow-lg shadow[#eef2ff] p-4 rounded-lg flex gap-2 items-center my-10 font-semibold text-gray-600">
            <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
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
        <GraphicLight />
    </span>
    <section class="flex flex-col items-center my-8 md:col-span-3">
        <h2 class="text-3xl font-semibold font-sans mb-10 text-mainDark">
            Projects
        </h2>
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10">
            <ProjectList {projects} />
        </div>
        <a
            href="_"
            class="text-white text-xl font-semibold font-sans rounded-lg bg-[#6366f1] mt-14 mb-16 py-3 px-6 shadow-md shadow-slate-300"
            ><button>More Projects</button></a>
    </section>
</div>
