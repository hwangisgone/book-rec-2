import type { ClientResponseError } from 'pocketbase';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { bookApi } from '$lib/api';
import type { RatingAggregateRecord } from '$lib/pocketbase-types';

export const load: PageLoad = async ({ params, fetch }) => {
	try {
		const newApi = new bookApi(params.book_isbn, fetch);
		let ratingsInfo: RatingAggregateRecord;
		
		try {
			ratingsInfo = await newApi.getBookAllRatings2();
		} catch (e) {
			const err = e as ClientResponseError;
			if (err.data.status == 404) {
				ratingsInfo = {
					id: params.book_isbn,
					average_rating: 0,
					rating_05_count: 0,
					rating_15_count: 0,
					rating_1_count: 0,
					rating_25_count: 0,
					rating_2_count: 0,
					rating_35_count: 0,
					rating_3_count: 0,
					rating_45_count: 0,
					rating_4_count: 0,
					rating_5_count: 0,
					total_ratings: 0,
				}
			} else {
				throw e;
			}
		}

		return {
			book: await newApi.getOneBook(),
			// ratings: await newApi.getBook10NewestRatingsWithUser(),
			ratings_info: ratingsInfo
		};
	} catch (e) {
		const err = e as ClientResponseError;
		console.log(err);
		return error(404, {
			message: err.data.message
		});
	}
};
