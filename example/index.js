const fs = require('fs')
const path = require('path')

const heapSort = (array) => {
  let size = array.length

  for (let i = Math.floor(size / 2 - 1); i >= 0; i--)
    buildHeap(array, size, i)

  for (let i = size - 1; i >= 0; i--) {
    let temp = array[0]
    array[0] = array[i]
    array[i] = temp

    buildHeap(array, i, 0)
  }
}

function buildHeap(array, size, i) {
  let max = i
  let left = 2 * i + 1
  let right = 2 * i + 2

  if (left < size && array[left] > array[max])
    max = left

  if (right < size && array[right] > array[max])
    max = right

  if (max != i) {
    let temp = array[i]
    array[i] = array[max]
    array[max] = temp

    buildHeap(array, size, max)
  }
}

let example1 = fs.readFileSync(path.join(__dirname, '1000.txt')).toString();
console.time("Exemplo 1")
heapSort(example1)
console.timeEnd("Exemplo 1")

let example2 = fs.readFileSync(path.join(__dirname, '10000.txt')).toString();
console.time("Exemplo 2")
heapSort(example2)
console.timeEnd("Exemplo 2")

let example3 = fs.readFileSync(path.join(__dirname, '100000.txt')).toString();
console.time("Exemplo 3")
heapSort(example3)
console.timeEnd("Exemplo 3")
