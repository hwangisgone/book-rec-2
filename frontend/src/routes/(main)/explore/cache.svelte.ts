
type myCache = {
	paging: number
	bookList: Book[]
}

export const loadedCache = $state<myCache>({
	paging: 1,
	bookList: []
})