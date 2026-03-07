# claytongentry.com

Static personal site built with plain HTML and CSS.

## Local

Run `npm start` to serve [`public/index.html`](/Users/claytongentry/src/projects/clayton/public/index.html) at `http://localhost:3000`.

This uses `python3`, so the direct equivalent is:

```sh
python3 -m http.server 3000 --directory public
```

## Build

Run `npm run build` to copy the contents of `public/` into `build/` and add `CNAME` for deployment.
