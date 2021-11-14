function r(max) {
    return Math.floor(Math.random() * max);
}

var AB = [
    "A",
    "B"
]

let AMCtime = `${1 + r(76)} min`;

let AMC12 = `${2000+r(22)}`;

let question = `${1+r(26)}`;



console.log(`${AMCtime}`);
console.log(`${AMC12 + AB[r(2)]}`);
console.log(`${question}`);
