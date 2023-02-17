'use strict';

//JavaScript is synchronous.
//Execute the code block in order after hoisting.
//hoisting: var, function declaration
console.log('1')
console.log('2')
console.log('3')

//Synchronous callback
function printImmediately(print){
    print();
}

printImmediately(()=>console.log('hello'))