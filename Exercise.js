function r(max) {
    return Math.floor(Math.random() * max);
}

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
    "Cantoneses",   
    "Spanish",
    "German",
    "Latin",
    "Japanese",
    "Russian",
    "Knot-practicing",
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

let min = r(120) + 1;

console.log(`${Exercises[r(Exercises.length)]} ${min}`);