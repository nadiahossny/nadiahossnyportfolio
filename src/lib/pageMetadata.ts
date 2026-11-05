export const portfolioOrigin = 'https://nadiahossny.vercel.app';

export function pageMetadata(pathname: string, title: string, description: string) {
  const cleanPath = pathname.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  const canonicalPath = cleanPath === '/graphic-design' ? '/visuals' : cleanPath === '/work-with-me' ? '/services' : cleanPath;
  return { title, description, canonical: `${portfolioOrigin}${canonicalPath}` };
}
