import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { pageMetadata } from '../lib/pageMetadata';

export default function PageMeta({ title, description, noIndex = false }: {
  title: string;
  description: string;
  noIndex?: boolean;
}) {
  const { pathname } = useLocation();
  const metadata = pageMetadata(pathname, title, description);
  return <Helmet>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <link rel="canonical" href={metadata.canonical} />
    <meta property="og:url" content={metadata.canonical} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    {noIndex && <meta name="robots" content="noindex, nofollow" />}
  </Helmet>;
}
