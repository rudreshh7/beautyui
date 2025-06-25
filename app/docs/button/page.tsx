"use client";

import PreviewLayout from "@/app/components/PreviewLayout";
import { Button } from "@/components/ui";

export default function ButtonDocs() {
  return (
    <PreviewLayout>
      <h1 className="text-2xl font-bold mb-6">Button</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold mb-2">Preview</h2>
          <Button variant="default">Default</Button>{" "}
          <Button variant="outline">Outline</Button>{" "}
          <Button variant="destructive">Destructive</Button>
        </div>

        <div>
          <h2 className="font-semibold mt-6 mb-2">Code</h2>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
            {`<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>`}
          </pre>
        </div>
      </div>
    </PreviewLayout>
  );
}
