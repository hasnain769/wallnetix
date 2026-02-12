import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'src/components/portfolio/content');

export interface PortfolioItem {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    gallery: string[];
    content: string;
    tech: string;
    features: string;
    links: string;
}

export function getAllPortfolio(): PortfolioItem[] {
    if (!fs.existsSync(contentDirectory)) return [];

    const fileNames = fs.readdirSync(contentDirectory);
    const allItems = fileNames.filter(name => name.endsWith('.md')).map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse Frontmatter and Content
        const match = fileContents.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);

        let frontmatter: any = {};
        let content = fileContents;

        if (match) {
            const yaml = match[1];
            content = match[2];

            yaml.split('\n').forEach(line => {
                const parts = line.split(':');
                if (parts.length >= 2) {
                    const key = parts[0].trim();
                    let value = parts.slice(1).join(':').trim();
                    if (value.startsWith('"') && value.endsWith('"')) {
                        value = value.slice(1, -1);
                    }
                    frontmatter[key] = value;
                }
            });
        }

        // Image Fallback
        let image = frontmatter.image || '';
        if (image) {
            const publicPath = path.join(process.cwd(), 'public', image.startsWith('/') ? image.slice(1) : image);
            if (!fs.existsSync(publicPath)) {
                // Fallback map
                if (slug.includes('botharbor')) image = '/images/botharbor_dashboard.png';
                else if (slug.includes('legalsay')) image = '/images/legalsay_dashboard.png';
                else if (slug.includes('neighbortool')) image = '/images/neighbor-tool.png';
                else image = '/images/hero_v2.png';
            }
        } else {
            image = '/images/hero_v2.png';
        }

        // Parse gallery (array of images)
        let gallery: string[] = [];
        if (frontmatter.gallery) {
            // Parse YAML array format
            const galleryText = frontmatter.gallery;
            if (typeof galleryText === 'string') {
                // Extract paths from array syntax: ["path1", "path2"]
                const matches = galleryText.match(/["']([^"']+)["']/g);
                if (matches) {
                    gallery = matches.map(m => m.replace(/["']/g, ''));
                }
            }
        }
        // Default to single image if no gallery
        if (gallery.length === 0) {
            gallery = [image];
        }

        // Section Parsing Helper
        const extractSection = (headerPattern: string) => {
            const regex = new RegExp(`## ${headerPattern}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`, 'i');
            const match = content.match(regex);
            return match ? match[1].trim() : '';
        };

        const tech = extractSection('Tech Stack');
        const features = extractSection('Key Features');
        const links = extractSection('Links');

        return {
            slug,
            title: frontmatter.title || 'Untitled',
            date: frontmatter.date || '',
            excerpt: frontmatter.excerpt || '',
            image,
            gallery,
            content,
            tech,
            features,
            links
        };
    });

    return allItems.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
    const all = getAllPortfolio();
    return all.find(s => s.slug === slug);
}
