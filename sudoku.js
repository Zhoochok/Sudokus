const fs = require("fs");
const { EOL } = require("os");

const puzzlePath = "./puzzles.txt";
function read() {
  const puzzle = fs.readFileSync(puzzlePath, "utf-8");
  return puzzle.trim().split(EOL);
}
// console.log(read());

const text = read()[0];
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */

function random() {
  return Math.floor(Math.random() * 9) + 1;
}

function solve(text) {
  const res = text.match(/.{1,9}/gi).map((el) => el.split(""));

  for (arr of res) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === "-") {
        arr[i] = random().toString();
      }
    }
  }
  return res;
}
console.table(solve(text));

const sudo = solve(text)
// console.log(sudo);

function isSolved(sudo) {
  for(el of sudo){
    for(let i = 0; i < el.length; i += 1){
      if(/[1-9]*/g){
        return false
      }
      
      }
    }
  }

console.log(isSolved(sudo));
// Принимает игровое поле в том формате, в котором его вернули из функции solve.
  // Возвращает булевое значение — решено это игровое поле или нет.





function prettyBoard() {
  // Принимает игровое поле в том формате, в котором его вернули из функции solve.
  // Выводит в консоль/терминал судоку.
  // Подумай, как симпатичнее его вывести.
}
