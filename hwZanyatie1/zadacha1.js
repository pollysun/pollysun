/* Напишите программу, которая выводит на числа от 1 до 100. 
При этом вместо чисел, кратных трем, программа должна выводить слово "Fizz", а вместо чисел, кратных 5 - "Buzz".
Если число кратно и 3 и 5, то программа должна выводить слово "FizzBuzz" */

for ( let i = 1; i <= 100; i++ ) {
    
    if ( i % 3 === 0 && i % 5 ===0 ) {
        console.log('FizzBuzz');
    } else if ( i % 3 ===0 ) {

        console.log('Fizz');

    } else if ( i % 5 === 0 ) {

        console.log('Buzz');
    } else {

        console.log(i);
    }
    
}

// Вариант с тернарным оператором

for ( let i = 1; i <= 100; i++ ) {

    ( i % 3 === 0 && i % 5 ===0 ) ? console.log('FizzBuzz') :

    ( i % 3 ===0 ) ? console.log('Fizz') :

    ( i % 5 === 0 ) ? console.log('Buzz') : console.log(i);
} 

// Вариант switch


for (let i = 1; i <= 100; i++) {

    switch (true) {

        case i % 3 === 0 && i % 5 === 0 :

            console.log('FizzBuzz');

        break;
        
        case i % 3 === 0 :

            console.log('Fizz');

        break;

        case i % 5 === 0 :

            console.log('Buzz');
        break;

        default : 

        console.log(i);
    }
} 

