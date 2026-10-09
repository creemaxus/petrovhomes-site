# petrovhomes-site

The website for Petrov Homes, the personal brand of real estate agent Max
Petrov, at https://petrovhomes.com. It's plain HTML, CSS, and a little
JavaScript, served by Cloudflare Workers Static Assets from `public/`.

## How it's organized

```
src/site.config.mjs        Business details (brokerage, license, contact). Start here.
src/content/               Community descriptions and image metadata
src/pages/*.mjs            Page copy and markup, one file per page
src/layout.mjs             Shared <head>, header, navigation, and footer
scripts/build.mjs          Writes the HTML pages, sitemap.xml, and robots.txt into public/
public/                    Everything that gets deployed
public/assets/css/site.css Design tokens (colors, type, spacing) are at the top
public/assets/js/site.js   Mobile menu, scroll reveals, contact form
```

The HTML in `public/` is generated, so don't edit it by hand. The build is a
zero-dependency Node script. Cloudflare deploys `public/` as committed, so it
doesn't need a build command.

## Local preview

```sh
npm install
npm run dev        # builds, then serves http://localhost:8787
```

`npm run check` confirms that `public/` matches `src/` and runs
`wrangler deploy --dry-run`. Run it before committing.

## Deploying

Pushing to `main` deploys to production through the existing Cloudflare and
GitHub integration. Always run `npm run build` and commit the regenerated
`public/` files together with your `src/` changes.

## Editing content

- **Business details:** edit `src/site.config.mjs`. Values left as `null` are
  hidden from visitors. Brokerage and license appear in the footer, and email
  and phone appear on the contact page and in the footer once set.
- **Page copy:** edit the matching file in `src/pages/`.
- **Communities:** edit `src/content/communities.mjs`. Keep descriptions neutral:
  location, housing character, and amenities only.
- **Navigation and footer:** edit `src/layout.mjs`.

Then run `npm run build`.

## Replacing images

1. Export each image at the widths listed for it in `src/content/images.mjs`,
   as WebP, named `name-WIDTH.webp`, into `public/assets/images/`.
2. Update that entry's `file`, `widths`, `ratio`, `alt`, and `credit`. For your
   own photos, remove the `credit` call where the image is used.
3. Update `IMAGE_CREDITS.md`, then run `npm run build`.

Only use photos you have the rights to. Don't use listing photos from MLS,
Zillow, or Redfin, and don't present stock photos as Max's listings.

## Connecting the contact form

The contact form stays hidden until an endpoint is configured. Visitors see a
short "Contact details coming soon" message instead.

1. Set up an endpoint that accepts a JSON `POST` and returns a 2xx status on
   success. A Formspree form URL works, or you can add a Worker route later.
   The request body looks like this:
   `{ name, email, phone, inquiry_type, message }`.
2. Put its URL in `contact.formEndpoint` in `src/site.config.mjs` and rebuild.
3. Submit a real test message before publishing.

To preview the form locally without changing the config, run
`CONTACT_FORM_ENDPOINT=/api/test npm run build`. Submissions will show the error
state. Run `npm run build` again before committing.
