function r(max) {
    return Math.floor(Math.random() * max);
}
let Books = [
"Wuthering Heights",
    "Pride and Prejudice",
    "Java Network Programming",
    "Night",
    "Outliers",
    "Great Expectations",
    "Hamlet",
    "Shell Seekers",
    "Introduction to Electrodynamics",
    "Pafko At the Wall",
    "50 Great Myths of Popular Psychology",
    "College Biology",
    "Spanish Dictionary",
    "Mr. Hurtado's book",
    "Hacking: the art of exploitation",
    "HTML CSS QuickStart Guide",
    "A Brand New You",
    "365 Days discipline",
    "The Road to React",
    "Encyclopedia of Machine Learning and Data Mining",
    "Critique and Pure Reason"

    ]


console.log(`Read ${Books[r(Books.length)]}`);