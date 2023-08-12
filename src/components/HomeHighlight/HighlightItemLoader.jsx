import ContentLoader from 'react-content-loader'

export const HighlightItemLoader = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="3" y="33" rx="0" ry="0" width="107" height="14" />
        <rect x="1" y="58" rx="0" ry="0" width="171" height="26" />
        <rect x="5" y="102" rx="0" ry="0" width="78" height="30" />
        <circle cx="253" cy="104" r="53" />
    </ContentLoader>
)
