// conta fino a 100
//for (let i = 0; i < 100; i++) console.log(i + 1);

// conta fino da 100 a 1
//for (let i = 100; i > 0; i--) console.log(i);

// conta i primi 100 numeri pari
//for (let i = 0; i < 200; i += 2) console.log(i + 2)
//for (let i = 2; i <202; i+= 2) console.log(i)
//for (let i = 0; i < 100; i++) console.log((i + 1) * 2)
/*for (let i = 0; i < 200; i++) {
    const n =i + 1;
    if (n % 2 === 0) console.log(n)
}*/

// elenca i primi 10 numeri che ocntengono un 5
// i primi 10 numeri
/*for (let i = 0, last = 0; i < 10; i++) {
    console.log('iteration i:', i);
    
    // tutti i numeri da 0 finchè non trovo uno che contiene 5
    for (let j = last + 1; true; j++ ) {
        console.log('iteration j:', j);

        if (String(j).includes('5')) {
            console.log(j);
            last = j;
            break
        }
    }
}*/

//elencare tutte le coppie cartesiane dell'insieme (0-9) con sè stesso

/*for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`(${i}, ${j})`)
    }
}
(0, 0) (0, 1) (0, 2)*/

//elencare tutte le coppie cartesiane dell'insieme (0-9) con sè stesso
for (let i = 0; i < 10; i++) {
    let row = '';

    for (let j = 0; j < 10; j++) {
        row += (`(${i}, ${j})`);
    }

    console.log(row);
}
//(0, 0) (1, 1) (1, 2)