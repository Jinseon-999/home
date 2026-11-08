







        




let a = 10;
let b = 20;
let c = "30";
a += 5;                                     // a = 15
b--;                                        // b = 20 --
a = ++b + a--;                              // a = 20 + 15--
console.log(a);                             //
console.log(b);                             //
console.log(c);                             //
console.log(a + b + c);                     //
console.log(a + Number(c) + b);             //
console.log(a > b);                         //
console.log(a == "35");                     //
console.log(a === "35");                    //
let result1 = a > b && Number(c) > 20;      //
let result2 = a < b || c == 30;             //
console.log(result1);                       //
console.log(result2);                       //
let result3 = result1 ? a + b : a - b;      //
console.log(result3); 