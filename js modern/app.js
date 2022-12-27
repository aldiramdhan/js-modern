// Variable dalam JS ada 2
// let dan const
let score = 0;
console.log("score");
score = 100;
console.log("score");

const pi =3.14;
console.log("pi");
// *pi = 3.15 tidak bisa di ubah

// Memberi nama variable
// camelCase 
let homeAlone = true;

// snake_case
let price_per_quantity = 5000

// Tipe data JS
// number
let weight = 75;
console.log(weight/15);

let originalNum = 23;
let numberToBeAdded = 7;
let newNum = originalNum + numberToBeAdded;
console.log(newNum);

// string
let message = "selamat datang di KODE!"
console.log (message);

let name = "aldi";
console.log (name);

message = 'She\'s a great person';
console.log (message);

let htmlSnippet = '<h1 class=\'header\'>This is header </h1>';
htmlSnippet = `<h1 class='header'>This is header </h1>`;

let visitorName = prompt('Siapakah namamu');
message = 'Halo, ' + visitorName;
message = message + 'Selamat datang di course perkenalan Javascript Modern!';
message = message + 'KODE percaya semua bisa belajar'
alert(message);


// boolean
let menuOpen = true;
let menuClose = false;
console.log(typeof menuOpen);

// Ekspresi logika
let uang = 100000;
let hargaBuku = 200000;
console.log(uang > hargaBuku);

uang = uang + 200000; //300000
console.log(uang > hargaBuku);

let hargaKomik = 100000;
uang = uang - hargaKomik; //200000
console.log(uang);
console.log(uang > hargaBuku);//false
console.log(uang == hargaBuku);//true
console.log(uang >= hargaBuku);//true

// Ekspresi logika 2

console.log(1 == '1');//true
// Menggunakan streak equal 3x
console.log(1 === '1');//false 

// Operator Logika

let isKtp = true;
let isSim = false;
console.log(isKtp ||isSim);
console.log(isKtp && isSim);

console.log(true && false);
console.log(true && true);
console.log(true || false);
console.log(!false);

// Kondisi 
hargaBuku = 200000;
hargaKomik = 50000;
uang = 100000;

if (uang >= hargaBuku) {
    console.log('Sukses membeli buku');
} else if (uang >= hargaKomik) {
    console.log('Tidak bisa membeli buku, beli komik saja');
} else {
    console.log('Uang tidak cukup');
}

// Truthy dan Falshy
console.log(false == 0);
console.log(false == '');
console.log(1 == true);

let value = '';
// let value = 'Something';

if (value != '') {
    console.log('There is SOMETHING inside the value');
} else {
    console.log ('There is NOTHING inside the value');
}

// Switch case
let point = 0;
let rating = 3;

switch (rating) {
    case 1:
        point = 10;
        break;
    case 2:
        point = 20;
        break;
    case 3:
        point = 50;
        break;
    case 4:
        point = 100;
        break;
    case 5:
        point = 200;
        break;
}

console.log('point anda: '+ point)

// Ternary Operator 1
let day = true;

// *if (day) {
//!     alert('It\'s day time. Let\'s play');
// *} else {
// !    alert('It\'s night time. Let\'s sleep');
// *} 

// Dipersingkat
alert(day ? 'It\'s day time. Let\'s play' : 'It\'s night time. Let\'s sleep');

// Ternary Operator 2
name = '';
message = name ? 'Welcome, ' + name : 'Welcome, guest';

console.log (message);

// Fungsi
function add() {
    let result = 1 + 2;
    console.log (result);
}

add();

// anonymous function
let tambah = function () {
    let result = 1 + 2;
    console.log(result);
}

// arrow function
const multiply = () => {
    let result = 1 * 2;
    console.log(result);
}

multiply();

// fungsi yang mengembalikan nilai
tambah = function () {
    let result = 1 + 2;
    return result;
};

const result = add();
console.log(result);

multiply = () => {
    let result = 1 * 2;
    return result
}

console.log(multiply());

// fungsi dengan parameter
tambah = function (a, b) {
    let result = a + b;
    return result;
};

console.log(tambah(5, 6))

multiply = (a, b) => {
    let result = a * b;
    return result
}

console.log(multiply(5,6));

// Perulangan dan perulangan while
console.log(Math.floor(Math.random() * Math.floor(100))); //membuat angka acak

let counter = 0//start
//batas kondisi
while (counter < 10){
    // hal yang ingin di eksekusi
    console.log(Math.floor(Math.random() * Math.floor(100)));
    // update
    counter = counter + 1;
}

// perulangan for
for(let counter = 0; counter < 10; counter++) {
    console.log(Math.floor(Math.random() * Math.floor(100)));
}

// Array
let shoppingList = ['coffee', 'butter', 'sugar'];
let scores = [10, 2322, 12, 0];

shoppingList[3] = 'creamer';//menambahkan angggota dengan mengetahui jumlahnya
shoppingList.push('tea');//menambahkan anggota array jika tidak mengetahui berapa anggotanya
shoppingList.pop();//menghapus anggota terakhir dari array

for(let index=0; index<shoppingList.length; index++) {
    console.log("I need to buy: " + shoppingList[index]);
}

// Array multi dimensi
// permainan papan tic tac toe
let row1 = ['', '', '']
let row2 = ['', '', '']
let row3 = ['', '', '']

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

board[1][1] = 'X';
board[0][0] = 'O';

console.table(board);

// Struktur Data Object
let student = {
    name: 'Jar Jar Binks',
    gender: 'male',
    height: 196
};

console.log(student.name);
console.log(student.gender);
console.log(student.height);
console.log(student);

// Kombinasi Object
student = {
    name: 'Jar Jar Binks',
    gender: 'male',
    height: 196,
    active: true,
    talk: function () {
        return 'Misa, Jar Jar!'
    },
    friends: ['Obi-wan Kenobi', 'Anakin Skywalker', 'R2D2'],
    bio: {
        skinColor: 'brown',
        weight: 68
    }
}
console.log(student.name);
console.log(student.gender);
console.log(student.height);
console.log(student.talk());
console.log(student.friends[1]);
console.log(student.bio.skinColor);

let jarJar = {
    name: 'Jar Jar Binks',
    gender: 'male',
    height: 196,
    active: true,
    talk: function () {
        return 'Misa, Jar Jar!'
    },
    friends: ['Obi-wan Kenobi', 'Anakin Skywalker', 'R2D2'],
    bio: {
        skinColor: 'brown',
        weight: 68
    }
}

let padme = {
    name: 'Padme Amidala',
    gender: 'female',
    height: 178
};

let studentList = [jarJar, padme];

console.table(studentList);
console.log(studentList[1]);
console.log(studentList[1].name);