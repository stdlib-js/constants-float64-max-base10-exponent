/** @license Apache-2.0 */

'use strict';

/**
* The maximum base 10 exponent for a double-precision floating-point number.
*
* @module @stdlib/constants-float64-max-base10-exponent
* @type {integer32}
*
* @example
* var FLOAT64_MAX_BASE10_EXPONENT = require( '@stdlib/constants-float64-max-base10-exponent' );
* // returns 308
*/


// MAIN //

/**
* The maximum base 10 exponent for a double-precision floating-point number.
*
* @constant
* @type {integer32}
* @default 308
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT64_MAX_BASE10_EXPONENT = 308|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT64_MAX_BASE10_EXPONENT;
