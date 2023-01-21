function r(max) {
    return Math.floor(Math.random() * max);
}
let CollegeWorks = [
    "Intro to Modern Algebra",
    "Calculus III",
    "Intro to Prob & Stat",
    "Data Structures",
    "Software Engineering",
    "Intro Oper Syst & Networking",
    // "Intro to Cognitive Science"
    ]
let DailyTodo = [
        "Startup",  
        "Scaling",
        "Volunteering(Teals, eCybermission)",
        "GRE Training",
        "Creative Writing",
        "Philosophy",
        "Spanish",
        "Meditation",
        "1hourWorkout",
        "TransferApplication",
        // "Guitar1Hour",
        "Competition1Hour",
        "Data Privacy",
        ]




console.log(` ${r(2)+1}`);
console.log(` ${CollegeWorks[r(CollegeWorks.length)]}`);
console.log(` ${DailyTodo[r(DailyTodo.length)]}`);