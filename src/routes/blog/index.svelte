<script lang="ts">
    export let articles;
</script>

<div class="grid gap-8 mt-10 mb-24 md:grid-cols-2">
    {#each articles as article}
        {@const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]}
        {@const date = new Date(article.published_at)}
        {@const date_string = `${date.getDate()} ${
            months[date.getMonth()]
        } ${date.getFullYear()}`}

        <a href="/blog/{article.id}">
            <div
                class="w-full h-full font-sans text-3xl font-bold rounded-3xl border border-gray-100 shadow-md dark:text-gray-300 text-mainDark dark:border-mainDark dark:shadow-slate-700 dark:bg-mainDark">
                <img
                    class="my-4 mx-auto w-11/12 rounded-3xl shadow-md"
                    src={article.cover_image}
                    alt="" />
                <p
                    class="mx-4 text-base font-normal dark:text-gray-200 text-mainDark">
                    {date_string}
                </p>
                <h1 class="mx-4 mb-4">{article.title}</h1>
            </div>
        </a>
    {/each}
</div>
