/**
 * StructuredData Component
 * Injects Schema.org JSON-LD structured data into pages
 * This helps search engines and AI models understand page content
 */
export default function StructuredData({ data }: { data: object | object[] }) {
    // Handle both single schema and array of schemas
    const schemaArray = Array.isArray(data) ? data : [data];

    return (
        <>
            {schemaArray.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema, null, 0), // Minified for production
                    }}
                />
            ))}
        </>
    );
}
