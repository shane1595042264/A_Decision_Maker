function r(max) {
    return Math.floor(Math.random() * max);
}
let Sections = [
    "1.1",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "1.6",
    "1.7",
    "1.8",
    "1.9",
    "1.10",
    "2.1",
    "2.2",
    "2.3",
    "2.6",
    "3.1",
    "3.2",
    "4.2",
    "4.3",
    "4.4",
    "4.9",
    "5.1",
    "5.2",
    "5.6",
    "6.2",
    "6.3",
    ]

console.log(` ${Sections[r(Sections.length)]}`);