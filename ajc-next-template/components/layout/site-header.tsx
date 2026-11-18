import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-6">
        <span className="text-sm font-medium">{site.name}</span>
      </div>
    </header>
  );
}
