

function r(max) {
    return Math.floor(Math.random() * max);
}

var Courses = [    
"Logic and Algorithm",
"Arts & Society: Visual Arts ",
"Data Structures and Algorithms",
"Literature & Culture ",
"Matrices & Linear Algebra",
"Minecraft Hardcore"
]

var Books = [
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

var Computer_Books = [  
    "Eloquent JavaScript",
    "Road to React",
    "HTML CSS QuickStart Guide",
    "Advanced Algorithms and Data Structures in Action",
    "Java Network Programming",
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

            console.log(`${min} min`);

        }
        else{
            let c = r(2);
            if(c == 0){
                console.log('competition');

                console.log(`${min} min`);
            }
            else{console.log("365 Days Self Discipline");

                console.log(`${min} min`);}}
    }
    else if(a==1){  
        let d = r(3);
        if(d == 0){
            console.log(`Read ${Books[r(Books.length)]}`);


            console.log(`${min} min`);
        }
        else if(d == 1){
            console.log(`Read ${Computer_Books[r(Computer_Books.length)]}`);

            console.log(`${min} min`);
        }


        else{
            console.log(`${workminute} min work`);
        }

    }
    else if(a==2){
        console.log('SAT');
        console.log(`${min} min`);
    }

    else if(a==3){
        console.log(`Read ${Computer_Books[r(Computer_Books.length)]}`);
        console.log(`${min} min`);
    }   

 

    let mediMin = r(min)+1;
    console.log('Meditation ' + mediMin);   