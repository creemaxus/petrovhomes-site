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
  hidden from visitors. Brokerage and license appear in the footer. Email,
  phone, and `social` profiles appear as links on the contact page and in the
  footer once set.
- **Page copy:** edit the matching file in `src/pages/`.
- **Communities:** edit `src/content/communities.mjs`. Keep descriptions neutral:
  location, housing character, and amenities only.
- **Navigation and footer:** edit `src/layout.mjs`.

Then run `npm run build`.

## Replacing images

Keep originals in `references/`, which is git-ignored and never deployed.

1. Export each image at the widths listed for it in `src/content/images.mjs`
   as both AVIF and WebP, named `name-WIDTH.avif` and `name-WIDTH.webp`, into
   `public/assets/images/`. Apply the EXIF orientation and strip all metadata
   (GPS included). Never copy originals into `public/`.
2. Update the entry's `file`, `widths`, `ratio`, and `alt`. Set `position`
   (and optionally `positionMobile`) so faces stay in frame when cropped.
3. Update `IMAGE_CREDITS.md`, then run `npm run build`.

Only use photos you have the rights to, and that don't require visible credit,
because the design shows none. Don't use listing photos from MLS, Zillow, or
Redfin, and don't present portrait backgrounds as Max's listings.

## Connecting the contact form

Phone and email are live on the site. The contact form stays hidden until a
working delivery endpoint is configured. Do not show a form that cannot send.

To enable the form later:

1. Set up an endpoint that accepts a JSON `POST` and returns a 2xx status only
   after the delivery provider accepts the message. A Worker route such as
   `/api/contact` (Cloudflare Email Routing `send_email` binding or a verified
   transactional sender) works. The request body looks like this:
   `{ name, email, phone, inquiry_type, community, message }`.
2. Keep the recipient fixed server-side (`max@petrovhomes.com`). Put the
   visitor’s address in Reply-To; do not send as the visitor.
3. Put the endpoint URL in `contact.formEndpoint` in `src/site.config.mjs`
   or set `CONTACT_FORM_ENDPOINT`, then rebuild.
4. Submit a clearly labelled internal test before publishing.

To preview the form locally without changing the config, run
`CONTACT_FORM_ENDPOINT=/api/test npm run build`. Submissions will show the error
state. Run `npm run build` again before committing.
