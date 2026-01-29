import styles from './SuccessCard.module.css';

interface SuccessCardProps {
    businessType: string;
    location: string;
    problem: string;
    solution: string;
    result: string;
}

export default function SuccessCard({ businessType, location, problem, solution, result }: SuccessCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.businessType}>{businessType}</h3>
                <span className={styles.location}>{location}</span>
            </div>
            <div className={styles.body}>
                <div className={styles.section}>
                    <h4 className={styles.label}>The Problem</h4>
                    <p className={styles.text}>{problem}</p>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.label}>The Solution</h4>
                    <p className={styles.text}>{solution}</p>
                </div>
                <div className={styles.section}>
                    <h4 className={`${styles.label} ${styles.resultLabel}`}>The Result</h4>
                    <p className={`${styles.text} ${styles.resultText}`}>{result}</p>
                </div>
            </div>
        </div>
    );
}
