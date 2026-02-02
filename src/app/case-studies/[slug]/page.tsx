import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/caseStudies';
import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail';
import StructuredData from '@/components/seo/StructuredData';
import { generateCanonicalUrl, siteConfig } from '@/lib/seo-config';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const studies = getAllCaseStudies();
    return studies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        return { title: 'Case Study Not Found' };
    }

    const canonicalUrl = generateCanonicalUrl(`/case-studies/${slug}`);

    return {
        title: study.title,
        description: study.excerpt,
        keywords: ['case study', 'enterprise success', 'business automation', study.title],
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type: 'article',
            title: `${study.title} - Walnetix Case Study`,
            description: study.excerpt,
            url: canonicalUrl,
            siteName: siteConfig.name,
            images: [
                {
                    url: `${siteConfig.url}${study.image}`,
                    width: 1200,
                    height: 630,
                    alt: study.title,
                },
            ],
            publishedTime: study.date,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${study.title} - Walnetix Case Study`,
            description: study.excerpt,
            images: [`${siteConfig.url}${study.image}`],
        },
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        notFound();
    }

    const breadcrumbs = [
        { name: 'Home', url: generateCanonicalUrl('/') },
        { name: 'Case Studies', url: generateCanonicalUrl('/case-studies') },
        { name: study.title, url: generateCanonicalUrl(`/case-studies/${slug}`) },
    ];

    const articleSchema = generateArticleSchema({
        title: study.title,
        description: study.excerpt,
        image: study.image,
        datePublished: study.date,
        url: generateCanonicalUrl(`/case-studies/${slug}`),
    });

    return (
        <>
            <StructuredData
                data={[
                    articleSchema,
                    generateBreadcrumbSchema(breadcrumbs),
                ]}
            />
            <CaseStudyDetail study={study} />
        </>
    );
}
