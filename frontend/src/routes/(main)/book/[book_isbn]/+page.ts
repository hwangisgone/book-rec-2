import type { ClientResponseError } from 'pocketbase';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { bookApi } from './api';

export const load: PageLoad = async ({ params, fetch }) => {
	try {
		const newApi = new bookApi(params.book_isbn, fetch);

		return {
			book: await newApi.getOneBook(),
			ratings: await newApi.getBook10NewestRatingsWithUser(),
			ratings_info: await newApi.getBookAllRatings2()
		};
	} catch (e) {
		const err = e as ClientResponseError;
		console.log(err);
		return error(404, {
			message: err.data.message
		});
	}
};
