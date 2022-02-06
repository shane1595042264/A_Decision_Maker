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
"Pafko At the Wall",
"50 Great Myths of Popular Psychology",
"Clear the confederate Way",
"College Biology",
]

var Computer_Books = [
    "Eloquent JavaScript",
    "Road to React",
    "Python Algorithms",
    "HTML CSS QuickStart Guide",
    "Advanced Algorithms and Data Structures in Action",
    "Machine Learning for Algorithmic trading",
    "Java Network Programming",
    "Beginning Autohotkey Hotstrings",
    "Wordpress missing manual"
]



let workminute = 1 + r(300);

let min = r(120) + 1;
let bind = r(2);
if(bind == 0){
    console.log('Binding');

}

else if(bind == 1){

    console.log('Non-Binding');
 
}


    let a = r(4);
    if(a==0){
        let b = r(2);
        if(b == 0){
            console.log(`${Courses[r(Courses.length)]} coursework`);
            let min = r(120) + 1;

            console.log(`${min} min`);

        }
        else{
            let c = r(2);
            if(c == 0){
                console.log('competition');
                let min = r(120) + 1;

                console.log(`${min} min`);
            }
            else{console.log('Read College Biology');
              let min = r(120) + 1;

                console.log(`${min} min`);}}
    }
    else if(a==1){  
        let d = r(3);
        if(d == 0){
            console.log(`Read ${Books[r(Books.length)]}`);
            let min = r(120) + 1;

            console.log(`${min} min`);
        }
        else if(d == 1){
            console.log(`Read ${Computer_Books[r(Computer_Books.length)]}`);
            let min = r(120) + 1;

            console.log(`${min} min`);
        }


        else{
            console.log(`${workminute} min work`);
        }

    }
    else if(a==2){
        console.log('catch up APES');
        console.log(`${min} min`);
    }

    else if(a==3){
        console.log('Computer Science Course');
        console.log(`${min} min`);
    }

 

    let mediMin = r(min) + 1;
    console.log('Meditation ' + mediMin);