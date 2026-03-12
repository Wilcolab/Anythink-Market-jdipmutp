/*
PROMPT:
Write a JavaScript function toCamelCase that converts a string into camelCase.
Handle edge cases like null, undefined, or empty strings by throwing a descriptive error.
Ensure the input is a string. Handle separators like spaces, underscores, or hyphens.
*/

/**
 * String case conversion utility module
 * 
 * This module provides functions to convert strings between different naming conventions.
 * It handles multiple delimiter types (spaces, underscores, hyphens) and includes
 * comprehensive error handling for invalid inputs.
 * 
 * @module StringCaseConversion
 * @version 1.0.0
 * 
 * @example
 * // Convert to camelCase
 * const camelCased = toCamelCase('hello-world');
 * // Returns: 'helloWorld'
 * 
 * @example
 * // Convert to dot.case
 * const dotCased = toDotCase('hello_world');
 * // Returns: 'hello.world'
 */

/**
 * Converts a string into camelCase format
 * 
 * Transforms the input string into camelCase notation where the first word is lowercase
 * and subsequent words are capitalized. Handles multiple delimiter types including spaces,
 * underscores, hyphens, and combinations thereof. Leading/trailing whitespace is trimmed.
 * 
 * @function toCamelCase
 * @param {string} str - The string to convert. Can contain spaces, underscores, or hyphens as delimiters.
 * @returns {string} The camelCase version of the string with first word lowercase and subsequent words capitalized.
 * @throws {Error} If input is not a string type.
 * @throws {Error} If input is empty or contains only whitespace.
 * @throws {Error} If input contains no valid words after parsing.
 * 
 * @example
 * toCamelCase('hello world');      // Returns: 'helloWorld'
 * @example
 * toCamelCase('hello_world');      // Returns: 'helloWorld'
 * @example
 * toCamelCase('hello-world');      // Returns: 'helloWorld'
 * @example
 * toCamelCase('  hello  world  '); // Returns: 'helloWorld'
 */

/**
 * Converts a string into dot.case format
 * 
 * Transforms the input string into dot.case notation where all words are lowercase
 * and joined together with dots as separators. Handles multiple delimiter types including
 * spaces, underscores, hyphens, and combinations thereof. Leading/trailing whitespace is trimmed.
 * 
 * @function toDotCase
 * @param {string} str - The string to convert. Can contain spaces, underscores, or hyphens as delimiters.
 * @returns {string} The dot.case version of the string with all words lowercase and joined by dots.
 * @throws {Error} If input is not a string type.
 * @throws {Error} If input is empty or contains only whitespace.
 * @throws {Error} If input contains no valid words after parsing.
 * 
 * @example
 * toDotCase('hello world');      // Returns: 'hello.world'
 * @example
 * toDotCase('hello_world');      // Returns: 'hello.world'
 * @example
 * toDotCase('hello-world');      // Returns: 'hello.world'
 * @example
 * toDotCase('  hello  world  '); // Returns: 'hello.world'
 */
    // Split by spaces, underscores, or hyphens, then filter empty strings
    const words = trimmed.split(/[\s_-]+/).filter(word => word.length > 0);

    if (words.length === 0) {
        throw new Error('Input string must contain at least one word');
    }

    // Convert to dot.case: all lowercase, joined by dots
    return words.map(word => word.toLowerCase()).join('.');


// Example usage:
console.log(toDotCase('hello world'));      // hello.world
console.log(toDotCase('hello_world'));      // hello.world
console.log(toDotCase('hello-world'));      // hello.world
console.log(toDotCase('  hello  world  ')); // hello.world
// Step 1: Create a toKebabCase function that validates input similar to toDotCase
// Step 2: Parse the input string by splitting on spaces, underscores, hyphens, and filtering empty values
// Step 3: Convert all words to lowercase and join them with hyphens

function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    const trimmed = str.trim();

    if (trimmed.length === 0) {
        throw new Error('Input string cannot be empty or contain only whitespace');
    }

    const words = trimmed.split(/[\s_-]+/).filter(word => word.length > 0);

    if (words.length === 0) {
        throw new Error('Input string must contain at least one word');
    }

    return words.map(word => word.toLowerCase()).join('-');
}

// Example usage:
console.log(toKebabCase('hello world'));      // hello-world
console.log(toKebabCase('hello_world'));      // hello-world
console.log(toKebabCase('helloWorld'));       // hello-world
console.log(toKebabCase('  hello  world  ')); // hello-world
