// comsole.calc(){
//     console.log('inside text');
// }
//
// calc();

// function add (){
//     console.log(5+6);
//              }
//
//              add();
// }
// }
// let result = showText();
// console.log(result);
//
// function calc(number1, number2) {
// return number1 + number2;
// }
//
// console.log(calc(5,10));
// console.log(calc(20,30));
// console.log(calc('function', 5));
/*
  Создайте функцию titleCase(str), которая
  получает строку и возвращает предоставленную строку
  с первой буквой каждого слова, заглавными.
  Остальные буквы слова должны быть не заглавными.
*/

// Вызовы функции для проверки
// console.log(
//     titleCase("I'm a little tea pot")
// ); // вернет "I'm A Little Tea Pot"
//
// console.log(
//     titleCase("sHoRt AnD sToUt")
// ); // вернет "Short And Stout".
//
// console.log(
//     titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
// ); // вернет "Here Is My Handle Here Is My Spout".

// function titleCase(str) {
//     if (typeof str !== 'string') {
//         return
//     }
//
//     let splCa = lowCa.split('');
//     for (let word of splCa) {
//         word[0] = word[0].toUpperCase();
//         //newArray.push(word);
//         let custo = word.replace(word[0], word[0].toUpperCase());
//     }
//     newArray.push(custo);
// }
// retust newArray

/*
  Есть массив уникальных чисел uniqNumbers.

  Написать функцию, addUniqNumbers(...),
  которая получает произвольное кол-во чисел как аргументы,
  и добавляет в массив uniqNumbers только уникальные,
  а повторяющиеся игнорирует.
*/

// const uniqNumbers  = [2, 1, 4, 9];
//
// // Вызовы функции для проверки
// addUniqNumbers(1, 2, 3);
// console.log(
//     uniqNumbers
// ); // будет [2, 1, 4, 9, 3]
//
// addUniqNumbers(12, 2, 3, 19);
// console.log(
//     uniqNumbers
// ); // будет [2, 1, 4, 9, 3, 12, 19]
//
// addUniqNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//     uniqNumbers
// ); // будет [2, 1, 4, 9, 3, 12, 19, 5, 8]

// const uniqNumbers  = [2, 1, 4, 9];
// function addUniqNumbers() {
//   console.log(arguments):
//       let arr = Array.from(arguments);
//   console.log(arr);
//   for(let number of arr) {
//       if(uniqNumbers.includes(number))
//   }
//
// }

/*
  Создайте функцию removeFromArray(arr),
  которая получает 1 параметр, исходный массив arr.

  При вызове функции, первым аргументов всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.

  Удалите все элементы из исходного массива,
  которые имеют такое же значение, что и аргументы.
*/

// Вызовы функции для проверки
// console.log(
//     removeFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // вернет [1, 3, 5]
//
// console.log(
//     removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // вернет [12, 8, 17]

function removeFromArray(arr) {
    // console.log(arr);
    // console.log('arguments', arguments);

    let newArr = Array.from(arguments);
    newArr.shift();
    console.log(newArr);
    for (let number of newArr) {
        if(arr.includes(number) ) {
            let index = arr.indexOf(number);
            arr.splice(index,1);
        }
        return arr
    }
