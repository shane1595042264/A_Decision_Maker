function r(max) {
    return Math.floor(Math.random() * max);
};



var Courses = [    
"Psychology",
"Environmental Science",
"English Literature",
"Spanish",
"Math",
"CS Course",
]



var Books = [
    "The Bean Trees",
    "Fahrenheit 451",
    "Wuthering Heights",
    "Poisonwood Bible",
    "Killing a Mocking Bird",
    "Hamlet",
    "Rapid Reading",
    "Environment: The Science Behind the Stories",
    "Outwitting the Devil",
    "YBOP",
    "Critique of Pure Reason",
    "Why Buddhism is True",
    "A Death in the Family",
    "Linear Algebra Done Right",
    "Blink",
    "Flatland",
    "The Interpretation of Dreams",
    "Wuthering Heights",
    "Principles",
    "Life 3.0",
    "War and Peace",
    "Beginning AutoHotkey Hotstrings"
]

var Computer_Books = [
    "Eloquent JavaScript",
    "Road to React",
    "Python Algorithms",
    "HTML CSS QuickStart Guide",
    "Advanced Algorithms and Data Structures in Action",
    "Machine Learning for Algorithm and trading"
]

var Exercises = [
    "Breakdance",
    "Locking",
    "Hip-Hop",
    "Popping",
    "Basketball"
]

let minute = 1 + r(120) + " min ";

let workminute = 1 + r(300);
let bind = r(3);

if(bind == 0){
    console.log('Binding');
}

else{

    console.log('Non-Binding');
 
}

let num = r(2);

if(num == 0){
    let a = r(2);
    if(a==0){
        let b = r(2);
        if(b == 0){
            console.log(`${Courses[r(Courses.length)]}`);

        }
        else{
            let c = r(2);
            if(c == 0){
                console.log('Competition');
            }
            else{console.log('College Application');}
        }
    }
    else{
        let d = r(2);
        if(d == 0){
            console.log(`Read ${Books[r(Books.length)]}`);
        }
        else{
            console.log(`Read ${Computer_Books[r(Computer_Books.length)]}`);
        }

    }
}
else if(bind == 1){
    console.log(`${minute + Exercises[r(Exercises.length)]}`);

}

else{
    console.log(`${workminute} work`);
}