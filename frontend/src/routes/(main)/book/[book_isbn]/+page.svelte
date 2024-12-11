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

<div>Write review here</div>

<button onclick={increase}>
	Button 1
</button>


<style>
	
</style>