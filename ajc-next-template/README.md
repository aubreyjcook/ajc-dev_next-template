# ajc-next-template

A neutral Next.js frame: header, main, and footer, with no nav and no product pages. Use it as the start of a site or an app.

The app lives in this folder. From here:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Site name

`lib/site.ts` holds `name` and `description`. The root layout uses them for metadata. The header and footer render `name` so those regions stay visible. Change it there.

Nested routes can set their own title. The template is `%s · {name}`, so a page titled `Example` becomes `Example · Site`.

## Add a route

Create `app/<segment>/page.tsx`. The root layout wraps it in the frame. `/example` is a placeholder that shows this. Delete `app/example` when you start a real site. Nothing in the header links to it.

## Header and footer

`components/layout/site-header.tsx` and `components/layout/site-footer.tsx` are empty aside from the site name. Add links there when you have pages. `components/layout/app-frame.tsx` stacks the header, `<main>`, and footer.

## Skip the frame

A route group with its own layout does not have to render `AppFrame`. For a section that should stand alone, add something like `app/(standalone)/layout.tsx` and omit the frame in that layout. Routes outside that group keep the root frame.
