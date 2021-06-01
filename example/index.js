const fs = require('fs');
const path = require('path');

let comparacoes = 0;
let trocas = 0;

const heapSort = (array) => {
  let size = array.length;

  for (let i = Math.floor(size / 2 - 1); i >= 0; i--)
    buildHeap(array, size, i);

  for (let i = size - 1; i >= 0; i--) {
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    trocas++;

    buildHeap(array, i, 0);
  }
}

const buildHeap = (array, size, i) => {
  let max = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < size && array[left] > array[max]) {
    max = left;
  }

  if (right < size && array[right] > array[max]) {
    max = right;
  }

  comparacoes += 2

  if (max != i) {
    let temp = array[i];
    array[i] = array[max];
    array[max] = temp;
    trocas++;

    buildHeap(array, size, max);
  }
}

console.log("\n");

let example1 = fs.readFileSync(path.join(__dirname, '1000.txt')).toString();
comparacoes = 0;
trocas = 0;
console.time("Exemplo 1000 valores");
heapSort(example1);
console.timeEnd("Exemplo 1000 valores");
console.log(`\tComparações: ${comparacoes} \n\tTrocas: ${trocas}\n`);


let example2 = fs.readFileSync(path.join(__dirname, '10000.txt')).toString();
comparacoes = 0;
trocas = 0;
console.time("Exemplo 10000 valores");
heapSort(example2);
console.timeEnd("Exemplo 10000 valores");
console.log(`\tComparações: ${comparacoes} \n\tTrocas: ${trocas}\n`);


let example3 = fs.readFileSync(path.join(__dirname, '100000.txt')).toString();
comparacoes = 0;
trocas = 0;
console.time("Exemplo 100000 valores");
heapSort(example3);
console.timeEnd("Exemplo 100000 valores");
console.log(`\tComparações: ${comparacoes} \n\tTrocas: ${trocas}\n`);
