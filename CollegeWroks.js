function r(max) {
    return Math.floor(Math.random() * max);
}
let CollegeWorks = [
    "Intro to Modern Algebra",
    // "Data Structures",
    "Data Privacy",
    ]
let TODO = [
        "GRE Training",
        "Spanish",
        "1hourWorkout",
        "Application",
        // "Guitar1Hour",
        ]




console.log(` ${r(2)+1}`);
console.log(` ${CollegeWorks[r(CollegeWorks.length)]}`);
console.log(` ${TODO[r(TODO.length)]}`);