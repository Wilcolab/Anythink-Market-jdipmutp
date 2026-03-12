/*
PROMPT:
Act as an expert JavaScript developer and follow these steps sequentially:
1. Validation: Create a function toKebabCase(str) that checks if input is a valid string.
2. Transformation: Convert to lowercase, replace spaces, underscores, and camelCase transitions with hyphens.
3. Cleanup: Use regex to remove duplicate hyphens and trim them from start/end.
4. Export: Export using ES6 and provide console.log examples.
*/

/**
 * Converts a string to kebab-case format
 * @param {string} str - The input string to convert
 * @returns {string} - The kebab-case formatted string
 * @throws {Error} - If input is not a valid string
 */
function toKebabCase(str) {
    // Validation
    if (typeof str !== 'string' || str === null) {
        throw new Error('Input must be a valid string');
    }

    // Transformation
    let result = str
        .toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with hyphen
        .replace(/_+/g, '-')             // Replace underscores with hyphen
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Handle camelCase transitions
        .toLowerCase();

    // Cleanup
    result = result
        .replace(/-+/g, '-')             // Remove duplicate hyphens
        .replace(/^-+|-+$/g, '');        // Trim hyphens from start and end

    return result;
}

// Export using ES6 module syntax
export default toKebabCase;

// Examples
console.log(toKebabCase('helloWorld'));           // "hello-world"
console.log(toKebabCase('Hello World_Test'));     // "hello-world-test"
console.log(toKebabCase('---leading__trailing---')); // "leading-trailing" (edge case)