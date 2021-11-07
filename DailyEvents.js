function r(max) {
    return Math.floor(Math.random() * max);
}

var Courses = [    
"Psychology",
"Environmental Science",
"English Literature",
"Spanish",
"Math",
"CS",
]

var Books = [
"The Bean Trees",
"Fahrenheit 451",
"Wuthering Heights",
"Poisonwood Bible",
"Killing a Mocking Bird",
"Hamlet"
]

var Computer_Books = [
    "Eloquent JavaScript",
    "Road to React",
    "Python Algorithms",
    "HTML CSS QuickStart Guide",
    "Advanced Algorithms and Data Structures in Action"
]

var Exercises = [
    "Breakdance",
    "Locking",
    "Hip-Hop",
    "Popping",
    "Basketball"
]


let bind = r(2);

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
                console.log('AMC12');
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
else{
    console.log(`${Exercises[r(Exercises.length)]}`);

}