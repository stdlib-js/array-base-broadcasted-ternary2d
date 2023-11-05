<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# bternary2d

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a ternary callback to elements in three [broadcasted][@stdlib/array/base/broadcast-array] nested input arrays and assign results to elements in a two-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import bternary2d from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcasted-ternary2d@v0.1.0-deno/mod.js';
```

#### bternary2d( arrays, shapes, fcn )

Applies a ternary callback to elements in three [broadcasted][@stdlib/array/base/broadcast-array] nested input arrays and assigns results to elements in a two-dimensional nested output array.

```javascript
import zeros2d from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros2d@deno/mod.js';

function add( x, y, z ) {
    return x + y + z;
}

var x = [ [ 1.0, 2.0 ] ];
var y = [ [ 3.0 ], [ 4.0 ] ];
var z = [ [ 5.0 ] ];
var out = zeros2d( [ 2, 2 ] );

var shapes = [
    [ 1, 2 ],
    [ 2, 1 ],
    [ 1, 1 ],
    [ 2, 2 ]
];

bternary2d( [ x, y, z, out ], shapes, add );
// out => [ [ 9.0, 10.0 ], [ 10.0, 11.0 ] ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing three input nested arrays and one output nested array.
-   **shapes**: array shapes.
-   **fcn**: ternary function to apply.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input and output array shapes must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import filled2dBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled2d-by@deno/mod.js';
import zeros2d from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros2d@deno/mod.js';
import bternary2d from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcasted-ternary2d@v0.1.0-deno/mod.js';

function add( x, y, z ) {
    return x + y + z;
}

var shapes = [
    [ 1, 3 ],
    [ 3, 1 ],
    [ 1, 1 ],
    [ 3, 3 ]
];

var x = filled2dBy( shapes[ 0 ], discreteUniform( -100, 100 ) );
console.log( x );

var y = filled2dBy( shapes[ 1 ], discreteUniform( -100, 100 ) );
console.log( y );

var z = filled2dBy( shapes[ 2 ], discreteUniform( -100, 100 ) );
console.log( z );

var out = zeros2d( shapes[ 3 ] );
console.log( out );

bternary2d( [ x, y, z, out ], shapes, add );
console.log( out );
```

</section>

<!-- /.examples -->

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-broadcasted-ternary2d.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-broadcasted-ternary2d

[test-image]: https://github.com/stdlib-js/array-base-broadcasted-ternary2d/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/array-base-broadcasted-ternary2d/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-broadcasted-ternary2d/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-broadcasted-ternary2d?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-broadcasted-ternary2d.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-broadcasted-ternary2d/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-broadcasted-ternary2d/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-broadcasted-ternary2d/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-broadcasted-ternary2d/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-broadcasted-ternary2d/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-broadcasted-ternary2d/main/LICENSE

[@stdlib/array/base/broadcast-array]: https://github.com/stdlib-js/array-base-broadcast-array/tree/deno

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/deno

</section>

<!-- /.links -->
