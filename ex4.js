//Implementează o funcție care primește ca parametrii două array-uri de aceeași lungime 
//și returnează un array cu elementele din cele două surse intercalate. 

const intercaleazaArrayuri = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return null; // sau aruncă o excepție, în funcție de preferințe
    }

    let rezultat = [];
    for (let i = 0; i < arr1.length; i++) {
        rezultat.push(arr1[i], arr2[i]);
    }

    return rezultat;
};

// Exemplu de utilizare:
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
const rezultat = intercaleazaArrayuri(array1, array2);
console.log(rezultat);  // Va afișa "[1, 2, 3, 4, 5, 6]"
