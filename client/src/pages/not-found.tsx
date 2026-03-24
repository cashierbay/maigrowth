import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="text-center max-w-2xl">
        <h1 className="font-bold text-8xl text-orange-500 mb-4">
          404
        </h1>
        <h2 className="font-bold text-4xl text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-bold text-xl text-gray-900 mb-4">
            Looking for something specific?
          </h3>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/services" className="text-orange-500 hover:underline">
              Services
            </Link>
            <Link href="/about" className="text-orange-500 hover:underline">
              About
            </Link>
            <Link href="/blog" className="text-orange-500 hover:underline">
              Blog
            </Link>
            <Link href="/contact" className="text-orange-500 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
