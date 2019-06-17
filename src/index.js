'use strict';

const main = ()=>{

    const Greeter = require('./greeter');
    let greeter = new Greeter('Bob');
    
    greeter.greet();

};

main();
