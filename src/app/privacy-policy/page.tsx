import { Metadata } from 'next';
import { generateMetadata, generateCanonicalUrl } from '@/lib/seo-config';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import PrivacyPolicyHero from '@/components/privacy/PrivacyPolicyHero';
import StructuredData from '@/components/seo/StructuredData';
import styles from './page.module.css';

export const metadata: Metadata = generateMetadata({
    title: 'Privacy Policy',
    description: 'Learn about how Walnetix collects, uses, and protects your personal information and data privacy rights.',
    canonical: generateCanonicalUrl('/privacy-policy'),
});

export default function PrivacyPolicyPage() {
    const breadcrumbs = [
        { name: 'Home', url: generateCanonicalUrl('/') },
        { name: 'Privacy Policy', url: generateCanonicalUrl('/privacy-policy') },
    ];

    return (
        <main>
            <StructuredData
                data={[
                    generateBreadcrumbSchema(breadcrumbs),
                ]}
            />
            <PrivacyPolicyHero />
            <div className={styles.container}>
                <div className={styles.content}>

                    <p className={styles.meta}>
                        <strong>Website:</strong>  walnetix.com<br />
                        <strong>Last Updated:</strong> 2 March 2026<br />
                        <strong>Effective Date:</strong> 2 March 2026
                    </p>

                    <hr className={styles.divider} />

                    <section>
                        <h2>Who We Are</h2>
                        <p>
                            Walnetix ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") is an AI development services and marketing agency. Our website is <strong>walnetix.com</strong>. For privacy questions, contact us at: <strong><a href="mailto:contact@walnetix.com">contact@walnetix.com</a></strong>.
                        </p>
                    </section>

                    <hr className={styles.divider} />

                    <section>
                        <h2>1. Information We Collect</h2>
                        <p>We collect only what we need to respond to your enquiries and improve our website.</p>

                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>What We Collect</th>
                                        <th>How We Collect It</th>
                                        <th>Why</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Name & email address</td>
                                        <td>Contact forms, email enquiries</td>
                                        <td>To respond to you</td>
                                    </tr>
                                    <tr>
                                        <td>Company name & role</td>
                                        <td>Contact forms</td>
                                        <td>To understand your needs</td>
                                    </tr>
                                    <tr>
                                        <td>Website usage data (pages visited, session duration)</td>
                                        <td>Cookies & analytics tools</td>
                                        <td>To improve the site</td>
                                    </tr>
                                    <tr>
                                        <td>IP address</td>
                                        <td>Automatically via web server</td>
                                        <td>Security & analytics</td>
                                    </tr>
                                    <tr>
                                        <td>Any information you voluntarily share</td>
                                        <td>Emails, forms, discovery calls</td>
                                        <td>To provide services</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            <strong>We do not collect:</strong> payment card data (handled by third-party processors), sensitive personal data (health, ethnicity, etc.), or data from children under 16.
                        </p>
                    </section>

                    <hr className={styles.divider} />

                    <section>
                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information collected to:</p>
                        <ul>
                            <li>Respond to contact form submissions and email enquiries</li>
                            <li>Schedule and conduct discovery calls</li>
                            <li>Send service-related communications you have requested</li>
                            <li>Improve our website content and user experience</li>
                            <li>Comply with applicable legal obligations</li>
                        </ul>
                        <p><strong>We do not sell, rent, or trade your personal information to third parties.</strong></p>
                    </section>

                    <hr className={styles.divider} />

                    <section>
                        <h2>3. Cookies & Tracking</h2>
                        <p>Our website uses cookies — small files stored on your device — to:</p>

                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Cookie Type</th>
                                        <th>Purpose</th>
                                        <th>Can You Opt Out?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Essential</td>
                                        <td>Site functionality (e.g., form sessions)</td>
                                        <td>No — required for the site to work</td>
                                    </tr>
                                    <tr>
                                        <td>Analytics</td>
                                        <td>Understand traffic and behaviour (e.g., Google Analytics)</td>
                                        <td>Yes — via cookie consent banner</td>
                                    </tr>
                                    <tr>
                                        <td>Marketing</td>
                                        <td>Retargeting ads (if applicable)</td>
                                        <td>Yes — via cookie consent banner</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>You can manage or withdraw cookie consent at any time using our cookie settings banner or your browser settings.</p>
                    </section>

                    <hr className={styles.divider} />

                    <section>
                        <h2>4. Legal Basis for Processing</h2>
                        <p>We process personal data under the following legal bases:</p>
                        <ul>
                            <li><strong>Legitimate Interests</strong> — responding to business enquiries and improving our services</li>
                            <li><strong>Consent</strong> — analytics and marketing cookies (where consent is required by law)</li>
                            <li><strong>Contract</strong> — processing data necessary to deliver services you have engaged us for</li>
                            <li><strong>Legal Obligation</strong> — where applicable law requires us to retain or process data</li>
                        </ul>
                    </section>

                    <hr className={styles.divider} />

                    <section>
                        <h2>5. How Long We Keep Your Data</h2>

                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Data Type</th>
                                        <th>Retention Period</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Contact form / enquiry records</td>
                                        <td>2 years from last interaction</td>
                                    </tr>
                                    <tr>
                                        <td>Client project communications</td>
                                        <td>Duration of engagement + 3 years</td>
                                    </tr>
                                    <tr>
                                        <td>Analytics data</td>
                                        <td>26 months (Google Analytics default)</td>
                                    </tr>
                                    <tr>
                                        <td>Legal/compliance records</td>
                                        <td>As required by applicable law</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>After the retention period, data is securely deleted or anonymised.</p>
                    </section>

                    <hr className={styles.divider} />

                    <section>
                        <h2>6. Who We Share Data With</h2>
                        <p>We may share your data with trusted service providers acting on our behalf:</p>

                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Provider</th>
                                        <th>Purpose</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Email / CRM platform (e.g., HubSpot)</td>
                                        <td>Managing enquiries and client communications</td>
                                        <td>USA / EU (Standard Contractual Clauses)</td>
                                    </tr>
                                    <tr>
                                        <td>Google Analytics</td>
                                        <td>Website analytics</td>
                                        <td>USA (SCCs)</td>
                                    </tr>
                                    <tr>
                                        <td>Cloud hosting provider</td>
                                        <td>Website hosting</td>
                                        <td>USA</td>
                                    </tr>
                                    <tr>
                                        <td>Calendly / scheduling tools</td>
                                        <td>Meeting bookings</td>
                                        <td>USA (SCCs)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>All third-party providers are contractually required to protect your data and may not use it for their own purposes.</p>
                        <p><strong>We do not share your data with any AI model provider for training purposes.</strong> Any AI tooling used internally operates under Zero Data Retention (ZDR) enterprise agreements.</p>
                    </section>

                    <hr className={styles.divider} />

                    <section>
                        <h2>7. International Transfers</h2>
                        <p>Walnetix serves clients globally. If you are located in the <strong>EU, UK, KSA, or UAE</strong>, your data may be transferred to servers outside your jurisdiction. Where required, we use appropriate safeguards such as:</p>
                        <ul>
                            <li>EU Standard Contractual Clauses (SCCs) for EU/EEA data</li>
                            <li>UK International Data Transfer Agreements (IDTAs) for UK data</li>
                            <li>NDMO-compliant mechanisms for Saudi data where applicable</li>
                        </ul>
                    </section>

                    <hr className={styles.divider} />

                    <section>
                        <h2>8. Your Rights</h2>
                        <p>Depending on your location, you may have the right to:</p>

                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Right</th>
                                        <th>What It Means</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Access</strong></td>
                                        <td>Request a copy of the personal data we hold about you</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Correction</strong></td>
                                        <td>Ask us to correct inaccurate or incomplete data</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Erasure</strong></td>
                                        <td>Request deletion of your data (subject to legal retention obligations)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Restriction</strong></td>
                                        <td>Ask us to limit how we process your data</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Portability</strong></td>
                                        <td>Receive your data in a structured, machine-readable format</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Objection</strong></td>
                                        <td>Object to processing based on legitimate interests or for direct marketing</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Withdraw Consent</strong></td>
                                        <td>Withdraw consent for cookies or marketing at any time</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>To exercise any of these rights, email us at <strong><a href="mailto:contact@walnetix.com">contact@walnetix.com</a></strong>. We will respond within <strong>30 days</strong> (or within the timeframe required by applicable law).</p>
                    </section>

                    <hr className={styles.divider} />

                    <section>
                        <h2>9. Security</h2>
                        <p>We take appropriate technical and organisational measures to protect your personal data, including:</p>
                        <ul>
                            <li>HTTPS encryption on all pages</li>
                            <li>Access controls and authentication for internal systems</li>
                            <li>Regular security reviews</li>
                            <li>AI pipelines operating under enterprise-grade, Zero Data Retention configurations</li>
                        </ul>
                        <p>No method of internet transmission is 100% secure. If we become aware of a breach affecting your data, we will notify you as required by applicable law.</p>
                    </section>

                    <hr className={styles.divider} />

                    <section>
                        <h2>10. Third-Party Links</h2>
                        <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices. We recommend reviewing the privacy policy of any third-party site you visit.</p>
                    </section>

                    <hr className={styles.divider} />

                    <section>
                        <h2>11. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. When we do, we will update the <strong>Last Updated</strong> date at the top of this page. For material changes, we will provide a more prominent notice (e.g., a banner on the website).</p>
                        <p>Continued use of walnetix.com after the updated policy is posted constitutes acceptance of the changes.</p>
                    </section>

                    <hr className={styles.divider} />

                    <section>
                        <h2>12. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or how we handle your personal data:</p>
                        <p>
                            <strong>Walnetix</strong><br />
                            Email: <strong><a href="mailto:contact@walnetix.com">contact@walnetix.com</a></strong><br />
                            Website: <a href="https://walnetix.com">walnetix.com</a>
                        </p>
                        <p><em>If you are located in the EU/UK and are unsatisfied with our response, you have the right to lodge a complaint with your local data protection authority.</em></p>
                    </section>

                </div>
            </div>
        </main>
    );
}
