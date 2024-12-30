<script lang="ts">
  import type { ClientResponseError } from 'pocketbase';
  import { bookListApi } from '$lib/api';
  import { loadedCache } from './cache.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

  import placeholderImage from '$lib/book-cover-placeholder.png';
  const newApi = new bookListApi();
      
  let loading = $state(false);
  fetchData()


  async function fetchData() {
    if (loading) return; // Prevent multiple fetches at once
    loading = true;
    try {
      const appendBookList = await newApi.getLatestBookList(loadedCache.paging);
      console.log(appendBookList);
      loadedCache.bookList = [...loadedCache.bookList, ...appendBookList];
    } catch (e) {
      const err = e as ClientResponseError;
      console.log(err);
      console.log("FUCK ERROR");
      // return error(404, {
      //   message: err.data.message
      // });
    }
    
    loading = false;
    loadedCache.paging += 1;
  }

  const SCROLL_THRESHOLD = 1500; // pixels from bottom
  
  async function handleScroll(e) {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
    
    if (distanceFromBottom < SCROLL_THRESHOLD) {
      fetchData();
    }
  }

  let hoveredBook = null; 

</script>

<!-- class="w-full h-60 object-contain bg-white" -->
<!-- Page content -->
<main class="flex-1 overflow-y-auto p-6" onscroll={handleScroll}>

<section class="grid grid-cols-6 gap-5">

    {#each loadedCache.bookList as book}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class=" bg-white shadow-md rounded-lg overflow-hidden hover:outline hover:outline-4 hover:outline-yellow-600 hover:scale-105 flex flex-col"

      onmouseenter={() => (hoveredBook = book)} 
      onmouseleave={() => (hoveredBook = null)}
    >
        <a href={`/book/${book.ISBN_13}`} class="flex-1">
            <img
                class="justify-center w-full h-full object-cover bg-white"
                src={book.image_url || placeholderImage}
                alt={book.title}
                onerror={(e) => ((e.target as HTMLImageElement).src = placeholderImage)}
            />
           
        </a>
        <div class="p-4 bg-amber-100">
            <h3 class="text-sm font-semibold text-gray-800 truncate">{book.title}</h3>
            <!-- <p class="text-sm text-gray-500">{book.publish_date}</p> -->
        </div>
    </div>
    {/each}

    {#if loading}
      <ProgressRadial />
    {/if}
</section>
</main>

<style>
  
</style>
