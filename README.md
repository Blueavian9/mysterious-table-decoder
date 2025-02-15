# The Mysterious Table Decoder Challenge

## Background
You've intercepted a mysterious `data.json` file that appears to contain an encoded message. The file contains a table of characters and a sequence of indices. Your mission is to decode the hidden message.

## The Challenge
Write a function that takes the contents of `data.json` as input and returns a base64-encoded string representing the decoded message.

### Input Format
The `data.json` file contains an object with two properties:
```json
{
  "table": "string",
  "indices": [numbers]
}
```

### Requirements
1. Create a function that decodes the message using the table and indices
2. Convert the decoded message to base64
3. Return the base64 string

### Implementation Requirements
Your solution must work in two ways:

1. As a module export:
```javascript
const decode = require('./solution.js');
const result = decode(jsonData); // Takes JSON object directly
```

2. As a standalone script:
```bash
node solution.js data1.json  # Takes filename as command line argument
```

The core decode function should accept a JSON object containing the table and indices, while the standalone mode should handle reading the JSON file and passing it to the decode function.

A template for the solution is provided in `solution.js`, including hints for implementing the command-line functionality.

### Constraints
- The table will contain ASCII characters
- The indices array will have at least one element
- The first index is always ignored during decoding
- All indices will be valid for the given table

### Example
Given the following `data.json`:
```json
{
  "table": "helo\0",
  "indices": [0, 1, 2, 3, 3, 4]
}
```

Your function should decode the message using the table and indices according to the pattern, then return the result in base64 format.

### Sample Data Files
To help you develop and test your solution, several sample data files are provided:
- `data1.json`: Basic example with repeated indices
- `data2.json`: Alternating indices pattern with uppercase letters
- `data3.json`: Longer table with numeric characters
- `data4.json`: Example with special characters

Feel free to use these files to test your solution before running the official tests.

### Testing
Place your solution in a file called `solution.js` in this directory. You can test it in two ways:

1. Run the official tests:
```bash
node test.js
```

2. Test with sample data files:
```bash
node solution.js data1.json
node solution.js data2.json
# etc...
```

Good luck, decoder! 🕵️‍♂️

*Note: The real challenge lies in discovering how the table and indices work together. Study the example carefully...* 