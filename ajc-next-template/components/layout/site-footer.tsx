import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-6">
        <span className="text-sm text-muted">{site.name}</span>
      </div>
    </footer>
  );
}
