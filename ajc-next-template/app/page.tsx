import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{site.name}</h1>
    </div>
  );
}
