"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const components = [
  { name: "Button", href: "/docs/button" },
  { name: "Card", href: "/docs/card" },
  { name: "Input", href: "/docs/input" },
  // Add more as you create
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen border-r bg-white p-4 fixed top-0 left-0">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <nav className="space-y-2">
        {components.map((comp) => (
          <Link
            key={comp.name}
            href={comp.href}
            className={cn(
              "block px-3 py-2 rounded hover:bg-blue-100 transition",
              pathname === comp.href && "bg-blue-200 text-blue-800 font-medium"
            )}
          >
            {comp.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
