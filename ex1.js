//Ex 1. Implemetează o funcție arrow care primește ca parametru un array de string și îmi returnează un singur string 
//obținut prin concatenarea string-urilor din array-ul primit ca parametru. 

const concateneazaStringuri = (arr) => arr.join('');

// Exemplu de utilizare:
const arrayDeStringuri = ['Salut', ' ', 'lume!'];
const rezultat = concateneazaStringuri(arrayDeStringuri);
console.log(rezultat);  // Va afișa "Salut lume!"
