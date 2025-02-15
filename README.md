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

Your function should:
1. Decode the message using the indices (ignoring index 0)
2. Convert the result to base64
3. Return the base64 string

### Testing
Place your solution in a file called `solution.js` in this directory. Run the tests using:
```bash
node test.js
```

Good luck, decoder! 🕵️‍♂️

*Note: The real challenge lies in discovering how the table and indices work together. Study the example carefully...* 