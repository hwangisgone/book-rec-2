import { pb } from '$lib/pocketbase';
import { type BookRecord, type BookResponse, type RatingResponse } from '$lib/pocketbase-types';
import type { ClientResponseError } from 'pocketbase';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const book_response = await pb.collection('book').getOne<BookResponse<BookRecord>>(params.book_isbn, {
			fields: 'id,ISBN_10,title,description,image_url,author,language,publish_date,num_pages,series,expand.genre.name',
			expand: 'genre.name'
		});
		const rating_response = await pb.collection('rating').getFullList<RatingResponse>({
			fields: 'rating_score,book,user_account,expand.user_account.full_name',
			expand: 'user_account.full_name',
			filter: `book = ${params.book_isbn}`
		})		

		const book_ok: Book = {
			ISBN_13:    book_response.id,
			...book_response,
			ISBN_10:    book_response.ISBN_10 ?? undefined,
			publish_date_date: new Date(book_response.publish_date ?? ""),
			genre:      book_response.expand?.genre ?? [],

		}

		return {
			book: book_ok,
			ratings: rating_response
		};
	} catch (e) {
		const err = e as ClientResponseError;
		console.log(err);
		return error(404, {
			message: 'Book not found'
		});
	}
};