import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="section-label">404</span>
      <h1 className="font-display text-4xl text-ivory sm:text-5xl">This Frame Doesn&apos;t Exist</h1>
      <p className="mt-4 max-w-sm text-sm text-ash">
        The page you&apos;re looking for may have been moved, renamed, or never existed.
      </p>
      <Link href="/" className="btn-gold mt-8">
        Back to Home
      </Link>
    </div>
  );
}
