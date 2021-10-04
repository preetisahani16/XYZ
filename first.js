// // let twoD=[];

// // for(let i=0;i<3;i++){
// //   let oneD=[];
// //   for(let j=0;j<3;j++){
// //       if(i==j||i+j==3-1){
// //           oneD[j]="1";
// //       }else{
// //           oneD[j]=" ";
// //       }
// //   }  
// //   twoD[i]=oneD;

// // }
// // for(let k=0;k<3;k++){
// //     console.log(twoD[k])
// // }
// function fac(n){
//     let f=1;
//     for(let i=1;i<=n;i++){
//         f*=i;
//     }
//     return f
// }

//5----
// let arr = [1, 2, 3];
// (function () {
//  for (x in arr) arr.unshift(arr.pop());
//  console.log(arr);
// })();
// let randomAdder = function (arr = ["a", "b"]) {
//  arr[arr.length * arr.length] = arr.length * arr.length;
// };
// randomAdder(arr);
// randomAdder();
// console.log(arr[9]);
// console.log(arr[8]);

//  7--------

// let a = "This only works if and only if";
// let b = a.slice(a.indexOf("only"));
// let c = b.lastIndexOf("only");
// b[c] = "i";
// console.log(a);
// console.log(b);

//10

// function f() {
//     console.log(arguments);
//    }
//    function f(a, b) {
//     return a + b;
//    }
//    console.log(f(2, 3, 4, 5));
//    function f(x, y, z, t) {
//     return x + y + z + t;
//    }
//    console.log(f(2, 3, 4, 5));


// console.log(a);
// f(2, 3, 4, 5);
// var a = 1;
// var a = 2;
// console.log(a);
// console.log(b);
// let b = 2;
// function f() {
//  console.log(arguments);
// }

//1-
// const num = 5;
// console.log(num + 5);
// let a = 6;
// a = a + num;
// console.log(num - a);

//2-

// let a = 2;
// {
//  let a = 3;
//  {
//  let a = 4;
//  {
//  let a = 5;
//  console.log(a);
//  }
//  console.log(a);
//  }
//  console.log(a);
// }
// console.log(a);


// 6------

// (function () {
//     if ((-100 && 100 && "0") || [] === true || 0) {
//     console.log(1);
//     if ([] || (0 && false)) {
//     console.log(2);
//     }
//     if (Infinity && NaN && "false") {
//     console.log(3);
//     if ("") {
//     console.log(4);
//     }
//     } else {
//     console.log(5);
//     if (({} || false === "") && !(null && undefined)) {
//     console.log(6);
//     }
//     }
//     } else {
//     console.log(7);
//     }
//    })();


// //  10-----
// function f() {
//     console.log(arguments);
//    }
//    function f(a, b) {
//     return a + b;
//    }
//    console.log(f(2, 3, 4, 5));
//    function f(x, y, z, t) {
//     return x + y + z + t;
//    }
//    console.log(f(2, 3, 4, 5));
   
//  12--------
// let obj = {"concept":""};
// console.log(
//  JSON.parse(
//  JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12)
//  ).concept
// );


//  13-B

// let a;
// console.log(a);
// function A() {
//  let a = 2;
//  console.log(a);
//  function C() {
//  console.log(a);
//  function D() {
//  console.log(a);
//  a = 2;
//  }
//  D();
//  a = 3;
//  }
//  C();
// }
// function B() {
//  let a;
//  console.log(a);

//  function E() {
//  a = 6;
//  console.log(a);

//  }

//  a = 2;
//  E();
//  console.log(a);
// }
// function F() {
//  console.log(a);
//  a = 2;
// }
// a = 3;
// F();
// B();
// A();

//  11---

// console.log(a);
// f(2, 3, 4, 5);
// var a = 1;
// var a = 2;
// console.log(a);
// console.log(b);
// let b = 2;
// function f() {
//  console.log(arguments);
// }

// function convertToBinary(x) {
//     let bin = 0;
//     let rem, i = 1, step = 1;
//     while (x != 0) {
//         rem = x % 2;
//         console.log(
//             `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
//         );
//         x = parseInt(x / 2);
//         bin = bin + rem * i;
//         i = i * 10;
//     }
//     console.log(`Binary: ${bin}`);
// }

// // take input
// let number = prompt('45');

// convertToBinary(45);

// function convertToBinary(x) {
//     let bin = 0;
//     let rem, i = 1, step = 1;
//     while (x != 0) {
//         rem = x % 2;
//         console.log(
//             `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
//         );
//         x = parseInt(x / 2);
//         bin = bin + rem * i;
//         i = i * 10;
//     }
//     console.log(`Binary: ${bin}`);
// }

// var number = 45;

// function decToBin(number){
//     var binary = "";
//     var temp = number;
 
//     while(temp > 0){
//         if(temp % 2 == 0){
//             binary = "0" + binary;
//         }
//         else {
//             binary = "1" + binary;
//         }

//         temp = Math.floor(temp / 2);
//     }

//     return binary;
// }

// console.log(decToBin(number));


// var data = [
//     { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
//  { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
// ];

// var avg = Array.from(data.reduce(
//         (acc, obj) => Object.keys(obj).reduce( 
//             (acc, key) => typeof obj[key] == "number"
//                 ? acc.set(key, (acc.get(key) || []).concat(obj[key]))
//                 : acc,
//         acc),
//     new Map()), 
//         ([name, values]) =>
//             ({ name, average: values.reduce( (a,b) => a+b ) / values.length })
//     );

// console.log(avg);

// const getAverage = myArray =>
//   myArray.reduce((sum, val, ind, arr) => {
//     sum += val;
//     return ind === arr.length - 1 ? sum / arr.length : sum;
//   }, 0);
// console.log("Average:", getAverage([5, 6, 5, 5, 4, 7, 8])); 


//f()
// console.log(a);

// let a=5
//var a=10;

// console.log(a);

// a=5;

// function f(){
//   var a= 6;
//   console.log(a);
// }
// f()

// f()

// var b=10;
// b=20;
// function g(){
//   let b=10;
//   console.log(a);
// }
// let a;
// a=15;

// function f(){
//   console.log(b);
// }

// g();

//9

// function spoon(phrase){
//   phrase=phrase.split(" ");
//   let t= phrase[0];
//   phrase[0]=phrase[1][0]+phrase[0].slice(1);
//   phrase[1]=t[0]+phrase[1].slice(1);
//   return phrase.join(" ");
// }
// console.log(spoon("kite flying"));

//10

function f() {
      console.log(arguments);
     }
     //fake
     function f(a, b) {
      return a + b;
     }
     console.log(f(2, 3, 4, 5));
     //not fake
     function f(x, y, z, t) {
      return x + y + z + t;
     }
     console.log(f(2, 3, 4, 5));
     
//14
     





