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
```

The function supports the following `modes`:

-   `throw`: specifies that the function should throw an error when an index is outside the interval `[0,max]`.
-   `wrap`: specifies that the function should wrap around an index using modulo arithmetic.
-   `clamp`: specifies that the function should set an index less than `0` to `0` (minimum index) and set an index greater than `max` to `max`.

```javascript
var idx = ind( 2, 9, 'wrap' );
// returns 2

idx = ind( 10, 9, 'wrap' );
// returns 0

idx = ind( -1, 9, 'wrap' );
// returns 9

idx = ind( 2, 9, 'clamp' );
// returns 2

idx = ind( 10, 9, 'clamp' );
// returns 9

idx = ind( -1, 9, 'clamp' );
// returns 0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-ind.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-ind

[test-image]: https://github.com/stdlib-js/ndarray-base-ind/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-ind/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-ind/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-ind?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-ind.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-ind/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-ind/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-ind/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-ind/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-ind/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-ind/main/LICENSE

</section>

<!-- /.links -->
