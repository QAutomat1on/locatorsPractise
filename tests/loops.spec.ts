import {test, expect} from'@playwright/test';

//loops
// - Виведіть в консоль числа від 1 до 345 (while)

let i = 1;
while ( i <= 345) {
    console.log(i);
    i++;
}

// - Знайти суму чисел від 1 до 100 (тобто  1 + 2 + 3 + 4 + 5 + 6....)

let a = 1;
let sum = 0;
while(a <= 100){
    sum += a; //+= operator that allow us to sum 1st and 2nd variables.
    console.log(sum)
    a++;
}

// - Виведіть в консоль числа від 241  до 1 (do while)

let b = 241;
do {
    console.log(b);
    b--;
}
while(b >= 1);

// - Напишіть програму  яка відображає найбільше ціле число з двох цілих чисел. (if.. + покрийте тестами)

function compareFigures(figure1,figure2){
if( figure1 > figure2) {
    return(`Figure1 '${figure1}' > Figure2 '${figure2}' `);
    } else if ( figure1 === figure2) {
    return(`Figure1 '${figure1}' === Figure2 '${figure2}' `);
    } else {
    return(`Figure2 '${figure2}' > Figure1 '${figure1}' `);
}
};

test('1st > 2nd', async() => {
    const answer = compareFigures(11,5)
    console.log(answer);
    expect(answer).toBeTruthy();
});

test('1st === 2nd', async() => {
    const answer = compareFigures(11,11)
    console.log(answer);
    expect(answer).toBeTruthy();
});

test('2nd > 1st', async() => {
    const answer = compareFigures(11,22)
    console.log(answer);
    expect(answer).toBeTruthy();
});
// I think my assertions bull-shit, need some help there.