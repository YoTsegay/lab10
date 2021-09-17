"use strict";

const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
const peopleArray = [
  { name: "Sam", age: 15 },
  { name: "William", age: 6 },
  { name: "Lucy", age: 13 },
  { name: "Barney", age: 80 },
];
// double numbers
function doubleNums(arr) {
  return arr.map((item) => item * 2);
}
console.log(doubleNums(numArray));

function doubleAges(obj) {
  return obj.map((item) => item.age * 2);
}
console.log(doubleAges(peopleArray));

function filterEven(arr) {
  return arr.filter((item) => item % 2 === 0);
}

console.log(filterEven(numArray));

function filterOver10(arr) {
  return arr.filter((item) => item > 10);
}
console.log(filterEven(numArray));

function findEvenNum(arr) {
  return arr.find((item) => item % 2 == 0);
}
console.log(findEvenNum(numArray));

function findEvenAge(obj) {
  return obj.find((item) => item.age % 2 === 0);
}
console.log(findEvenAge(peopleArray));

function includes(num) {
  return numArray.includes(num);
}
console.log(includes(77));

function ageOverAt10(obj) {
  return obj.filter((item) => item.age > 10);
}
console.log(ageOverAt10(peopleArray));

function sumNumbers(arr) {
  return arr.reduce((total, current) => total + current, 0);
}
console.log(sumNumbers(numArray));

function averageNumber(arr) {
  let sum = arr.reduce((total, current) => total + current, 0);
  return sum / arr.length;
}
console.log(averageNumber(numArray));

function maxNumber(arr) {
  return arr.reduce((total, current) => (total < current ? current : total));
}
console.log(maxNumber(numArray));

function oldestPerson(obj) {
  return obj.reduce(
    (old, current) => (current.age > old ? current.age : old),
    0
  );
}
console.log(oldestPerson(peopleArray));

function youngestPerson(obj) {
  return obj.reduce(
    (young, current) => (current.age < young ? current.age : young),
    Infinity
  );
}
console.log(youngestPerson(peopleArray));

function sumEvenAge(arr) {
  let ar = [];
  let res = arr
    .filter((item) => {
      return item.age % 2 == 0;
    })
    .reduce(function (total, current) {
      return total + current.age;
    }, 0);
  let k = arr.filter((item) => item.age % 2 != 0).map((item) => ar.push(item));
  return res / k.length;
}

function sumoddAge(arr) {
  let ar = [];
  let res = arr
    .filter((item) => {
      return item.age % 2 != 0;
    })
    .reduce(function (total, current) {
      return total + current.age;
    }, 0);
  let k = arr.filter((item) => item.age % 2 != 0).map((item) => ar.push(item));

  return res / k.length;
}
console.log(sumoddAge(peopleArray));
