function r(max) {
    return Math.floor(Math.random() * max);
}


    

var events = [
    "Video",
    "Hearthstone",
    "Onmyoji",
    "lol braum \ndouvleplus \nmark321654",
    "BF V",
    "BF 1", 
    "Minecraft",
    "lol veigar \nJungler540 \nMark321654",
    "Karthus \nTopDouvleplus \nMark321654.",
    "Ezreal \nADC540 \nMark321654."
] 

console.log(`${events[r(events.length)]}`);


let min = r(120) + 1;

console.log(` ${min} min`);