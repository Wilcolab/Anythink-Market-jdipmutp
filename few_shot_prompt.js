/*
PROMPT:
Write a function that converts strings to camelCase.
Example: "hello world" -> "helloWorld"
Example: "user_name" -> "userName"
Example: "get-elements" -> "getElements"
*/

function toCamelCase(str) {
    return str
        .split(/[\s_-]+/) // Split by spaces, underscores, or hyphens
        .map((word, index) => {
            // Convert first word to lowercase, capitalize first letter of subsequent words
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber