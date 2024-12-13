<script lang='ts'>
	import { Ratings, CodeBlock, RangeSlider } from '@skeletonlabs/skeleton';
    import { icons } from './icons';

    import { ProgressBar } from '@skeletonlabs/skeleton';
    

	let dataBookExample = {
    "isbn": "0976540606",
    "isbn13": "9780976540601",
    "title": "  Harry Potter Book Seven News: \"Half-Blood Prince\" Analysis and Speculation",
    "author": "W. Frederick Zimmerman",
    "description": "Through the magic of print-on-demand technology, this \"nimble\" guide to the work of best-selling author J. K. Rowling provides the latest news about the author and her works, updated whenever there are significant developments. Unlike a conventional book, for which editions are printed in quantity every couple of years, this \"living book\" goes through frequent \"mini-editions\" and is printed fresh whenever customers place an order. Purchasers are entitled to free PDF updates! An entirely new section of analysis with more than 75 new pages will be added shortly after the release of \"Harry Potter and the Half-Blood Prince\" on July 16, 2005.",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386921401i/9.jpg",
    "publisher": "Nimble Books",
    "publishDate": 1114498800000,
    "numPages": 152,
    "language": "English",
    "reviewsCount": 1,
    "averageRating": 3.89,
    "ratingsCount": 38,
    "ratingHistogram": [0, 6, 8, 8, 16],
    "crawlSource": "https://www.goodreads.com/book/show/9.Unauthorized_Harry_Potter_Book_Seven_News",
    "genres": [
            "Fantasy",
            "Young Adult",
            "Fiction",
            "Magic",
            "Adventure",
            "Supernatural",
            "Childrens",
            "Mystery",
            "Middle Grade",
            "Paranormal"
        ]
    }

    

    export let averageRating = dataBookExample.averageRating;
    // Tạo mảng các sao, mỗi sao có trạng thái full (đầy), half (nửa), hoặc empty (rỗng)
    const stars = Array(5)
        .fill('empty')
        .map((_, i) => {
            const rating = averageRating - i;
            return rating >= 1 ? 'full' : rating >= 0.5 ? 'half' : 'empty';
        });

  // document.getElementById('book_image').src = dataBookExample.imageUrl;s

      // Biến để theo dõi trạng thái ẩn/hiện
    let isVisible = false;


    function toggleVisibility() {
        isVisible = !isVisible;
    }

    // rating this book save in value.current, if != thi moi la rating
    let value = { current: 0, max: 5 };
    function iconClick(event: CustomEvent<{index:number}>): void {
	    value.current = event.detail.index;
    }
</script>

<!-- <div>
	HTML HERE - {number1} - {number2}
   
</div>

<div class="p-4 m-4 bg-blue-100 div1 bg-primary-500">Write review here</div>

<button onclick={increase}>
	Button 1
</button> -->

<div class=" py-8">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-2 px-3">
              <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img class="w-full h-full object-cover" src={dataBookExample.imageUrl} alt="Product Image">
              </div>
              
              <div class="flex -mx-2 mb-4">
               
                <Ratings bind:value={value.current} max={value.max} interactive on:icon={iconClick}>
                    <svelte:fragment slot="empty">{@html icons.empty}</svelte:fragment>
                    <svelte:fragment slot="half">{@html icons.half}</svelte:fragment>
                    <svelte:fragment slot="full">{@html icons.full}</svelte:fragment>
                </Ratings>
                
              </div>

              <div class = "text-center"> Rating this book</div>
          </div>
          <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{dataBookExample.title}</h2>
                <h5 class="text-2xl  text-gray-800 dark:text-white mb-2">
                    {dataBookExample.author}
                </h5>
                <div class="flex p-1 rounded-lg w-auto space-x-1 lg:space-x-2">
                    {#each stars as star, i}
                    <button>
                        {#if star === 'full'}
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-500 hover:text-yellow-600 w-7 h-auto fill-current " viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg> -->
                        {@html icons.full}
                        {/if}
                        {#if star === 'half'}
                        <!-- Half Star -->
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-500 w-7 h-auto fill-current hover:text-green-600" viewBox="0 0 16 16">
                                <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                            </svg> -->
                            {@html icons.half}
                        {/if}
                        {#if star === 'empty'}
                        <!-- Empty Star -->
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-500 w-7 h-auto fill-current hover:text-green-600" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg> -->
                            {@html icons.empty}
                        {/if}
                    </button>
                    {/each}
                    <span class="text-2xl font-medium ">
                        {dataBookExample.averageRating.toFixed(1)} 
                    </span>
                    
                </div>
                <div class="font-sans md:font-serif text-align: center">
                    {dataBookExample.ratingsCount} ratings - {dataBookExample.reviewsCount} reviews
                </div>
              

              
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {dataBookExample.description}
                </p>
                <div class="mr-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Genres </span>
                    <!-- <span class="text-gray-600 dark:text-gray-300">{dataBookExample.genres}</span> -->
                </div>              
                <div class="flex mb-4 gap-2">
                    {#each dataBookExample.genres as thing}
                        <div class="badge variant-filled">{thing}</div>
                    {/each}
                </div>

                <div>
                    <!-- Nút bấm -->
                    <button class = "font-medium" onclick={toggleVisibility}>
                        {isVisible ?  'Book details \& Edition' : 'Book details \& Edition' }
                        
                    </button>
                    <!-- Nội dung hiển thị/ẩn -->
                    {#if isVisible == false}
                        <div class="visible">
                            <div class=" overflow-hidden ">
                                <!-- <div class="px-4 py-5 sm:px-6">
                                    <h3 class="text-lg leading-4 font-medium text-gray-900">
                                        This edition
                                    </h3> 
                                </div> -->
                                <div class="px-1 py-3 sm:p-0">
                                    <dl class="sm:divide-y sm:divide-gray-200">
                                        <div class="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Format
                                            </dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {dataBookExample.numPages} pages
                                            </dd>
                                        </div>
                                        <div class="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Published
                                            </dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {dataBookExample.publishDate}
                                            </dd>
                                        </div>
                                        <div class="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm font-medium text-gray-500">
                                                ISBN
                                            </dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {dataBookExample.isbn13}
                                             
                                            </dd>
                                        </div>
                                        <div class="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Language
                                            </dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {dataBookExample.language}
                                            </dd>
                                        </div>

                                        <div class="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Publisher
                                            </dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {dataBookExample.publisher}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                            
                        </div>
                    {/if}

                    <div class="flex flex-col gap-3">
                        <h1 class = "text-2xl font-semibold">Community reviews</h1>
                    
                        <div class="flex flex-col gap-2">
                            {#each dataBookExample.ratingHistogram as rating, i}
                                <div class="flex items-center">
                                    <span class="text-sm font-medium ">{i + 1} star</span>
                                    <div class="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                                    <div class="h-4 bg-yellow-400 rounded" style="width: {(rating/dataBookExample.ratingsCount * 100).toFixed(1)}%"></div>
                                    </div>
                                    <span class="text-sm font-medium text-gray-500">{rating} ({(rating/dataBookExample.ratingsCount * 100).toFixed(1)}%)</span>
                                </div>
                            
                            {/each}
                        </div>
                    </div>
                
          </div>

          
      </div>
  </div>
</div>

</div>





<!-- <div class="p-4 bg-tertiary-500">Write review here</div> -->



<style>


</style>