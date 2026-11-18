import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example",
};

export default function ExamplePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Example</h1>
      <p className="mt-4 max-w-prose text-muted">
        The root frame wraps this page. Delete this route when you start a real
        site.
      </p>
    </div>
  );
}
