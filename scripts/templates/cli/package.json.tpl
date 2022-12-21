{
  "name": "{{{ name }}}",
  "version": "0.0.2",
  "description": "",
  "keywords": [],
  "author": "",
  "main": "dist/index.js",
  "types": "index.d.ts",
  "bin": {
    "{{{ name }}}": "bin/konos.js"
  },
  "files": [
    "dist",
    "bin",
    "templates",
    "index.d.ts"
  ],
  "scripts": {
    "build": "father build",
    "dev": "father dev",
    "format": "prettier --cache --write .",
    "{{{ name }}}": "node bin/konos.js"
  },
  "dependencies": {
    "@umijs/utils": "^4.0.38",
    "konos": "^0.0.9"
  },
  "devDependencies": {
    "father": "^4.1.0",
    "prettier": "^2.7.1",
    "prettier-plugin-organize-imports": "^2.3.4",
    "prettier-plugin-packagejson": "^2.2.18",
    "tsx": "^3.9.0"
  }
}
