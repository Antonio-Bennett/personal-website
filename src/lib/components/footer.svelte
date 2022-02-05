<script lang="ts">
    const copyToClipboard = () => {
        navigator.clipboard.writeText('The_Antonio#8891').then(
            () => alert('Discord ID copied to clipboard'),
            () => alert('Could not copy to clipboard')
        );
    };
</script>

<footer
    class="grid grid-flow-row gap-5 justify-center border-t-2 border-t-gray-100 pt-20">
    <span class="font-bold font-sans text-3xl mx-auto text-mainDark"
        ><h1>Follow Me</h1></span>
    <div class="flex justify-around">
        <div class="bg-gray-100 rounded-lg p-3">
            <a href="https://github.com/Antonio-Bennett" target="blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--iconoir"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    ><g stroke-width="1.5" fill="none"
                        ><path
                            d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round" /><path
                            d="M9 20.027c-3 .973-5.5 0-7-3"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round" /></g
                    ></svg>
            </a>
        </div>
        <div class="bg-gray-100 rounded-lg p-3">
            <a href="https://twitter.com/Th3_Antonio" target="blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--ph"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                    ><path
                        d="M247.4 68.9A8 8 0 0 0 240 64h-30.4a47.8 47.8 0 0 0-75.2-10.1A47.7 47.7 0 0 0 120 88v6.1C79.3 83.5 46 50.7 45.7 50.3a8 8 0 0 0-8.1-1.9a8.1 8.1 0 0 0-5.5 6.2c-8.7 48.2 5.8 80.5 19.5 99.1a108.6 108.6 0 0 0 24.7 24.4c-15.3 17.3-38.9 26.3-39.1 26.4a8 8 0 0 0-3.9 11.9c.8 1.2 3.8 5.1 11.1 8.8c9.1 4.5 21.1 6.8 35.6 6.8c70.5 0 129.5-54.3 135.5-124.2l30.2-30.1a8.4 8.4 0 0 0 1.7-8.8zm-45.3 29.7a7.8 7.8 0 0 0-2.3 5.2C195.7 166.7 143.1 216 80 216c-10.6 0-18-1.4-23.2-3.1c11.5-6.2 27.5-17 37.9-32.5a8 8 0 0 0 1-6.4a8.1 8.1 0 0 0-4.1-5.1c-.1-.1-14.9-7.8-27.6-25.3c-14.4-19.8-20.5-43.9-18.1-71.7c15.8 13 46 34.2 80.8 40a8.1 8.1 0 0 0 6.5-1.8a8.2 8.2 0 0 0 2.8-6.1V88a32 32 0 0 1 61.3-12.8a8.1 8.1 0 0 0 7.4 4.8h16z"
                        fill="currentColor" /></svg>
            </a>
        </div>
        <div class="bg-gray-100 rounded-lg p-3">
            <button on:click={copyToClipboard}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--ph"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                    ><path
                        d="M108 144a12 12 0 1 1-12-12a12 12 0 0 1 12 12zm52-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12zm82.4 54.5c-16.6 14.4-38.9 25.4-64.4 31.6a17.4 17.4 0 0 1-3.9.5a15.8 15.8 0 0 1-14.2-8.9l-9.5-19a193.6 193.6 0 0 1-44.8 0l-9.5 19a15.8 15.8 0 0 1-14.2 8.9a17.4 17.4 0 0 1-3.9-.5c-25.5-6.2-47.8-17.2-64.4-31.6a16 16 0 0 1-4.9-16.7l34-113.2a15.6 15.6 0 0 1 9.2-10.2a172 172 0 0 1 31-9.6a15.9 15.9 0 0 1 18.6 10.5l6 17.8a191.6 191.6 0 0 1 41 0l6-17.8a15.9 15.9 0 0 1 18.6-10.5a172 172 0 0 1 31 9.6a15.6 15.6 0 0 1 9.2 10.2l34 113.2a16 16 0 0 1-4.9 16.7zm-10.5-12L198 61.2a160.8 160.8 0 0 0-28.3-8.8l-5.1 15a163.4 163.4 0 0 1 19.5 5a8 8 0 0 1-5 15.2c-15.3-5-33-7.6-51.1-7.6s-35.8 2.6-51.1 7.6a7.3 7.3 0 0 1-2.5.4a8 8 0 0 1-2.5-15.6a163.4 163.4 0 0 1 19.5-5l-5-15A167.7 167.7 0 0 0 58 61.1L24 174.4c14.7 12.8 34.7 22.5 57.8 28.2l7.2-14.5a152.9 152.9 0 0 1-17.1-4.5a8 8 0 1 1 5-15.2c15.3 5 33 7.6 51.1 7.6s35.8-2.6 51.1-7.6a8 8 0 0 1 5 15.2a152.9 152.9 0 0 1-17.1 4.5l7.2 14.5c23.1-5.7 43.1-15.4 57.7-28.1z"
                        fill="currentColor" /></svg>
            </button>
        </div>
        <div class="bg-gray-100 rounded-lg p-3">
            <a
                href="https://www.instagram.com/the_a.n.t.o.n.i.o/"
                target="blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--ph"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                    ><path
                        d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32zm44-132H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12z"
                        fill="currentColor" /></svg>
            </a>
        </div>
    </div>
    <p class="flex font-sans text-lg items-center gap-1 justify-around mt-8">
        <span
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--ic"
                width="20"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                ><path
                    d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23c.23.01.44.05.63.13c.2.09.38.21.52.36s.25.33.34.53s.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01s-.66-.5-1.08-.66s-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92s-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35s.72.69 1.2.91c.48.22 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63s.56-.58.74-.94s.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46s-.32.23-.52.3c-.19.07-.39.09-.6.1c-.36-.01-.66-.08-.89-.23c-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88s-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"
                    fill="currentColor" /></svg
            ></span>
        2022. Developed by Antonio Bennett
    </p>
    <p class="flex font-sans text-lg items-center gap-1 mx-auto">
        Made with ❤️ using <a href="https://svelte.dev" target="blank"
            ><span
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--vscode-icons"
                    width="20"
                    height="20"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                    ><path
                        d="M26.47 5.7a8.973 8.973 0 0 0-11.793-2.454L7.96 7.4a7.461 7.461 0 0 0-3.481 5.009a7.686 7.686 0 0 0 .8 5.058a7.358 7.358 0 0 0-1.151 2.8a7.789 7.789 0 0 0 1.4 6.028a8.977 8.977 0 0 0 11.794 2.458L24.04 24.6a7.468 7.468 0 0 0 3.481-5.009a7.673 7.673 0 0 0-.8-5.062a7.348 7.348 0 0 0 1.152-2.8A7.785 7.785 0 0 0 26.47 5.7"
                        fill="#ff3e00" /><path
                        d="M14.022 26.64A5.413 5.413 0 0 1 8.3 24.581a4.678 4.678 0 0 1-.848-3.625a4.307 4.307 0 0 1 .159-.61l.127-.375l.344.238a8.76 8.76 0 0 0 2.628 1.274l.245.073l-.025.237a1.441 1.441 0 0 0 .271.968a1.63 1.63 0 0 0 1.743.636a1.512 1.512 0 0 0 .411-.175l6.7-4.154a1.366 1.366 0 0 0 .633-.909a1.407 1.407 0 0 0-.244-1.091a1.634 1.634 0 0 0-1.726-.622a1.509 1.509 0 0 0-.413.176l-2.572 1.584a4.934 4.934 0 0 1-1.364.582a5.415 5.415 0 0 1-5.727-2.06a4.678 4.678 0 0 1-.831-3.628A4.507 4.507 0 0 1 9.9 10.09l6.708-4.154a4.932 4.932 0 0 1 1.364-.581A5.413 5.413 0 0 1 23.7 7.414a4.679 4.679 0 0 1 .848 3.625a4.272 4.272 0 0 1-.159.61l-.127.375l-.344-.237a8.713 8.713 0 0 0-2.628-1.274l-.245-.074l.025-.237a1.438 1.438 0 0 0-.272-.968a1.629 1.629 0 0 0-1.725-.622a1.484 1.484 0 0 0-.411.176l-6.722 4.14a1.353 1.353 0 0 0-.631.908a1.394 1.394 0 0 0 .244 1.092a1.634 1.634 0 0 0 1.726.621a1.538 1.538 0 0 0 .413-.175l2.562-1.585a4.9 4.9 0 0 1 1.364-.581a5.417 5.417 0 0 1 5.728 2.059a4.681 4.681 0 0 1 .843 3.625a4.5 4.5 0 0 1-2.089 3.013l-6.707 4.154a4.9 4.9 0 0 1-1.364.581"
                        fill="#fff" /></svg
                ></span
            ></a>
    </p>
</footer>
