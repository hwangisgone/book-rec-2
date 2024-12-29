<script lang="ts">
   const moviesData = [
  {
    "id": "9783950000000",
    "title": "Hattest du eigentlich schon die Operation?",
    "crawl_source": "goodreads",
    "ISBN_10": "394664287X",
    "description": "Peer Jongelings Debutcomic führt den Leser auf humorvolle, direkte Art an das Thema Transgender heran. In kleinen Anekdoten erzählen unterschiedliche genderqueere Charaktere, namentlich Paul, Ari, Lilly und Ray von ihren Problemen, Wünschen und Erfolgen. Exemplarisch veranschaulichen ihre Geschichten die Herausforderungen, denen sich Transpersonen im Alltag stellen. Dabei werden auch einige Begriffe geklärt und auf Fragen zum Thema Transgender Antwort gegeben.\n\nDurch Peer Jongelings verspielten Strich und expressives Character Design wird dieses komplexe Thema wunderbar unaufgeregt vermittelt und mit angemessenem Humor versehen.",
    "image_url": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1587742971i/53255989.jpg",
    "author": "Peer Jongeling",
    "language": "German",
    "publish_date": "2020-04-01",
    "num_pages": 36
  },
  {
    "id": "9782370000000",
    "title": "My Home Hero - tome 10",
    "crawl_source": "hardcover",
    "ISBN_10": "2368529535",
    "description": "",
    "image_url": "",
    "author": "Masashi Asaki",
    "language": "",
    "publish_date": "0",
    "num_pages": 0
  },
  {
    "id": "9780590000000",
    "title": "The Story Of Ruby Bridges",
    "crawl_source": "hardcover",
    "ISBN_10": "590439677",
    "description": "Summary, For months six-year-old Ruby Bridges must confront the hostility of white parents when she becomes the first African American girl to integrate Frantz Elementary School in New Orleans in 1960.",
    "image_url": "https://assets.hardcover.app/external_data/41537963/67dce7e84382f903d1b0063d5357c65d20c2e6ca.jpeg",
    "author": "Robert Coles",
    "language": "English",
    "publish_date": "1993-01-01",
    "num_pages": 32
  },
  {
    "id": "9780060000000",
    "title": "The Do-Over",
    "crawl_source": "hardcover",
    "ISBN_10": "",
    "description": "From the author of the 'genuinely funny' and 'delightful' Loathe at First Sight (NPR) and 'cinematic, charming' So We Meet Again (Emily Henry), a fun rom-com about a young Korean-American woman having to return to college after discovering she's a few credits shy of completing her degree--only to find one of her TAs is her old college boyfriend. Lily Lee is a bestselling author of the How to Be a Supernova At Work series, and her editor wants her to strike while the iron's hot with a new book, How to Land the Perfect Job. But when Lily is offered a coveted position at a top firm, the employer background check reveals she's short a few college credits and never actually completed her degree. Unbelievably, her worst nightmare has come true. Lily returns to her alma mater, reliving her senior year of college ten years later. She enrolls in classes, gets invited to frat parties, eats most of her meals with 'dining dollars,' and to make things even more weird and chaotic, she discovers that her computer science TA is her old college boyfriend, Jake Cho. Asappears to have his life together while Lily's so close to losing her dream job opportunity and her book deal. Things aren't so simple the second time around. The Do-Over is a delightfully warm and hopeful story about second chances in love and life, and how the future we want may turn out far different than we imagined.",
    "image_url": "https://assets.hardcover.app/edition/30642472/61423065._SX98_.jpg",
    "author": "Suzanne Park",
    "language": "English",
    "publish_date": "2023-01-01",
    "num_pages": 368
  },
  {
    "id": "9788330000000",
    "title": "Wyvern's Gold",
    "crawl_source": "hardcover",
    "ISBN_10": "1956455752",
    "description": "\"Six hundred years ago, humans retreated underground. Our Elders said our sins were why. Ever since, the battle between Heaven and Hell has raged on Earth's surface. Only becoming truly righteous can save us.\n\nIt was a lie.\n\nStories of dragons willing to devour us and wild men who will torture us keep the population in line. For twenty years, all I'd heard was how the surface was filled with horrors - that's why our hunters always return wounded. God does not consider us ready yet.\n\nIt. Was. A. Lie!\n\nThey've beaten me down until the only option left is death. Sacrificed to the dragons, I expect monsters from legends. Instead, I learn the truth. Dragons are people. Massive, strange, dangerous people.\n\nMy only hope is to push aside everything I've been taught and learn to embrace who I really am. A daughter. A woman. Not just a healer but also a warrior! I was chained out to die, but I will survive. One way or another, I will find a way to stop all the lies.\n\nBecause monsters are real. They just aren't the ones I expected.\n\n** Wyvern's Gold is a 200,000 word novel and the start to an epic series. **\"",
    "image_url": "https://assets.hardcover.app/editions/31471381/7273463422171953.jpg",
    "author": "A.H. Hadley",
    "language": "",
    "publish_date": "2024-07-26",
    "num_pages": 572
  },
  {
    "id": "9788380000000",
    "title": "Filozofia",
    "crawl_source": "hardcover",
    "ISBN_10": "8386211849",
    "description": "",
    "image_url": "https://assets.hardcover.app/external_data/60474299/1e4c46800bef076760f576e84e425367e3ac7e49.jpeg",
    "author": "Richard H. Popkin",
    "language": "English",
    "publish_date": "1956-09-10",
    "num_pages": 528
  }
]

  const moviesData2 = {
    movies: [
      {
        name: "Inception",
        imageUrl: "https://assets.hardcover.app/external_data/41537963/67dce7e84382f903d1b0063d5357c65d20c2e6ca.jpeg",
        url: "https://www.example.com/inception",
      },
      {
        name: "Interstellar",
        imageUrl: "https://assets.hardcover.app/external_data/41537963/67dce7e84382f903d1b0063d5357c65d20c2e6ca.jpeg",
        url: "https://www.example.com/interstellar",
      },
      {
        name: "The Dark Knight",
        imageUrl: "https://assets.hardcover.app/external_data/41537963/67dce7e84382f903d1b0063d5357c65d20c2e6ca.jpeg",
        url: "https://www.example.com/the-dark-knight",
      },
      {
        name: "The Matrix",
        imageUrl: "https://assets.hardcover.app/external_data/41537963/67dce7e84382f903d1b0063d5357c65d20c2e6ca.jpeg",
        url: "https://www.example.com/the-matrix",
      },
      {
        name: "Avengers: Endgame",
        imageUrl: "https://assets.hardcover.app/external_data/41537963/67dce7e84382f903d1b0063d5357c65d20c2e6ca.jpeg",
        url: "https://www.example.com/avengers-endgame",
      },
      {
        name: "Inception",
        imageUrl: "https://assets.hardcover.app/external_data/41537963/67dce7e84382f903d1b0063d5357c65d20c2e6ca.jpeg",
        url: "https://www.example.com/inception",
      },
      {
        name: "Interstellar",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1587742971i/53255989.jpg",
        url: "https://www.example.com/interstellar",
      },
      {
        name: "The Dark Knight",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387740023i/5977.jpg",
        url: "https://www.example.com/the-dark-knight",
      },
      {
        name: "The Matrix",
        imageUrl: "https://assets.hardcover.app/external_data/41537963/67dce7e84382f903d1b0063d5357c65d20c2e6ca.jpeg",
        url: "https://www.example.com/the-matrix",
      },
      {
        name: "Avengers: Endgame",
        imageUrl: "https://assets.hardcover.app/external_data/41537963/67dce7e84382f903d1b0063d5357c65d20c2e6ca.jpeg",
        url: "https://www.example.com/avengers-endgame",
      }
    ],
  };
  
  let elemMovies1: HTMLDivElement;
  let elemMovies2: HTMLDivElement;

  function multiColumnLeft(elemMovies: HTMLDivElement): void {
    let x = elemMovies.scrollWidth;
    if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
    elemMovies.scroll(x, 0);
  }

  function multiColumnRight(elemMovies: HTMLDivElement): void {
    let x = 0;
    // -1 is used because different browsers use different methods to round scrollWidth pixels.
    if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) x = elemMovies.scrollLeft + elemMovies.clientWidth;
    elemMovies.scroll(x, 0);
  }
</script>

<h2 class = "font-sans font-semibold  text-lg pb-2">Similar book</h2>
<div class="scroll-container bg-success">
<button type="button"  on:click={()=>multiColumnLeft(elemMovies1)} style = "width:200px" >
  <img 
    src = https://www.svgrepo.com/show/238335/next.svg
    class = "rotate-180"
   />
</button>
<div class="grid grid-cols-5 gap-4 item-center   p-2   ">
	
	<div bind:this={elemMovies1} style = "width:1140px"  class="scrollable-content snap-x snap-mandatory scroll-smooth flex gap-4  pb-2 overflow-x-auto">
		
    {#each moviesData as book}
			<a href={`/book/${book.id}`} style="width:180px" class="shrink-0 snap-start">
				<!-- class="rounded-container-token hover:brightness-125  " -->
        <img
          class = "image-container rounded-container-token hover:brightness-125"
					
          style = "width:200px"
					src={book.image_url}
					alt={book.title}
					title={book.title}
					loading="lazy"
				/>
			</a>
		{/each}
	</div>

</div>
<button type="button"  on:click={()=> multiColumnRight(elemMovies1)} style = "width:200px">
  <img src = https://www.svgrepo.com/show/238335/next.svg />
  
</button>		
</div>


<h2 class = "font-sans font-semibold  text-lg pb-2 p-5">Other users also like </h2>
<div class="scroll-container">
<button type="button"  on:click={()=>multiColumnLeft(elemMovies2)} style = "width:200px" >
  <img 
    src = https://www.svgrepo.com/show/238335/next.svg
    class = "rotate-180"
   />
</button>
<div class="grid grid-cols-5 gap-4 item-center   ">
	
	<div bind:this={elemMovies2} style = "width:1140px"  class="  scrollable-content snap-x snap-mandatory scroll-smooth flex gap-4  pb-2 overflow-x-auto">
    {#each moviesData2.movies as movie}
			<a href={movie.url} style="width:180px height:240px" class="shrink-0 object-contain w-180 h-240 snap-start">
				<img
					
          class = "image-container rounded-container-token hover:brightness-125"
          style = "width:200px"
					src={movie.imageUrl}
					alt={movie.name}
					title={movie.name}
					loading="lazy"
				/>
			</a>
		{/each}
	</div>

</div>
<button type="button"  on:click={()=> multiColumnRight(elemMovies2)} style = "width:200px">
  <img src = https://www.svgrepo.com/show/238335/next.svg />
  
</button>		
</div>

<style>
  .scroll-container {
    display: flex;
    align-items: center;
    gap: 4px;
     /* Khoảng cách giữa các phần tử */
  }
  .scrollable-content::-webkit-scrollbar {
    display: none; /* Ẩn thanh cuộn ngang */
  }

  .scrollable-content {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.image-container {
    width: 180px;  /* Kích thước chiều rộng của ảnh */
    height: 270px; /* Kích thước chiều cao của ảnh (tỷ lệ 2:3) */
    overflow: hidden;  /* Ẩn phần thừa nếu ảnh không vừa */
    position: relative;  /* Đảm bảo ảnh không bị tràn ra ngoài container */
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Đảm bảo ảnh phủ đầy phần tử chứa mà không bị méo */
  }
</style>