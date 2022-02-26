<script lang="ts">
    import { contact_modal } from '$lib/stores/contact_store';
    import { page } from '$app/stores';
</script>

<div class="absolute max-h-screen px-8 mt-8 w-full md:px-24" class:hidden={!$contact_modal}>
    <div
        class="flex relative flex-col-reverse gap-12 py-8 bg-white rounded-2xl border-2 border-gray-100 shadow-lg md:flex-row md:mx-auto shadow-gray-200 dark:bg-[#0d2438] dark:border-gray-500 dark:shadow-gray-800">
        <form
            action="https://formsubmit.co/0c1ca7fcabb556c34b0ba09ecf32a7c2"
            method="POST"
            class="flex flex-col px-4 mx-4 rounded-2xl shadow-lg md:w-1/2 dark:border-gray-500 dark:shadow-md shadow-slate-300 dark:bg-mainDark dark:shadow-gray-600">
            <h1
                class="mt-4 mb-8 font-sans text-2xl font-medium dark:text-gray-200 text-mainDark">
                Contact Form
            </h1>

            <label
                for="name"
                class="font-sans text-lg font-normal dark:text-gray-200 text-mainDark"
                >Full Name</label>
            <input
                id="name"
                name="name"
                class="p-3 mt-2 placeholder-gray-500 dark:text-gray-200 bg-gray-100 rounded-lg border-2 dark:bg-[#0d2438] dark:border-[#1d5484]"
                type="text"
                placeholder="Your Name"
                required />

            <label
                class="mt-6 font-sans text-lg font-normal dark:text-gray-200 text-mainDark"
                for="email">Email</label>
            <input
                class="p-3 dark:border-[#1d5484] dark:text-gray-200 mt-2 dark:bg-[#0d2438] placeholder-gray-500 bg-gray-100 rounded-lg border-2"
                name="email"
                id="email"
                type="email"
                placeholder="Your Email"
                required />

            <label
                class="mt-6 font-sans text-lg font-normal dark:text-gray-200 text-mainDark"
                for="subject">Subject</label>
            <input
                class="p-3 mt-2 dark:text-gray-200 dark:border-[#1d5484] dark:bg-[#0d2438] placeholder-gray-500 bg-gray-100 rounded-lg border-2"
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                required />

            <label
                class="mt-6 font-sans text-lg font-normal dark:text-gray-200 text-mainDark"
                for="message">Body</label>
            <textarea
                class="p-3 dark:text-gray-200 dark:border-[#1d5484] mt-2 dark:bg-[#0d2438] mb-6 placeholder-gray-500 bg-gray-100 rounded-lg border-2 focus:border-blue-300"
                name="message"
                id="message"
                placeholder="Email Content"
                cols="30"
                rows="10"
                required />

            <input type="hidden" name="_next" value={$page.url} />
            <input type="text" name="_honey" style:display="none" />

            <button
                type="submit"
                class="mb-4 rounded-lg bg-[#6366f1] dark:shadow-[#4e50be] py-3 px-6 font-sans text-lg font-semibold text-white shadow-md shadow-slate-300"
                >Send Message</button>
        </form>
        <section class="flex flex-col gap-2 px-8 md:px-0 md:mt-4 md:w-1/2">
            <h1
                class="mb-3 font-sans text-2xl font-medium dark:text-gray-200 text-mainDark">
                Contact Details
            </h1>
            <div class="flex gap-2 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="text-gray-500 iconify iconify--cil"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 512 512"
                    ><path
                        fill="currentColor"
                        d="M253.924 127.592a64 64 0 1 0 64 64a64.073 64.073 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.037 32.037 0 0 1-32 32Z" /><path
                        fill="currentColor"
                        d="M376.906 68.515A173.922 173.922 0 0 0 108.2 286.426l120.907 185.613a29.619 29.619 0 0 0 49.635 0l120.911-185.613a173.921 173.921 0 0 0-22.747-217.911Zm-4.065 200.444l-118.916 182.55l-118.917-182.55c-36.4-55.879-28.593-130.659 18.563-177.817a141.92 141.92 0 0 1 200.708 0c47.156 47.158 54.962 121.938 18.562 177.817Z" /></svg>
                <p class="w-full md:text-lg dark:text-gray-300 text-mainDark">
                    Brampton, ON, Canada
                </p>
            </div>
            <div class="flex gap-2 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="text-gray-500 iconify iconify--mdi"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    ><path
                        fill="currentColor"
                        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z" /></svg>
                <p class="w-full md:text-lg dark:text-gray-300 text-mainDark">
                    bennettantonio199@gmail.com
                </p>
            </div>
            <div class="flex gap-2 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="text-gray-500 iconify iconify--la"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                    ><path
                        fill="currentColor"
                        d="M8.656 3c-.523 0-1.039.188-1.469.531l-.062.031l-.031.032l-3.125 3.219l.031.03a3.134 3.134 0 0 0-.844 3.376c.004.008-.004.023 0 .031c.848 2.426 3.016 7.11 7.25 11.344c4.25 4.25 8.996 6.332 11.344 7.25h.031a3.59 3.59 0 0 0 3.469-.688L28.406 25c.828-.828.828-2.266 0-3.094l-4.062-4.062l-.032-.063c-.828-.828-2.296-.828-3.125 0l-2 2a16.176 16.176 0 0 1-4.093-2.812c-1.637-1.563-2.473-3.36-2.781-4.063l2-2c.84-.84.855-2.238-.032-3.062l.031-.032l-.093-.093l-4-4.125l-.031-.031l-.063-.032A2.356 2.356 0 0 0 8.656 3zm0 2a.35.35 0 0 1 .219.094l4 4.093l.094.094c-.008-.008.058.098-.063.219l-2.5 2.5l-.469.438l.22.624s1.148 3.075 3.562 5.376l.219.187C16.261 20.746 19 21.906 19 21.906l.625.282l2.969-2.97c.172-.171.14-.171.312 0L27 23.314c.172.171.172.109 0 .28l-3.063 3.063c-.46.395-.949.477-1.53.282c-2.266-.891-6.669-2.825-10.595-6.75c-3.957-3.958-6.023-8.446-6.78-10.625c-.153-.407-.044-1.008.312-1.313l.062-.063l3.032-3.093A.35.35 0 0 1 8.655 5z" /></svg>
                <p class="w-full md:text-lg dark:text-gray-300 text-mainDark">
                    (647) 966-0493
                </p>
            </div>
        </section>
        <svg
            on:click={contact_modal.toggle}
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 iconify iconify--mdi dark:hover:text-gray-300"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            ><path
                fill="currentColor"
                d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8Z" /></svg>
    </div>
</div>
