import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'src/components/case-studies/content');

export interface CaseStudy {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    content: string;
    challenge: string;
    solution: string;
    results: string;
    demoContent: string;
    scriptSrc?: string;
}

export function getAllCaseStudies(): CaseStudy[] {
    if (!fs.existsSync(contentDirectory)) return [];

    const fileNames = fs.readdirSync(contentDirectory);
    const allStudies = fileNames.filter(name => name.endsWith('.md')).map((fileName) => {
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

        // Extract script src if exists
        let scriptSrc = undefined;
        const scriptMatch = content.match(/<script src="([^"]+)"/);
        if (scriptMatch) {
            scriptSrc = scriptMatch[1];
        }

        // Image Fallback
        let image = frontmatter.image || '';
        if (image) {
            const publicPath = path.join(process.cwd(), 'public', image.startsWith('/') ? image.slice(1) : image);
            if (!fs.existsSync(publicPath)) {
                // Fallback map
                if (slug.includes('voice')) image = '/images/hero.png';
                else if (slug.includes('waiter')) image = '/images/dashboard.png';
                else if (slug.includes('booking')) image = '/images/inventory.png';
                else image = '/images/hero_v2.png';
            }
        } else {
            image = '/images/hero_v2.png';
        }

        // Section Parsing Helper
        const extractSection = (headerPattern: string) => {
            const regex = new RegExp(`## ${headerPattern}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`, 'i');
            const match = content.match(regex);
            return match ? match[1].trim() : '';
        };

        const challenge = extractSection('The Challenge');
        const solution = extractSection('The Solution');
        const results = extractSection('The Results');
        let demoContent = extractSection('(?:Live Demo|Try Demo)');

        return {
            slug,
            title: frontmatter.title || 'Untitled',
            date: frontmatter.date || '',
            excerpt: frontmatter.excerpt || '',
            image,
            content,
            challenge,
            solution,
            results,
            demoContent,
            scriptSrc
        };
    });

    return allStudies.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    const all = getAllCaseStudies();
    return all.find(s => s.slug === slug);
}
