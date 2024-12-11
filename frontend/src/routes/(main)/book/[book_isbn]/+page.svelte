<script lang='ts'>
	let number1 = $state(60000);
	let number2 = 5;

	function increase() {
		number1 += 1;
		number2 += 1;
	}

	// let {

	// }: {

	// } = $props();

	let dataBookExample = {
      "ISBN_13": "test",
      "ISBN_10": "test",
      "title": "test",
      "description": "test",
      "image_url": "https://example.com",
      "author": "test",
      "language": "test",
      "publish_date": "2022-01-01 10:00:00.123Z",
      "num_pages": 123,
      "crawl_source": "goodreads",
      "review_count": 123,
      "average_rating": 123,
      "series": "RELATION_RECORD_ID",
      "genre": [
        "RELATION_RECORD_ID"
      ]
	}

</script>

<div>
	HTML HERE - {number1} - {number2}
</div>

<div class="p-4 m-4 bg-blue-100 div1 bg-primary-500">Write review here</div>


<div class="p-4 bg-secondary-500">Write review here</div>
<div class="p-4 bg-tertiary-500">Write review here</div>

<!-- justify-between -->

<div class="p-4 flex items-center">
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
</div>

<style>

</style>