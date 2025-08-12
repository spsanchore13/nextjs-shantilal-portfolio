"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Something went wrong!
        </h2>
        <p className="text-muted-foreground mb-6">
          An error occurred while loading this page.
        </p>
        <button
          onClick={() => reset()}
          className="text-primary hover:text-primary/80 transition-colors duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
