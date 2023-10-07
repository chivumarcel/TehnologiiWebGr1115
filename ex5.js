//Implementează o funcție care primește ca și parametru un array de numere 
//și care calculează media aritmetică a numerelor. 

const mediaAritmetica = (numere) => {
    if (numere.length === 0) {
        return null; // sau aruncă o excepție, în funcție de preferințe
    }

    const suma = numere.reduce((acumulator, valoareCurenta) => acumulator + valoareCurenta, 0);
    return suma / numere.length;
};

// Exemplu de utilizare:
const numereExemplu = [1, 2, 3, 4, 5];
const rezultat = mediaAritmetica(numereExemplu);
console.log(rezultat);  // Va afișa "3" (deoarece (1+2+3+4+5)/5 = 15/5 = 3)
