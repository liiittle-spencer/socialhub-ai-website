export function contentSlug(id: string) {
	return id.replace(/^en\//, '').replace(/\.(md|mdx)$/, '');
}
