const numbers = [1, 2, 3, 4, "holaMundo", 5];

//Incrementa los numeros de un array por 1
function incrementNumbers() {
    for (let i = 0; i < numbers.length; i++) {

        if (typeof numbers[i] === "number") numbers[i] = numbers[i] + 1;
    }
}

incrementNumbers()

"hola"

console.log(numbers)
