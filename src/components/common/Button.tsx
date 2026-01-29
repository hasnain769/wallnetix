import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary' | 'brand-green';
    className?: string;
    icon?: boolean;
}

export default function Button({
    children,
    href,
    variant = 'primary',
    className = '',
    icon = false,
    ...props
}: ButtonProps) {
    const Component = href ? Link : 'button';
    // @ts-ignore - Dynamic component props are tricky
    const componentProps = href ? { href, ...props } : props;

    return (
        // @ts-ignore
        <Component
            className={`${styles.button} ${styles[variant]} ${className}`}
            {...componentProps}
        >
            {children}
            {icon && <ArrowRight size={18} className={styles.icon} />}
        </Component>
    );
}
