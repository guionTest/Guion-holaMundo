let numbers = [1, 2, 3, 4, "holaMundo", 5];

//Incrementa los numeros de un array por 1
function incrementNumbers() {
    numbers = numbers.map(e => typeof e === "number" ? ++e : e)
}

incrementNumbers()

console.log(numbers)

console.log(numbers)
