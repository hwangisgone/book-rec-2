import type { ClientResponseError } from 'pocketbase';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { bookApi } from '$lib/api';
import type { RatingAggregateRecord } from '$lib/pocketbase-types';

export const load: PageLoad = async ({ fetch }) => {
	try {
		// const newApi = new bookApi(params.book_isbn, fetch);
		


		return {
			// book: await newApi.getOneBook(),
		};
	} catch (e) {
		const err = e as ClientResponseError;
		console.log(err);
		return error(404, {
			message: err.data.message
		});
	}
};
