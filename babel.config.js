// throw new Error('**********');

// const babel = require('@babel/core');

module.exports = {
    presets: [
        ['@babel/preset-env', {
            debug: true, 
            // modules: 'cjs', // I added cjs because of complaning on non existing exports object (debug/browser.js was complaining)
            // useBuiltIns: 'entry',
            // useBuiltIns: 'usage', // still serialize-error doesn't get transpiled correctly
            targets: '>1%, ie 11'.split(','),
        }]
    ]
}