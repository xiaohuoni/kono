{
  "name": "{{{ name }}}",
  "version": "0.0.0",
  "description": "{{{ name }}}",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "pnpm tsc",
    "build:deps": "kono-scripts bundleDeps",
    "dev": "pnpm build --watch"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/xiaohuoni/kono"
  },
  "authors": [
    "xiaohuoni <xiaohuoni@gmail.com> (https://github.com/xiaohuoni)"
  ],
  "license": "MIT",
  "bugs": "https://github.com/xiaohuoni/kono/issues",
  "homepage": "https://github.com/xiaohuoni/kono/tree/master/packages/{{{ name }}}#readme",
  "publishConfig": {
    "access": "public"
  }
}
