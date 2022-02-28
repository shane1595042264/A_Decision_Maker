function r(max) {
    return Math.floor(Math.random() * max);
}

let min = r(120) + 1;
let mediMin = r(min-1) + 1;
var Exercises = [
    "Breakdance",
    "Locking",
    "Hip-Hop",
    "Popping",
    "Basketball",
    "Public speaking",
    "Speed Reading",
    "Memorization",
    "Nofap",
    "Vocabulary",   
    "Duolingo Spanish",
    "Guitar",
    "Code academy: Javascript"
]


let bind = r(2);
if(bind == 0){
    console.log('Binding');

}

else if(bind == 1){

    console.log('Non-Binding');
 
}



console.log(`${Exercises[r(Exercises.length)]} ${min}`);
console.log(`meditaition: ${mediMin}`);