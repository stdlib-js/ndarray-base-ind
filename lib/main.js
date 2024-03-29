/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var clampIndex = require( '@stdlib/ndarray-base-clamp-index' );
var wrapIndex = require( '@stdlib/ndarray-base-wrap-index' );
var normalizeIndex = require( '@stdlib/ndarray-base-normalize-index' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Returns an index given an index mode.
*
* @param {integer} idx - index
* @param {NonNegativeInteger} max - maximum index
* @param {string} mode - specifies how to handle an index outside the interval `[0,max]`
* @throws {RangeError} index out-of-bounds
* @returns {integer} index
*
* @example
* var idx = ind( 2, 9, 'clamp' );
* // returns 2
*
* idx = ind( 10, 9, 'clamp' );
* // returns 9
*
* idx = ind( -1, 9, 'clamp' );
* // returns 0
*
* @example
* var idx = ind( 2, 9, 'wrap' );
* // returns 2
*
* idx = ind( 10, 9, 'wrap' );
* // returns 0
*
* idx = ind( -1, 9, 'wrap' );
* // returns 9
*
* @example
* var idx = ind( 2, 9, 'throw' );
* // returns 2
*
* idx = ind( 10, 9, 'throw' );
* // throws <RangeError>
*
* idx = ind( -1, 9, 'throw' );
* // throws <RangeError>
*
* @example
* var idx = ind( 1, 10, 'normalize' );
* // returns 1
*
* idx = ind( -4, 10, 'normalize' );
* // returns 7
*
* idx = ind( -100, 10, 'normalize' );
* // throws <RangeError>
*/
function ind( idx, max, mode ) {
	var index;
	if ( mode === 'clamp' ) {
		return clampIndex( idx, max );
	}
	if ( mode === 'wrap' ) {
		return wrapIndex( idx, max );
	}
	index = idx;
	if ( mode === 'normalize' ) {
		index = normalizeIndex( index, max );
	}
	if ( index < 0 || index > max ) {
		throw new RangeError( format( 'invalid argument. Index must resolve to a value on the interval: [0, %d]. Value: `%d`.', max, idx ) );
	}
	return index;
}


// EXPORTS //

module.exports = ind;
