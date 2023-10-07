// Implementează o funcție care primește ca și parametri un string și o literă și 
//returnează de câte ori se regăsește litera în respectivul text. 

// const numarAparitiiLitera = (text, litera) => {
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === litera) {
//             count++;
//         }
//     }

//     return count;
// };

// // Exemplu de utilizare:
// const textExemplu = 'bAnana';
// const literaExemplu = 'a';
// const rezultat = numarAparitiiLitera(textExemplu, literaExemplu);
// console.log(rezultat);  // Va afișa "3" (deoarece litera 'a' apare de 3 ori în cuvântul 'banana')

//

function findChar(str, char){
let counter = 0;

for (let i=0; i<str.length; i++){

    if(str.charAt(i)===char){

        counter ++;
    }
}
return counter; 
}
console.log(findChar('casa', 'a'))