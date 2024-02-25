<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ind

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an index given an index mode.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import ind from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/ndarray-base-ind/tags). For example,

```javascript
import ind from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind@v0.2.1-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind@esm/index.mjs';
```

#### ind( idx, max, mode )

Returns an index given an index `mode`.

<!-- run throws: true -->

```javascript
var idx = ind( 2, 9, 'throw' );
// returns 2

idx = ind( -1, 9, 'throw' );
// throws <RangeError>

idx = ind( 10, 9, 'throw' );
// throws <RangeError>

// Wrapping indices around using modulo arithmetic:
idx = ind( 2, 9, 'wrap' );
// returns 2

idx = ind( 10, 9, 'wrap' );
// returns 0

idx = ind( -1, 9, 'wrap' );
// returns 9

// Clamping indices to first and last indices:
idx = ind( 2, 9, 'clamp' );
// returns 2

idx = ind( 10, 9, 'clamp' );
// returns 9

idx = ind( -1, 9, 'clamp' );
// returns 0

// Normalizing negative indices:
idx = ind( 2, 9, 'normalize' );
// returns 2

idx = ind( -4, 9, 'normalize' );
// returns 6
```

#### ind.factory( mode )

Returns a function for returning an index according to a provided index `mode`.

```javascript
var fcn = ind.factory( 'clamp' );

var idx = fcn( 2, 9 );
// returns 2

idx = fcn( 10, 9 );
// returns 9

idx = fcn( -1, 9 );
// returns 0
```

The function returns a function accepts the following arguments:

-   **index**: input index.
-   **max**: maximum index value.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Both functions support the following modes:

    -   **throw**: specifies that the function should throw an error when an index is outside the interval `[0, max]`.
    -   **normalize**: specifies that the function should normalize negative indices and throw an error when an index is outside the interval `[-max-1, max]`.
    -   **wrap**: specifies that the function should wrap around an index using modulo arithmetic.
    -   **clamp**: specifies that the function should set an index less than `0` to `0` (minimum index) and set an index greater than `max` to `max`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import ind from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind@esm/index.mjs';

var modes;
var mode;
var idx;
var out;
var i;

modes = [ 'clamp', 'wrap' ];

for ( i = 0; i < 100; i++ ) {
    idx = discreteUniform( -20, 20 );
    mode = modes[ discreteUniform( 0, modes.length-1 ) ];
    out = ind( idx, 9, mode );
    console.log( '%d => %s(%d,%d) => %d', idx, mode, 0, 9, out );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-ind.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-ind

[test-image]: https://github.com/stdlib-js/ndarray-base-ind/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/ndarray-base-ind/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-ind/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-ind?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-ind.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-ind/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-ind/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-ind/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-ind/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-ind/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-ind/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-ind/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-ind/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-ind/main/LICENSE

</section>

<!-- /.links -->
