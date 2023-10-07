// const numarCaractereDiferite = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         return -1;
//     }

//     let count = 0;
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] !== str2[i]) {
//             count++;
//         }
//     }

//     return count;
// };

// const string1 = 'abcdexr';
// const string2 = 'abfgert';
// const rezultat = numarCaractereDiferite(string1, string2);
// console.log(rezultat);  // Va afișa "2" (deoarece 'c' != 'f' și 'd' != 'g')

//
function diffChars (str1, str2){
if (str1.length !== str2.lenght){
    return -1;
}
    let counter = 0; 

    for (let i=0; i<str1.length; i++){

        if (str1[i] !== str2[i]){
            counter ++; 
        }
    }
        return counter;

}
console.log(diffChars('abcd', 'acdd'));