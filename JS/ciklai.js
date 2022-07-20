let count = 0;
let text = "";
for (let i = 0; i < 300; i++) {
    let t1 = Math.round(Math.random() * 300);
    if (t1 > 150) {
        count++;

    }
    if (t1 > 275) {
        text += "[" + t1 + "]";
    }
    else {
        text += t1 + " ";
    }
}
console.log("Total:" + count);
console.log(text);

console.log("-------------------Užduotis 2----------------");

text2 = "";
for (let i2 = 77; i2 < 3000; i2 += 77) {
    text2 += i2 + ",";
}
console.log(text2.substring(0, text2.length - 1));

console.log("-------------------Užduotis 3----------------");

for (let a = 0; a < 20; a++) {
    let kvd = "";
    for (let b = 0; b < 20; b++) {
        kvd += "*";

    }

    console.log(kvd);
}

console.log("-------------------Užduotis 4----------------");

for (let a = 0; a < 20; a++) {
    let kvd = "";
    for (let b = 0; b < 20; b++) {
        if (a == b) {
            kvd += "0";
        }
        else if (a == (19 - b)) {
            kvd += "0";
        }

        else {
            kvd += "*";
        }

    }

    console.log(kvd);
}

console.log("-------------------Užduotis 5----------------");

for (let i = 0; i < 1; i++) {
    let coin = Math.round(Math.random())

    if (coin == 1) {
        console.log("H");
    } else {
        console.log("S");
    }

    console.log("-------------------Užduotis 5 A----------------");

}
while (true) {
    let coin = Math.round(Math.random())

    if (coin == 1) {
        console.log("H");
        break;
    }

    if (coin == 0) {
        console.log("S");
    }

}
console.log("-------------------Užduotis 5 B----------------");

let count1 = 0
while (true) {
    let coin = Math.round(Math.random())

    if (coin == 1) {
        count1++;
        console.log("H");
    }
    if (coin == 0) {
        console.log("S");
    }
    if (count1 == 3) {
        break;
    }
}
console.log("-------------------Užduotis 5 C----------------");


let count2 = 0
while (true) {
    let coin = Math.round(Math.random())

    if (coin == 1) {
        count2++;
        console.log("H");
    }
    if (coin == 0) {
        console.log("S");
        count2 = 0;
    }
    if (count2 == 3) {
        break;
    }
}
console.log("-------------------Užduotis 6----------------");


let countP = 0;
let countK = 0;
let pointsP = 0;
let pointsK = 0;
// console.log(petras);
// console.log(kazys);
while (true) {

    let petras = Math.floor(Math.random() * 11) + 10;//16
    let kazys = Math.floor(Math.random() * 21) + 5;//

     pointsP += petras;
     pointsK += kazys;


    if (pointsP >= 222) {
        console.log("Petras: " + pointsP + " Kazys: " + pointsK + " Partiją laimėjo: Petras");
        break;
    }
    if (pointsK >= 222) {
        console.log("Petras: " + pointsP + " Kazys: " + pointsK + " Partiją laimėjo: Kazys");
        break;
    }
    // let petras222 = pointsP >= 222;
    // let kazys222 = pointsK >= 222;

    if (pointsK > 221 && pointsP >221) {
        // if (petras222 = kazys222) {
        console.log("Petras: " + pointsP + " Kazys: " + pointsK + " LYGIOSIOS");
        break;
    }

}

console.log("-------------------Užduotis 7----------------");


for (let a = 0; a < 21; a++) {
    let kvd = "";
    for (let b = 0; b < 21; b++) {
        if ((a + b >= 10) && (b - a <= 10) && (a - b <= 10) && (a + b >= 10) ) {
            kvd += "0";
        }

        else {
            kvd += "*";
        }

    }

    console.log(kvd);
}
