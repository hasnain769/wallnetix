import { notFound } from 'next/navigation';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/caseStudies';
import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const studies = getAllCaseStudies();
    return studies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        return { title: 'Case Study Not Found' };
    }

    return {
        title: `${study.title} - Walnetix Case Study`,
        description: study.excerpt,
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        notFound();
    }

    return <CaseStudyDetail study={study} />;
}
