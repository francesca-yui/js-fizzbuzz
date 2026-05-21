const multiplyThree = 'Fizz';
const multiplyFive = 'Buzz';
const multiplyBoth = 'FizzBuzz'

// numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

//Stampa FizzBuzz per multipli di 3 e 5 (i % 3 === 0 && i % 5 === 0)
    if (i % 15 === 0) {
        console.log(multiplyBoth)
    }  

// Altrimenti stampa Fizz per i multipli di 3
    else if (i % 3 === 0) {
        console.log(multiplyThree);
    }
        
// Altrimenti stampa Buzz per i multipli di 5
    else if (i % 5 === 0) {
        console.log(multiplyFive);
    }

// Altrimenti stampa il numero normale
    else {
        console.log(i);
    }
}