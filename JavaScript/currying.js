// function sum(a){
//     return function(b){
//         if(b !== undefined){
//             return sum(a+b);
//         }else{
//             return a;
//         }
//     }
// }

// es6 syntax

const sum = a => b => b !== undefined ? sum(a+b) : a;

console.log(sum(1)(2)(7)(4)())
