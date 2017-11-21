# Introduction

This template is used for prototyping ui relates issues in a variety of technologies such as:

* [**Pug**](https://pugjs.org), formally Jade, an HTML processor.
* [**Stylus**](http://stylus-lang.com), a CSS processor.
* [**Babel**](https://babeljs.io/), a [ES2015](https://babeljs.io/learn-es2015/) and [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) processor.
* [**Markdown**](https://daringfireball.net/projects/markdown/syntax), a markup language.

It has a simple node server to translate:
* Pug views into HTML
* Stylus templates into CSS
* CoffeeScript files into JavaScript

# Usage

Execute the server:

```
node server.js
```
then load `localhost:8080` in the browser.

Make a change to any of the file in `views`,  `stylus`, `coffee`, or `public` directory and reload the page.

Note that the `stylus` directory compiles into `public/css` and `coffee` compiles into `public/js`.

