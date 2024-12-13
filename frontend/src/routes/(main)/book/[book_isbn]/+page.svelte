<script lang="ts">
	import {
		Ratings,
		CodeBlock,
		RangeSlider,
		type PopupSettings,
		popup
	} from '@skeletonlabs/skeleton';
	import { icons } from './icons';

	import { ProgressBar } from '@skeletonlabs/skeleton';

	let { data } = $props();

	const currentBook = data.book;
	const rating10s = data.ratings;
	const ratingInfo = data.ratings_info;

	console.log(data);
	// Test: /book/9780590353403

	const ratingHistogram = [
		ratingInfo.rating_05_count,
		ratingInfo.rating_1_count,
		ratingInfo.rating_15_count,
		ratingInfo.rating_2_count,
		ratingInfo.rating_25_count,
		ratingInfo.rating_3_count,
		ratingInfo.rating_35_count,
		ratingInfo.rating_4_count,
		ratingInfo.rating_45_count,
		ratingInfo.rating_5_count
	];

	let averageRating = ratingInfo.average_rating ?? 0;
	// Tạo mảng các sao, mỗi sao có trạng thái full (đầy), half (nửa), hoặc empty (rỗng)
	const stars = Array(5)
		.fill('empty')
		.map((_, i) => {
			const rating = averageRating - i;
			return rating >= 1 ? 'full' : rating >= 0.5 ? 'half' : 'empty';
		});

	// document.getElementById('book_image').src = currentBook.imageUrl;s

	// Biến để theo dõi trạng thái ẩn/hiện
	let isVisible = $state(false);

	function toggleVisibility() {
		isVisible = !isVisible;
	}

	// rating this book save in value.current, if != thi moi la rating
	let value = $state({ current: 0, max: 5 });
	function iconClick(event: CustomEvent<{ index: number }>): void {
		value.current = event.detail.index;
	}

	function makePopup(popupId: string): PopupSettings {
		return {
			event: 'hover',
			target: popupId,
			placement: 'top'
		};
	}

	// Icons
	import StarIcon from 'lucide-svelte/icons/star';
</script>

<!-- <div>
	HTML HERE - {number1} - {number2}
	 
</div>

<div class="p-4 m-4 bg-blue-100 div1 bg-primary-500">Write review here</div>

<button onclick={increase}>
	Button 1
</button> -->

<!-- <div class="mx-auto px-4 py-8 sm:px-6 lg:px-8"> -->
<div class="-mx-4 flex flex-col md:flex-row">
	<div class="md:flex-2 px-3">
		<div class="mb-4 h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700">
			<img class="h-full w-full object-cover" src={currentBook.image_url} alt="Book Cover" />
		</div>

		<div class="-mx-2 mb-4 flex">
			<Ratings bind:value={value.current} max={value.max} interactive on:icon={iconClick}>
				<svelte:fragment slot="empty">{@html icons.empty}</svelte:fragment>
				<svelte:fragment slot="half">{@html icons.half}</svelte:fragment>
				<svelte:fragment slot="full">{@html icons.full}</svelte:fragment>
			</Ratings>
		</div>

		<div class="text-center">Rating this book</div>
	</div>

	<div class="flex flex-col gap-4 px-4 md:flex-1">
		<div>
			<h2 class="mb-2 text-2xl font-bold text-gray-800 dark:text-white">{currentBook.title}</h2>
			<h5 class="mb-2 text-2xl text-gray-800 dark:text-white">
				{currentBook.author}
			</h5>

			<div class="flex w-auto space-x-1 rounded-lg p-1 lg:space-x-2">
				{#each stars as star, i}
					<div>
						{#if star === 'full'}
							{@html icons.full}
						{/if}
						{#if star === 'half'}
							{@html icons.half}
						{/if}
						{#if star === 'empty'}
							{@html icons.empty}
						{/if}
					</div>
				{/each}
				<span class="text-2xl font-medium">
					{averageRating.toFixed(1)}
				</span>
			</div>

			<div class="text-align: center font-sans md:font-serif">
				{ratingInfo.total_ratings} ratings - {0} reviews
			</div>
			<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
				{currentBook.description}
			</p>
		</div>

		<div>
			<span class="mb-2 font-bold text-gray-700 dark:text-gray-300">Genres </span>
			<!-- <span class="text-gray-600 dark:text-gray-300">{currentBook.genres}</span> -->
			<div class="flex gap-2">
				{#each currentBook.genres as thing}
					<div class="variant-filled badge">{thing}</div>
				{/each}
			</div>
		</div>

		<div class="w-80">
			<h1 class="mb-2 text-xl font-semibold">Community reviews</h1>

			<div class="flex h-32 items-end gap-1 rounded border-2 px-1">
				{#each ratingHistogram as count, index (index)}
					{@const percentage = Math.ceil(Math.max(5, (count / ratingInfo.total_ratings) * 100))}

					<span class="relative flex-1 rounded bg-yellow-400" style:height={`${percentage}%`}>
						<!-- Hover -->
						<span
							class="absolute bottom-0 h-[7.8rem] w-full hover:bg-yellow-900/10"
							use:popup={makePopup('popup' + index)}
						>
						</span>
					</span>

					<!-- Popup -->
					<div class="variant-filled rounded p-2 duration-75" data-popup={'popup' + index}>
						<span class="flex items-center"
							>{count} ({((index + 1) / 2).toFixed(1)}
							<StarIcon class="ml-1" size="1.2em" fill="gold" strokeWidth={2} />)
						</span>
						<div class="variant-filled arrow"></div>
					</div>
				{/each}
			</div>

			<div class="flex justify-between">
				<span class="flex items-center"
					>0.5
					<StarIcon class="ml-1" style="color: gold" size="1.2em" fill="gold" strokeWidth={2} />
				</span>
				<span class="flex items-center"
					>5
					<StarIcon class="ml-1" style="color: gold" size="1.2em" fill="gold" strokeWidth={2} />
				</span>
			</div>
		</div>

		<!-- Nút bấm -->
		<div>
			<button class="text-xl font-semibold" onclick={toggleVisibility}>
				{isVisible ? 'Book details & Edition' : 'Book details & Edition'}
			</button>
			<!-- Nội dung hiển thị/ẩn -->
			{#if isVisible == false}
				<div class="visible overflow-hidden">
					<!-- <div class="px-4 py-5 sm:px-6">
						<h3 class="text-lg leading-4 font-medium text-gray-900">
							This edition
						</h3> 
					</div> -->
					<div class="px-1 py-3 sm:p-0">
						<dl class="sm:divide-y sm:divide-gray-200">
							<div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-3">
								<dt class="text-sm font-medium text-gray-500">Format</dt>
								<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
									{currentBook.num_pages} pages
								</dd>
							</div>
							<div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-3">
								<dt class="text-sm font-medium text-gray-500">Published</dt>
								<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
									{currentBook.publish_date_date}
								</dd>
							</div>
							<div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-3">
								<dt class="text-sm font-medium text-gray-500">ISBN</dt>
								<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
									{currentBook.ISBN_13}
								</dd>
							</div>
							<div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-3">
								<dt class="text-sm font-medium text-gray-500">Language</dt>
								<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
									{currentBook.language}
								</dd>
							</div>

							<!--                                         <div class="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt class="text-sm font-medium text-gray-500">
									Publisher
								</dt>
								<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									{currentBook.publisher}
								</dd>
							</div> -->
						</dl>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<!-- </div> -->

<style>
</style>
