type Author = {
	avatarUrl: string,
	name: string,
	role: string
}
export type PostProps = {
	author: Author
	content: {
		type: string,
		content: string
	}[]
	publishedAt: Date
}