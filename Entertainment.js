function r(max) {
    return Math.floor(Math.random() * max);
}


    

var events = [
    "Video",
    "Hearthstone",
    "Onmyoji",
    "lol braum",
    "BF V",
    "BF 1", 
    "Minecraft",
    "Most wanted"
] 

console.log(`${events[r(events.length)]}`);


let min = r(120) + 1;

console.log(` ${min} min`);