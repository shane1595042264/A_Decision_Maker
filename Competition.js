function r(max) {
    return Math.floor(Math.random() * max);
}

var competition = [
    "USABO"
]

var AB = [
    "A",
    "B"
]

var finals = [
    "Open",
    "Semifinal"
]
let competitionSelect = competition[r(1)];
switch(competitionSelect){
    case "AMC":
    let AMCtime = `${1 + r(75)} min`;

let AMC12 = `${2000+r(22)}`;

let question = `${1+r(25)}`;


console.log(`${competitionSelect}`);
console.log(`${AMCtime}`);
console.log(`${AMC12 + AB[r(2)]}`);
console.log(`${question}`);
    break;
    case "USABO":
        let USABOquestion = `${1+r(35)}`;
        let USABO = `${2004 + r(15)}`;
        console.log(`${competitionSelect}`);
        console.log(`${USABO + finals[r(2)]}`);
        console.log(`${USABOquestion}`);
        break;

}


