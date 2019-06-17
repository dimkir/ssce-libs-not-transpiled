'use strict';
const autoBind = require('auto-bind');
module.exports = class Greeter{
    constructor(name){
        this.name = name;
        autoBind(this);
    }

    greet(){
        const makeGreeting = (name)=>{
            return `Hello, ${name}!`;
        };
        let greeting = makeGreeting(this.name);
        console.log(greeting);
        return;
    }
}