function r(max) {
    return Math.floor(Math.random() * max);
}

var courses = [
    "AP Psychology",
    "APES",
]


let course = courses[r(courses.length)];

let psychNum = 1 + r(9);
let psychChapter = 0;
let pquestionNum = 0;
var psychBooks = [

]

switch(psychNum){
    case 1:
        psychChapter = 1+r(14);
        pquestionNum = 1+r(15);
break;
    case 2:
        psychChapter = `Practice test ${1+r(2)}`;
        pquestionNum = 1+r(100);
break;
    case 3:
        psychChapter = 5+r(13);
        pquestionNum = 1+r(10);
break;
    case 4:
        psychChapter = 5+r(13);
        pquestionNum = 1+r(10);
break;
    case 5:
        psychChapter = 1+r(4);
        pquestionNum = 1+r(100);
break;
    case 6:
        psychChapter = 1+r(16);
        pquestionNum = 1+r(15);
break;
    case 7:
        psychChapter = 1+r(85);
        pquestionNum = 1+r(3);
break;
    case 8:
        psychChapter = "N/A";
        pquestionNum = 1+r(500);
break;
    case 9:
        psychChapter = 5+r(13);
        pquestionNum = 1+r(15);
break;


}

let apesNum = 1 + r(7); 
let esChapter = 0;
let equestionNum = 0;

switch(apesNum){
    case 1:
        esChapter = 3+r(9);
        equestionNum = 1+r(10);
break;
    case 2:
        esChapter = 1+r(9);
        equestionNum = 1+r(20);
break;
    case 3:
        esChapter = 5+r(14);
        equestionNum = 1+r(20);
break;
    case 4:
        esChapter = 1+r(7);
        equestionNum = 1+r(20);
break;
    case 5:
        esChapter = 3+r(9);
        equestionNum = 1+r(17);
break;
    case 6:
        esChapter = 1+r(9);
        equestionNum = 1+r(13);
        break;
    case 7:
        esChapter = 1+r(3);
        equestionNum = 1+r(100);
        break;
}

if(course == "AP Psychology"){
    console.log(
`AP Psychology
Book ${psychNum}
Chapter ${psychChapter}
Question ${pquestionNum}`);
}
else if(course == "APES"){
    console.log(    
`APES
Book ${apesNum}
Chapter ${esChapter}
Question ${equestionNum}`);
}




