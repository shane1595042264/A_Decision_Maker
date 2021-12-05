function r(max) {
    return Math.floor(Math.random() * max);
}




var events = [
    "LOL",
    "Minecraft",
    "Maple Story",
    "Hearthstone",
    "Fallout4",
    "Borderlands3",
    "BF 5",
    "anime",
    "Video"
] 

console.log(`${events[r(events.length)]}`);


let min = r(120) + 1;

console.log(` ${min} min`);