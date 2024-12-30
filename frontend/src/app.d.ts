// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	type Book = {
		ISBN_13: string;
		ISBN_10?: string;
		title: string;
		author: string;
		description: string;
		image_url: string;
		language?: string;
		num_pages?: number;
		publish_date_date?: Date;
		genres: string[];
		series?: string;
		average_rating?: number;
		total_ratings?: number;
	};
	type UserAccount = {
		full_name: string;
		account_source: 'goodreads' | 'hardcover' | 'new';
	};
	type Rating = {
		rating_score: number;
		ISBN_13: string;
		user_account: UserAccount;
	};
}

export {};
