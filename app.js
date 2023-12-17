let a = 5;
let b = 6;

console.log("Suma: ", a + b);
console.log("Resta: ", a - b);
console.log("Multiplicación: ", a * b);
console.log("División: ", a / b);

let edad = 15;

if ( edad < 15){
    console.log("Eres mayor menor de 15 años. Tu edad es: " + edad);
} else {
    console.log("Tienes 15 años o más, tu edad es: " + edad) 
}

for (let i = 1; i <= 5; i++) {
    console.log( i );
}

function calcularAreaDelRectangulo (base, altura) {
    return base * altura
}

let area = calcularAreaDelRectangulo(4, 6);
console.log("Área del rectángulo: " + area);

let nombre = ["Juan", "Ana", "María", "Ramón"];

for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
}