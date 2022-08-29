function r(max) {
    return Math.floor(Math.random() * max);
}
let Works = [
"River Project (Rust)",
"TEALS Program (Python)",
"Competitive Programming (C++)",
"Web Development (HTML, CSS, Javascript)",
"Cyber Security (Hacking)",
    ]


console.log(` ${Works[r(Works.length)]}`);