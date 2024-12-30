// import type { ClientResponseError } from 'pocketbase';
// import type { PageLoad } from './$types';
// import { error } from '@sveltejs/kit';
// import { bookListApi } from '$lib/api';

// export const load: PageLoad = async ({ fetch }) => {
// 	try {
// 		const newApi = new bookListApi();

// 		return {
// 			firstLoad: await newApi.getLatestBookList(),
// 			nextLoad: newApi.getLatestBookList
// 			// ratings: await newApi.getBook10NewestRatingsWithUser(),
// 		};
// 	} catch (e) {
// 		const err = e as ClientResponseError;
// 		console.log(err);
// 		return error(404, {
// 			message: err.data.message
// 		});
// 	}
// };
