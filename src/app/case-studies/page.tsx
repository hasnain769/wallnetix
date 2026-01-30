import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import { getAllCaseStudies } from '@/lib/caseStudies';
import styles from './case-studies.module.css';

export const metadata = {
    title: 'Case Studies - Walnetix',
    description: 'See how Saudi SMEs are growing with Walnetix automation.',
};

export default function CaseStudies() {
    const studies = getAllCaseStudies();

    return (
        <main className={styles.main}>
            <CaseStudiesHero />
            <section className={styles.cases}>
                <div className={styles.grid}>
                    {studies.map((study, index) => (
                        <CaseStudyCard
                            key={study.slug}
                            slug={study.slug}
                            title={study.title}
                            date={study.date}
                            description={study.excerpt}
                            imageSrc={study.image}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
