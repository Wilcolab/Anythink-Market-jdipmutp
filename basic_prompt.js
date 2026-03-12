/*
PROMPT:
Write a basic JavaScript function to convert a string to camelCase. 
No special error handling required for now.
*/

/**
 * Converts a string to camelCase format.
 * 
 * The function takes a string with words separated by spaces, hyphens, or underscores
 * and converts it to camelCase where the first word is lowercase and subsequent words
 * have their first letter capitalized with no separators.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase version of the input string
 * 
 * @example
 * toCamelCase("hello world") // returns "helloWorld"
 * toCamelCase("hello-world-example") // returns "helloWorldExample"
 * toCamelCase("hello_world_example") // returns "helloWorldExample"
 */
function toCamelCase(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
            if (+match === 0) return "";
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
}