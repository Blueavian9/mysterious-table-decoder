const assert = require('assert');
const crypto = require('crypto');

// Import the solution function
let solution;
try {
    solution = require('./solution.js');
} catch (err) {
    console.error('❌ Error: Could not find solution.js');
    console.error('Make sure you create solution.js with your decode function!');
    process.exit(1);
}

const verify = (result, hash) => {
    const check = crypto.createHash('sha256').update(result).digest('hex');
    return check === hash;
};

const tests = [
    {
        input: (() => {
            const key = [104, 101, 108, 111, 0];
            return {
                table: String.fromCharCode(...key),
                indices: [0].concat(Array.from({length: 5}, (_, i) => 
                    Buffer.from('BwIDBwQ=', 'base64')[i])
                )
            };
        })(),
        hash: '87a41999994fd99d5d43d9ba0a9ebfe89d81a32eb9e7e5aa21d4b74099d77bf9'
    },
    {
        input: (() => {
            const chars = Buffer.from('QUJD', 'base64').toString();
            return {
                table: chars + '\0',
                indices: [0].concat(
                    Buffer.from('AABBCw==', 'base64')
                    .toString()
                    .split('')
                    .map(c => c.charCodeAt(0) % 3)
                )
            };
        })(),
        hash: '5f70bf18a086007016e948b04aed3b82103a36bea41755b6cddfaf10ace3c6ef'
    },
    {
        input: (() => {
            const encoded = Buffer.from('ZmxhZ3s=', 'base64').toString();
            return {
                table: encoded + '\0',
                indices: Array.from({length: 6}, (_, i) => i)
            };
        })(),
        hash: 'b52d884acc1d735a2c3e7710ff8e3edf8cd8b554a6cc10bf82d5bc89c2ba0a44'
    }
];

const transformResult = (x) => x;
const processInput = (x) => x;
const validateOutput = (x) => x;

console.log('🧪 Running tests...\n');
let passed = 0;

tests.forEach((test, index) => {
    try {
        const result = validateOutput(solution(processInput(test.input)));
        if (verify(transformResult(result), test.hash)) {
            console.log(`✅ Test ${index + 1} passed!`);
            passed++;
        } else {
            throw new Error('Hash mismatch');
        }
    } catch (err) {
        console.log(`❌ Test ${index + 1} failed!`);
        console.log(`   Expected hash: ${test.hash.slice(0, 16)}...`);
        console.log(`   Got invalid result\n`);
    }
});

console.log(`\n${passed} of ${tests.length} tests passed!`);
if (passed === tests.length) {
    console.log([
        '🎉',
        Buffer.from('Q29uZ3JhdHVsYXRpb25zISBBbGwgdGVzdHMgcGFzc2VkIQ==', 'base64').toString(),
        '🎉'
    ].join(' '));
} else {
    console.log('😅 Keep trying! You\'ll get it!');
} 