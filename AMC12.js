function r(max) {
    return Math.floor(Math.random() * max);
}


let AMCtime = `${1 + r(76)} min`;

let AMC12 = `${2000+r(22)}`;

let question = `${1+r(26)}`;

console.log('Result of your AMC12 Decisions: ');

console.log(`Time to complete one question should be: \n${AMCtime}`);
console.log(`And use this set of test: \n${AMC12}`);
console.log(`This question: \n${question}`);
