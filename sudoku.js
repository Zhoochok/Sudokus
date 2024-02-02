const fs = require('fs');
const { EOL } = require('os');

const puzzlePath = './puzzles.txt';
function read() {
  const puzzle = fs.readFileSync(puzzlePath, 'utf-8');
  return puzzle.split(EOL);
}
console.log(read());
function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  // Принимает игровое поле в том формате, в котором его вернули из функции solve.
  // Возвращает булевое значение — решено это игровое поле или нет.
}

function prettyBoard() {
  // Принимает игровое поле в том формате, в котором его вернули из функции solve.
  // Выводит в консоль/терминал судоку.
  // Подумай, как симпатичнее его вывести.
}
