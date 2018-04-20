// let array = [1,2,3,4,5]
// let element = 4;
//
// function includes (array, element) {
//     for (let item of array){
//         if(item===element) {
//             return true
//         }
//     }
// }
// includes: array.element
// console.log(array);
//
// function reverseNumber(number) {
//     number = number + " ";
//     return + number.split(" ").reverse().join(" ");
//
// }
// console.log(reverse_a_number(12345));

// ПОЛИНДРОМ

// function isPolindrom(polindrom) {
//     let string = polindrom.split('').join(' ');
//
//     console.log(string);
//     let reversedString = string.split('').reverse().join('');
//
//     if(string === reversedString) {
//         return true;
//     }
//
//  return false;
//
// }
// console.log(isPolindrom('nursers run'));

// Exercises 5
// let string = 'the quick brown fox';
//
// function capitalize(text) {
//     let cupCut = text.split(' ');
//     let arr = [];
//     console.log(cupCut);
//     for(let item of cupCut){
//         item = item.replace(item[0],item[0].toUpperCase());
//         console.log(item);
//        arr.push(item);
//     }
//     arr = arr.join(' ');
//     console.log(arr);
//
// }
//
// capitalize(string);


// Exercise 6

// let vowels = 'aieou';
// let input = "WrIte".
//
//     function countVowels(input, vowels) {
//     let count = 0;
//     for(let letter of input) {
//         if (vowels.toLocaleLowerCase.indexOf(letter.toLocaleLowerCase()) !== -1 {
//             count += 1
//         }
//     }
//     return count;
//
// }
//
// countVowels(input);
// console.log(countVowels(input, vowels));

// Exercise 7

// function sum (a,b) => {
//     return a + b
// }
//
// let sum = (a,b) => a + b;

// function mylt(number) {
//     return number * 2;
//
// }
//
// function sum(fun) {
//     let a = 5;
//     let b = fun(a);
//     return a + b;
// }
//     let return = sum(mylt);
// console.log(result);

// exercise
// function factorial (num) {
//     if (num === 0) {return 1}
//     return num * factorial (num-1)
// }
//
// console.log(factorial(5));
// console.log(sum(100))


// exercise
// const number = [0, 2, 4, 6, 8, 10];
// // const flipFlop = numbers.map(function (element, index) {
// //     return element + index
// // });
// //
// // console.log(flipFlop);
//
// const flipFlop = number.map((element, index) => element + index);
// console.log(flipFlop);

// exercise

// const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const even = number.filter(function (el) {
//     if (el > 5) {
//         return el
//     }
//     el > 5 ? el : null;
// });
// console.log(even);

// exercise

// function getDigitsSum (num) {
//     let arr = num.toString().split('');
//     let sum = 0;
//     for (let item of arr) {
//         sum = sum + +item;
//     }
//     return sum;
// }
//
// function years () {
//     let arr = [];
//     for (let i = 1; i <= 2018; i++) {
//         if (getDigitsSum(i) === 13){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
//
// console.log('years', years());

// задачка

// дан массив с числами, сделайте из нег омассив состоящих из квадратов этих числел var arr = [5, 6, 7, 8, 9]

let arr = [5, 6, 7, 8, 9]
let newArr = arr.map(el => {return el*el; })
    .filter(el => {return el > 40})
    .reduce((current, item) => { return current + item });
})
console.log(newArr);

//дан маассив с числами, проверте то, что все элементы в массиве больше нуля, let arr = [5, 6, 7, 8, 9];

// якщо цифри быльше нуля - повертаэмо парны
let arr = [5, 6, 7, -8, 9];
let result = arr.every(element => {

    return element > 0;
})

if (result) {
    let even = arr.filter(function (el) {
        if (el % 2 === 0) {
            return el;
        }


    })
    console.log(even);
}
else {
    let odd = arr.filter(el => {
        // return el % 2 !== 0 ? el : null
        if (el % 2 !== 0) {
            return el;
        }
    })
    console.log(odd);
}