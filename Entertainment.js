function r(max) {
    return Math.floor(Math.random() * max);
}

let bind = r(2);

if(bind == 0){
    console.log('Binding');
}

else{

    console.log('Non-Binding');
 
}

var events = [
    "Videos",
    "LOL",
    "Minecraft",
    "Maple Story",
    "Hearthstone",
    "Fallout4",
    "Anime",
    "Borderlands3",
]

console.log(`${events[r(events.length)]}`);