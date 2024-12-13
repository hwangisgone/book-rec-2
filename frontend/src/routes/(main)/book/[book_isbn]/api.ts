import { pb } from '$lib/pocketbase';
import type {
	RatingResponse,
	UserAccountRecord,
	BookRecord,
	BookResponse,
	RatingAggregateRecord,
	GenreRecord
} from '$lib/pocketbase-types';

export class bookApi {
	book_isbn = '';
	fetch: any;
	constructor(book_isbn: string, fetch: any) {
		this.book_isbn = book_isbn;
		this.fetch = fetch;
	}

	async getOneBook(): Promise<Book> {
		const book_response = await pb
			.collection('book')
			.getOne<BookResponse<{ genres: GenreRecord[] }>>(this.book_isbn, {
				fields:
					'id,ISBN_10,title,description,image_url,author,language,publish_date,num_pages,series,expand.genres.name',
				expand: 'genres',
				fetch: fetch
			});

		const genres = book_response.expand?.genres?.map((e) => e.name) ?? [];
		// console.log(genres, book_response);

		return {
			...book_response,
			ISBN_13: book_response.id,
			ISBN_10: book_response.ISBN_10 ?? undefined,
			publish_date_date: new Date(book_response.publish_date ?? ''),
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
				fetch: this.fetch
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
			fetch: this.fetch
		});
	}

	async getBookAllRatings() {
		return await pb.collection('rating').getFullList<RatingResponse<UserAccountRecord>>({
			fields: 'rating_score',
			filter: `book  =  "${this.book_isbn}"`,
			fetch: this.fetch
		});
	}
}
