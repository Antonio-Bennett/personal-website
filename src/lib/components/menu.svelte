<script lang="ts">
    import { menu_modal } from '$lib/stores/menu_store';
    import { contact_modal } from '$lib/stores/contact_store';
</script>

<nav
    class="absolute md:hidden px-8 w-full font-sans text-xl bg-white shadow-lg text-mainDark dark:text-gray-200 dark:bg-[#0d2438] shadow-gray-200 dark:shadow-md dark:shadow-mainDark"
    class:hidden={!$menu_modal}>
    <ul class="flex flex-col gap-3 items-start">
        <li on:click={menu_modal.toggle} class="pb-2 w-full border-b-2">
            <a href="/projects">Projects</a>
        </li>
        <li on:click={menu_modal.toggle} class="pb-2 w-full border-b-2">
            <a href="/about">About Me</a>
        </li>
        <li on:click={menu_modal.toggle} class="pb-2 w-full border-b-2">
            <a href="/blog">Blog</a>
        </li>
        <button
            on:click={() => {
                $menu_modal ? menu_modal.toggle() : '';
                contact_modal.toggle();
            }}
            class="text-white text-lg font-semibold font-sans rounded-lg bg-[#6366f1] px-6 py-2 mb-4 dark:shadow-[#4e50be] shadow-md shadow-slate-300"
            >Contact</button>
    </ul>
</nav>
