"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-700">
          Design Engineering UI Library
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          A scalable, component-first UI kit built with Tailwind, Motion, and
          Next.js
        </p>
        <Button
          size="lg"
          onClick={() => router.push("/docs/button")}
          className="mt-4"
        >
          Get Started
        </Button>
      </div>
    </main>
  );
}
