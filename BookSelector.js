function r(max) {
    return Math.floor(Math.random() * max);
}

var Books = [
    "Wuthering Heights",
    "Pride and Prejudice",
    "American Government",
    "Night",
    "Outliers",
    "Great Expectations",
    "Hamlet",
    "Shell Seekers",
    "Introduction to Electrodynamics",
    "Animal Farms",
    "Pafko At the Wall",
    "50 Great Myths of Popular Psychology",
    "College Biology"
    ]

    console.log(`Read ${Books[r(Books.length)]}`);