
import frontMatter from 'front-matter';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    image?: string;
    content: string;
    tags?: string[];
}

export async function getAllPosts(): Promise<BlogPost[]> {
    // Use Vite's import.meta.glob to load all markdown files in content dir
    const modules = import.meta.glob('/content/*.md', { query: '?raw', import: 'default' });
    const posts: BlogPost[] = [];

    for (const path in modules) {
        const raw = await modules[path]() as string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { attributes, body } = frontMatter<any>(raw);
        const slug = path.split('/').pop()?.replace('.md', '') || '';

        if (slug) {
            posts.push({
                slug,
                title: attributes.title || 'Untitled',
                excerpt: attributes.excerpt || '',
                date: attributes.date ? new Date(attributes.date).toISOString() : new Date().toISOString(),
                image: attributes.image,
                content: body,
                tags: attributes.tags || []
            });
        }
    }

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const modules = import.meta.glob('/content/*.md', { query: '?raw', import: 'default' });
        const path = `/content/${slug}.md`;

        if (!modules[path]) return null;

        const raw = await modules[path]() as string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { attributes, body } = frontMatter<any>(raw);

        return {
            slug,
            title: attributes.title || 'Untitled',
            excerpt: attributes.excerpt || '',
            date: attributes.date ? new Date(attributes.date).toISOString() : new Date().toISOString(),
            image: attributes.image,
            content: body,
            tags: attributes.tags || []
        };
    } catch (e) {
        return null;
    }
}
