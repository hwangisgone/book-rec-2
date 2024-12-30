/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from 'pocketbase';
import type { RecordService } from 'pocketbase';

export enum Collections {
	Authorigins = '_authOrigins',
	Externalauths = '_externalAuths',
	Mfas = '_mfas',
	Otps = '_otps',
	Superusers = '_superusers',
	Book = 'book',
	BookAggregate = 'book_aggregate',
	Genre = 'genre',
	Rating = 'rating',
	RatingAggregate = 'rating_aggregate',
	Series = 'series',
	UserAccount = 'user_account',
	UserLogin = 'user_login'
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString;
	collectionId: string;
	collectionName: Collections;
	expand?: T;
};

export type AuthSystemFields<T = never> = {
	email: string;
	emailVisibility: boolean;
	username: string;
	verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export type AuthoriginsRecord = {
	collectionRef: string;
	created?: IsoDateString;
	fingerprint: string;
	id: string;
	recordRef: string;
	updated?: IsoDateString;
};

export type ExternalauthsRecord = {
	collectionRef: string;
	created?: IsoDateString;
	id: string;
	provider: string;
	providerId: string;
	recordRef: string;
	updated?: IsoDateString;
};

export type MfasRecord = {
	collectionRef: string;
	created?: IsoDateString;
	id: string;
	method: string;
	recordRef: string;
	updated?: IsoDateString;
};

export type OtpsRecord = {
	collectionRef: string;
	created?: IsoDateString;
	id: string;
	password: string;
	recordRef: string;
	sentTo?: string;
	updated?: IsoDateString;
};

export type SuperusersRecord = {
	created?: IsoDateString;
	email: string;
	emailVisibility?: boolean;
	id: string;
	password: string;
	tokenKey: string;
	updated?: IsoDateString;
	verified?: boolean;
};

export enum BookCrawlSourceOptions {
	'goodreads' = 'goodreads',
	'hardcover' = 'hardcover'
}
export type BookRecord = {
	ISBN_10?: string;
	author: string;
	crawl_source: BookCrawlSourceOptions;
	created?: IsoDateString;
	description: string;
	genres?: RecordIdString[];
	id: string;
	image_url: string;
	language?: string;
	num_pages?: number;
	publish_date?: IsoDateString;
	series?: RecordIdString;
	title: string;
	updated?: IsoDateString;
};

export type BookAggregateRecord = {
	ISBN_10?: string;
	id: string;
};

export type GenreRecord = {
	created?: IsoDateString;
	id: string;
	name: string;
};

export type RatingRecord = {
	book: RecordIdString;
	created?: IsoDateString;
	id: string;
	rating_score: number;
	user_account: RecordIdString;
};

export type RatingAggregateRecord = {
	average_rating: number;
	id: string;
	rating_05_count: number;
	rating_15_count: number;
	rating_1_count: number;
	rating_25_count: number;
	rating_2_count: number;
	rating_35_count: number;
	rating_3_count: number;
	rating_45_count: number;
	rating_4_count: number;
	rating_5_count: number;
	total_ratings: number;
};

export enum SeriesCrawlSourceOptions {
	'goodreads' = 'goodreads',
	'hardcover' = 'hardcover'
}
export type SeriesRecord = {
	crawl_source: SeriesCrawlSourceOptions;
	created?: IsoDateString;
	id: string;
	name: string;
};

export enum UserAccountAccountSourceOptions {
	'goodreads' = 'goodreads',
	'hardcover' = 'hardcover',
	'new' = 'new'
}
export type UserAccountRecord = {
	account_source: UserAccountAccountSourceOptions;
	created?: IsoDateString;
	full_name: string;
	id: string;
	updated?: IsoDateString;
	userid_source?: number;
};

export type UserLoginRecord = {
	avatar?: string;
	created?: IsoDateString;
	email: string;
	emailVisibility?: boolean;
	id: string;
	password: string;
	tokenKey: string;
	updated?: IsoDateString;
	user_account?: RecordIdString;
	verified?: boolean;
};

// Response types include system fields and match responses from the PocketBase API
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> &
	BaseSystemFields<Texpand>;
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> &
	BaseSystemFields<Texpand>;
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>;
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>;
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> &
	AuthSystemFields<Texpand>;
export type BookResponse<Texpand = unknown> = Required<BookRecord> & BaseSystemFields<Texpand>;
export type BookAggregateResponse<Texpand = unknown> = Required<BookAggregateRecord> &
	BaseSystemFields<Texpand>;
export type GenreResponse<Texpand = unknown> = Required<GenreRecord> & BaseSystemFields<Texpand>;
export type RatingResponse<Texpand = unknown> = Required<RatingRecord> & BaseSystemFields<Texpand>;
export type RatingAggregateResponse<Taverage_rating = unknown, Texpand = unknown> = Required<
	RatingAggregateRecord<Taverage_rating>
> &
	BaseSystemFields<Texpand>;
export type SeriesResponse<Texpand = unknown> = Required<SeriesRecord> & BaseSystemFields<Texpand>;
export type UserAccountResponse<Texpand = unknown> = Required<UserAccountRecord> &
	BaseSystemFields<Texpand>;
export type UserLoginResponse<Texpand = unknown> = Required<UserLoginRecord> &
	AuthSystemFields<Texpand>;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	_authOrigins: AuthoriginsRecord;
	_externalAuths: ExternalauthsRecord;
	_mfas: MfasRecord;
	_otps: OtpsRecord;
	_superusers: SuperusersRecord;
	book: BookRecord;
	book_aggregate: BookAggregateRecord;
	genre: GenreRecord;
	rating: RatingRecord;
	rating_aggregate: RatingAggregateRecord;
	series: SeriesRecord;
	user_account: UserAccountRecord;
	user_login: UserLoginRecord;
};

export type CollectionResponses = {
	_authOrigins: AuthoriginsResponse;
	_externalAuths: ExternalauthsResponse;
	_mfas: MfasResponse;
	_otps: OtpsResponse;
	_superusers: SuperusersResponse;
	book: BookResponse;
	book_aggregate: BookAggregateResponse;
	genre: GenreResponse;
	rating: RatingResponse;
	rating_aggregate: RatingAggregateResponse;
	series: SeriesResponse;
	user_account: UserAccountResponse;
	user_login: UserLoginResponse;
};

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: '_authOrigins'): RecordService<AuthoriginsResponse>;
	collection(idOrName: '_externalAuths'): RecordService<ExternalauthsResponse>;
	collection(idOrName: '_mfas'): RecordService<MfasResponse>;
	collection(idOrName: '_otps'): RecordService<OtpsResponse>;
	collection(idOrName: '_superusers'): RecordService<SuperusersResponse>;
	collection(idOrName: 'book'): RecordService<BookResponse>;
	collection(idOrName: 'book_aggregate'): RecordService<BookAggregateResponse>;
	collection(idOrName: 'genre'): RecordService<GenreResponse>;
	collection(idOrName: 'rating'): RecordService<RatingResponse>;
	collection(idOrName: 'rating_aggregate'): RecordService<RatingAggregateResponse>;
	collection(idOrName: 'series'): RecordService<SeriesResponse>;
	collection(idOrName: 'user_account'): RecordService<UserAccountResponse>;
	collection(idOrName: 'user_login'): RecordService<UserLoginResponse>;
};
