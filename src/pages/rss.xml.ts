import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { contentSlug } from '../data/routing';
import { siteConfig } from '../data/site';

export async function GET() {
	const posts = (await getCollection('blog'))
		.filter((post) => post.id.startsWith('en/'))
		.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

	return rss({
		title: `${siteConfig.name} Blog`,
		description: siteConfig.description,
		site: siteConfig.url,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `/blog/${contentSlug(post.id)}/`,
		})),
	});
}
