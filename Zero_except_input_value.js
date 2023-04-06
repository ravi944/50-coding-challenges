let dig1="6"
let dig2="5"
let num1 = 657234;
let num2 = 4267954;
let numcon1 = "";
let numcon2 = "";

let Str1 = num1.toString();
let Str2 = num2.toString();

for (let i = 0; i < Str1.length; i++) {
    if (Str1[i] !== dig1) {
        numcon1 += "0";

    } else {
        numcon1 += Str1[i];
    }
}

for (let j = 0; j < Str2.length; j++) {
    if (Str2[j] !== dig2) {
        numcon2 += "0";

    } else {
        numcon2 += Str2[j];
    }
}

console.log(numcon1);
console.log(numcon2);

