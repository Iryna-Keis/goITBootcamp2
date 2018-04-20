// напишите фуккцию countOwnProps(obj), считающую количество собственных свойств в обьекте, функция возвращает количество свойстю
// Вызовы функции для проверки console.log()

// console.log(
//     countOwnProps({})
// ); // 0
//
// console.log(
//     countOwnProps({a: 1, b: 3, c: 'hello'})
// ); // 3

/*
  Напишите функцию countTotalSalary(salaries),
  считающую общую сумму запрплаты работников.

  Каждое поле объекта передаваемого в функцию,
  имеет вид "имя":"зарплата"

  Функция возвращает общую сумму зарплаты.
*/

// Вызовы функции для проверки
  console.log(countTotalSalary({

  })
); // 0

console.log(countTotalSalary( {
        mango: 100,
        poly: 150,
        alfred: 80
    })
); // 330

function countTotalSalary(salary) {
    let sum = Object.values(salary);
    if (sum.length !== 0){
        let result = sum.reduce(function (current, next){
            return current + next
        });
        return result;
    }
   else {
        return 0
    }

}
let countTotalSalary = salary
=> {
    return Object.values(salary)
        .length !== 0 ? Object.values(salary).reduce((current, next) => current + next) :
    0;
    countTotalSalary({})

);

/*
  Напишите функцию getAllPropValues(prop),
  которая берет массив объектов и
  возвращает массив значений определенного поля prop
*/

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
// ];
//
// // Вызовы функции для проверки
// console.log(
//     getAllPropValues('name')
// ); // ['Poly', 'Mango', 'Ajax']
//
// console.log(
//     getAllPropValues('mood')
// ); // ['happy', 'blissful', 'tired']
//
// console.log(
//     getAllPropV

function getAllPropValues(prop) {
    let result = [];
    if (users)
        for (let i = 0; i < users.length; i++) {
    result.push(users[i][prop]);
    }
    return result;
} else {
    return [];
}


}