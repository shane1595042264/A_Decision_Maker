function r(max) {
    return Math.floor(Math.random() * max);
}

var Exercises = [
    "Breakdance",
    "Locking",
    "Hip-Hop",
    "Popping",
    "Basketball"
]

let min = r(120) + 1;

console.log(`${Exercises[r(Exercises.length)]} ${min}`);