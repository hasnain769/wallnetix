import Image from 'next/image';
import Button from '../common/Button';
import styles from './ProductBlock.module.css';

interface ProductBlockProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    reversed?: boolean;
}

export default function ProductBlock({
    title,
    description,
    imageSrc,
    imageAlt,
    reversed = false
}: ProductBlockProps) {
    return (
        <div className={`${styles.block} ${reversed ? styles.reversed : ''}`}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <Button href="/contact" variant="primary" icon>
                    Get Started
                </Button>
            </div>
            <div className={styles.visual}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={600}
                        height={400}
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    );
}
