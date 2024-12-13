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
		genre: string[];
		series?: string;
	}
}

export {};
