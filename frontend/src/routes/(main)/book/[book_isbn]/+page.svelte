<script lang='ts'>
    let { data } = $props();

    let currentBook = data.book;
    // Test: /book/9780590353403

    currentBook.averageRating = 0.7;
    const dataBookExample = currentBook;

    let averageRating = dataBookExample.averageRating;
    // Tạo mảng các sao, mỗi sao có trạng thái full (đầy), half (nửa), hoặc empty (rỗng)
    const stars = Array(5)
        .fill()
        .map((_, i) => {
        const rating = averageRating - i;
        return rating >= 1 ? 'full' : rating >= 0.5 ? 'half' : 'empty';
        });

  // document.getElementById('book_image').src = dataBookExample.imageUrl;s

      // Biến để theo dõi trạng thái ẩn/hiện
    let isVisible = true;
    function toggleVisibility() {
        isVisible = !isVisible;
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
                  <img class="w-full h-full object-cover" src={dataBookExample.image_url} alt="Product Image">
              </div>
              <div class="flex -mx-2 mb-4">
                
                Rating this book
                  {dataBookExample.ratingsCount}
              </div>
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
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-500 w-7 h-auto fill-current hover:text-yellow-600" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        {/if}
                        {#if star === 'half'}
                        <!-- Half Star -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-500 w-7 h-auto fill-current hover:text-green-600" viewBox="0 0 16 16">
                                <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                            </svg>
                        {/if}
                        {#if star === 'empty'}
                        <!-- Empty Star -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-500 w-7 h-auto fill-current hover:text-green-600" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
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
                    <button onclick={toggleVisibility}>
                      {isVisible ? 'Book detais \& edition' : 'Hiện thông tin'}
                    </button>
                  
                    <!-- Nội dung hiển thị/ẩn -->
                    {#if isVisible == true }
                    <div class="visible">
                        <div class=" overflow-hidden ">
                            <div class="px-4 py-5 sm:px-6">
                                <h3 class="text-lg leading-6 font-medium text-gray-900">
                                    This edition
                                </h3> 
                            </div>
                            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <dl class="sm:divide-y sm:divide-gray-200">
                                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            Format
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {dataBookExample.numPages} pages
                                        </dd>
                                    </div>
                                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            Published
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {dataBookExample.publishDate}
                                        </dd>
                                    </div>
                                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            ISBN
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {dataBookExample.isbn13}
                                         
                                        </dd>
                                    </div>
                                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            Language
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {dataBookExample.language}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        
                    </div>
                    {/if}
                </div>
<!--                 <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                    <div class="flex items-center mt-2">
                        <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div> -->
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                    <div class="flex items-center mt-2">
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                    </div>
                </div>
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                      sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                      lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                      ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                      sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                  </p>
              </div>
          </div>
      </div>
  </div>
</div>




<div class="p-4 bg-secondary-500">Write review here</div>
<div class="p-4 bg-tertiary-500">Write review here</div>

<!-- justify-between -->

<!-- <div class="p-4 flex items-center">
	<button class="btn variant-filled-primary " onclick={increase}>
		Button 1
	</button>

	<button class="btn variant-filled-secondary " onclick={increase}>
		Button 1
	</button>

	<button class="btn variant-filled-tertiary " onclick={increase}>
		Button 1
	</button>

	<div>Something</div>
</div> -->

<style>

</style>