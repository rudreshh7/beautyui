import { Sidebar } from "./Sidebar";

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full p-10 min-h-screen bg-gray-50">
        {children}
      </main>
    </div>
  );
}
