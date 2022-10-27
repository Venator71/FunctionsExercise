// Functions Exercise 21 March 2022

// Q 1

function fozzieBear (){
    console.log("Wocka Wocka!")
}

fozzieBear()

// Q 2 
console.log('='.repeat(100));

function beaker(speak) {
    console.log(` ${speak}`);
    console.log(` ${speak}`);
    console.log(` ${speak}`);
    console.log(` ${speak}`);
}

beaker('meep');

// or

function beaker(speak) {
    console.log(speak.repeat(4));
}

beaker('meep');


// Q 3
console.log('='.repeat(100));

function muppetShow(a , b){
    if(a === 'muppet' && b === 'Show' ){
        console.log("It's time to play the music. It's time to light the lights");
    }
}
 muppetShow('muppet','Show')

// Q 4
console.log('='.repeat(100));

function kermit(quote = `Kermit the Frog`){
    console.log(quote);
    
}

kermit()

// or

function kermit1(){
    return `Kermit the Frog`;
 }
 let jim = kermit1();
 console.log(jim);
// or

function kermit1(){
    return `Kermit the Frog`;
 }
 console.log(kermit1());
 
 
 // Q 5
 console.log('='.repeat(100));
 
 function muppetShowSeasons(seasons){
     if(seasons ===5){
         return true;
     };
     return false;
 }

 console.log(muppetShowSeasons(5));

 // Q 6
 console.log('='.repeat(100));

 const manOrMuppet = function (params) {
     console.log('Am I a man or a Muppet?');
 }

 manOrMuppet();


 // Q 7
 console.log('='.repeat(100));


 rainbowConnections = () => console.log("Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me");

 rainbowConnections();

 // Q 8 
 console.log('='.repeat(100));

 // False

 // Q 9

 // True

// BONUS

 // Q 10

const newMuppetMovies = [
    'The Muppets',
    'The Muppets Most Wanted'
];

// 10b

const uppers = newMuppetMovies.map(function(x){
    return x.toUpperCase()
});
console.log(uppers);

console.log('='.repeat(100));

//or

const upperMovies = newMuppetMovies.map(movie => movie.toUpperCase());
console.log(upperMovies);

// 11a
console.log('='.repeat(100));

const oldMuppetMovies = [
    "The Muppet Movie", 
    "The Muppets Take Manhattan", 
    "The Great Muppet Caper", 
    "The Muppet Christmas Carol", 
    "Muppet Treasure Island", 
    "Muppets From Space"
];

// 11b

const a = oldMuppetMovies.filter(twoMovies => twoMovies.length ===22);
console.log(a);

// 12a
console.log('='.repeat(100));

const charactersOne = [
    "Statler",
    "Waldorf"
];

// 12b

const charactersTwo = [
    "The Swedish Chef", 
    "Animal", 
    "Rowlf"
];

// 12c

randomMuppet = (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters.length)]}`);
}


// 12d

randomMuppet(charactersOne);
randomMuppet(charactersTwo);




// 13
console.log('='.repeat(100));

caps = string => {
    let chars = string.toLowerCase().split('');
    for (i = 0; i< chars.length; i +=2){
        chars[i] = chars[i].toUpperCase();
    }
    console.log(chars.join(''));
}
 caps('HELLO WORLD');

// or

 caps =(string) => {
     return string.split(``).map((v, i)=> i % 2 ? v.toLowerCase() : v.toUpperCase()).join(``);
 }
 console.log(caps('HELLO WORLD'));

// or

 caps = (string) => {
     let newString = ``;
     for (i = 0; i < string.length; i++){
         if (i % 2 === 0){
             newString += string[i].toUpperCase()
         }else {
             newString += string[i].toLowerCase()
         }
     }
     return newString;
 }

 console.log(caps(`Hello World`));

// or

 caps = (string) => {
    for (i=0; i < string.length; i+=2){
        string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i+1);
    }
    return string;
};

// Extra Bonus

 caps = (string) => {
    let count = 0;
    let newString = ``;
    for (i = 0; i < string.length; i++){
        if (string[i] ===` `){
            newString += ` `;
        }else if (count % 2 === 0){
            newString += string[i].toUpperCase();
            count++;
        }else{
            newString += string[i].toLowerCase()
            count++
        }
    }
return newString;
}


console.log(caps(`Hello World`));
