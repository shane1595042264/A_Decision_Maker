function r(max) {
    return Math.floor(Math.random() * max);
}

var Books = [
    "The Bean Trees",
    "Wuthering Heights",
    "How Democratic is the American Constitution",
    "Pride and Prejudice",
    "American Government",
    "Traditions and Encounters",
    "Night",
    "Outliers",
    "Great Expectations",
    "Hamlet",
    "Blink",
    "Shell Seekers",
    "Introduction to Electrodynamics",
    "Animal Farms",
    "Pafko At the Wall",
    "50 Great Myths of Popular Psychology",
    "Clear the confederate Way",
    "College Biology",
    ]

    console.log(`Read ${Books[r(Books.length)]}`);