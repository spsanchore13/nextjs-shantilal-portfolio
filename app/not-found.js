import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-6">
          Could not find the requested resource
        </p>
        <Link
          href="/"
          className="text-primary hover:text-primary/80 transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
