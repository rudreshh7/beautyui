"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { motion } from "framer-motion";
import { Sparkles, Code, Layers, Rocket, Settings } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="w-full bg-gradient-to-br from-blue-100 via-white to-indigo-100 text-gray-800">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative px-6">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-inner">
            <Sparkles className="w-4 h-4" />
            Designed for Devs & Designers
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight leading-tight">
            Design Engineering UI Library
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            A modern, scalable, component-first UI kit crafted with{" "}
            <span className="font-semibold text-blue-600">Tailwind CSS</span>,{" "}
            <span className="font-semibold text-indigo-500">Framer Motion</span>
            , and <span className="font-semibold text-sky-600">Next.js</span>.
          </p>

          <div className="mt-10">
            <Button
              size="lg"
              onClick={() => router.push("/docs/button")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Why Choose */}
      <section className="py-28 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Our UI Library?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built for speed, scale, and aesthetic precision. Empower your
            frontend workflow like never before.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {[
              {
                icon: (
                  <Rocket className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                ),
                title: "Lightning Fast",
                desc: "Zero bloat. Optimized components load fast and render faster.",
              },
              {
                icon: (
                  <Layers className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                ),
                title: "Composable",
                desc: "Each component is built with atomic design in mind — plug & play.",
              },
              {
                icon: (
                  <Code className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                ),
                title: "Dev First",
                desc: "Written for engineers. Type-safe. Extensible. Easy to override.",
              },
              {
                icon: (
                  <Settings className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                ),
                title: "Customizable",
                desc: "Theming, variants, and state transitions — all yours to command.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-200 text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-gradient-to-tr from-indigo-50 to-blue-50 text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Powered by modern web technologies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A UI system should be expressive, performant, and developer-first.
            Built with:
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-blue-700">
            <span className="bg-blue-100 px-4 py-2 rounded-full">
              React 18+
            </span>
            <span className="bg-blue-100 px-4 py-2 rounded-full">
              Next.js App Router
            </span>
            <span className="bg-blue-100 px-4 py-2 rounded-full">
              Tailwind CSS
            </span>
            <span className="bg-blue-100 px-4 py-2 rounded-full">
              Framer Motion
            </span>
            <span className="bg-blue-100 px-4 py-2 rounded-full">
              Lucide Icons
            </span>
            <span className="bg-blue-100 px-4 py-2 rounded-full">
              TypeScript Ready
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Ready to design with precision?
          </h2>
          <p className="text-lg text-gray-600">
            Explore the components, customize to your brand, and build beautiful
            products faster.
          </p>
          <Button
            size="lg"
            onClick={() => router.push("/docs/button")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300"
          >
            Browse Components
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-100 border-t border-gray-200">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-indigo-600">Rudr</span>. All rights
        reserved.
      </footer>
    </main>
  );
}
