let numbers = [1, 2, 3, 4, "holaMundo", 5];

//Incrementa los numeros de un array por 1
function incrementNumbers() {
    for (let i = 0; i < numbers.length; i++) {
      typeof numbers[i] === "number" ? numbers[i] += 1 : null
    }
}

incrementNumbers()

console.log(numbers)