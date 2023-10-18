// Iteration 1: Names and Input

let hacker1 = "Renan";
let hacker2 = "Renata";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characteres`);
}

// Iteration 2: Conditionals

else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characteres`)
}
else {console.log('Wow, you both have equally long names, XX characters!')}



if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length > hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Iteration 3: Loops

//Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let driversName = "";//asaspas aqui eh somente pra nao deixar a variavl em branco, caso contrario da erro. 
for(let i= 0; i < hacker1.length; i++) {
  driversName += hacker1[i].toUpperCase() + ' ' ;//as aspas eh para dar o espaco entre as letras
}
console.log(driversName) // pra eu ver o resultado na tela.

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let driversNameReverse = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  driversNameReverse += hacker2[i]; //o driversNameReverse eh somente pra invocar minha funcao
}
console.log(driversNameReverse);

/*
3.3 Depending on the lexicographic order of the strings, print:
The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?
*/
if (hacker1 > hacker2){
  console.log('The drivers name goes first.')
}
else if(hacker1 < hacker2){
  console.log('yo, the navigator goes first definitely.')
}
else {
  console.log('What?! You bouth have the same name?')
}