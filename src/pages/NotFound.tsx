import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <Helmet>
        <title>404 - Page Not Found | Nadia Hossny</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 className="text-9xl font-display font-bold text-headline mb-4">404</h1>
      <p className="text-2xl text-bodytext mb-8">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="px-8 py-4 bg-headline text-white rounded-full font-medium hover:bg-headline/90 transition-colors shadow-sm">
        Return Home
      </Link>
    </div>
  );
}
