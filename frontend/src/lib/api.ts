import { pb } from '$lib/pocketbase';
import type {
	RatingResponse,
	UserAccountRecord,
	BookResponse,
	RatingAggregateRecord,
	GenreRecord,
    BookRecord
} from '$lib/pocketbase-types';


 const sortfunc = (a: Book, b: Book) => {
    // Heavily penalize books with no image_url
    const imagePenaltyA = a.image_url ? 0 : 1000;
    const imagePenaltyB = b.image_url ? 0 : 1000;

    const dateA =  a.publish_date_date ?? new Date('1900-01-01');
    const dateB =  b.publish_date_date ?? new Date('1900-01-01');

    // Calculate final penalties
    const penaltyA = imagePenaltyA;
    const penaltyB = imagePenaltyB;

    // Sort by penalties first
    if (penaltyA !== penaltyB) {
      	return penaltyA - penaltyB;
    }

    // Sort by total_ratings > 100
    const ratingComparison = (b.total_ratings ?? 0 > 100 ? 1 : 0) - (a.total_ratings ?? 0 > 100 ? 1 : 0);
    if (ratingComparison !== 0) {
      	return ratingComparison;
    }

    // Finally, sort by published_date (descending)
    return dateB.getTime() - dateA.getTime();
}


export class bookListApi {
	// #fetch: any = undefined;
	// constructor(fetch: any) {
	// 	this.#fetch = fetch;
	// }


	async getLatestBookList(pageOffset: number = 1): Promise<Book[]> {
		console.log("Getting list: ", pageOffset)
		const book_response = await pb
			.collection('rating_aggregate')
			.getList<BookResponse<{ book: BookRecord } > & { average_rating: number, total_ratings: number }>(pageOffset, 50, {

				fields: 'id,average_rating,total_ratings,expand.book.title,expand.book.image_url,expand.book.publish_date',
				sort: '-book.publish_date',
				filter: 'book.publish_date < "2024-12-31"',
				expand: 'book'
				// fetch: this.#fetch
			})

		// console.log(book_response);

		return book_response.items.map(item => {
			return {
				...item,
				...item.expand?.book,
				ISBN_13: item.id,
				publish_date_date: item.publish_date ? new Date(item.publish_date) : undefined,
			};
		}).sort(sortfunc);
	}

	async getCollaborativeFilteringBookList(pageOffset: number = 1): Promise<Book[]> {
		const book_response = await pb
			.collection('book_aggregate')
			.getList<BookResponse & { average_rating: number, total_ratings: number }>(pageOffset, 50, {
				fields: 'id,title,image_url,author,publish_date,average_rating,total_ratings',
				sort: '-total_ratings,-publish_date',
				// fetch: this.#fetch
			})

		return [];

		// book_response.items.map(item => {
		// 	return {
		// 		...item,
		// 		ISBN_13: item.id,
		// 		publish_date_date: item.publish_date ? new Date(item.publish_date) : undefined,
		// 	};
		// });
	}
}

export class bookApi {
	book_isbn = '';
	#fetch: any;
	constructor(book_isbn: string, fetch: any) {
		this.book_isbn = book_isbn;
		this.#fetch = fetch;
	}

	async getOneBook(): Promise<Book> {
		const book_response = await pb
			.collection('book')
			.getOne<BookResponse<{ genres: GenreRecord[] }>>(this.book_isbn, {
				fields:
					'id,ISBN_10,title,description,image_url,author,language,publish_date,num_pages,series,expand.genres.name',
				expand: 'genres',
				fetch: this.#fetch
			});

		const genres = book_response.expand?.genres?.map((e) => e.name) ?? [];
		// console.log(genres, book_response);

		return {
			...book_response,
			ISBN_13: book_response.id,
			ISBN_10: book_response.ISBN_10 ?? undefined,
			publish_date_date: book_response.publish_date ? new Date(book_response.publish_date) : undefined,
			genres: genres
		};
	}

	async getBook10NewestRatingsWithUser(): Promise<Rating[]> {
		const rating_response = await pb
			.collection('rating')
			.getList<RatingResponse<{ user_account: UserAccountRecord }>>(1, 10, {
				fields:
					'rating_score,book,user_account,expand.user_account.id,expand.user_account.full_name',
				expand: 'user_account',
				filter: `book  =  "${this.book_isbn}"`,
				sort: '-created',
				fetch: this.#fetch
			});

		return rating_response.items.map((item) => {
			return {
				rating_score: item.rating_score,
				ISBN_13: item.book,
				user_account: {
					full_name: item.expand?.user_account.full_name ?? '__',
					account_source: item.expand?.user_account.account_source ?? 'new'
				}
			};
		});
	}

	// BETTER BECAUSE IT DOESN'T HAVE TO FETCH >1000 RATINGS
	async getBookAllRatings2() {
		return await pb.collection('rating_aggregate').getOne<RatingAggregateRecord>(this.book_isbn, {
			fetch: this.#fetch
		});
	}

	async getBookAllRatings() {
		return await pb.collection('rating').getFullList<RatingResponse<UserAccountRecord>>({
			fields: 'rating_score',
			filter: `book  =  "${this.book_isbn}"`,
			fetch: this.#fetch
		});
	}
}
