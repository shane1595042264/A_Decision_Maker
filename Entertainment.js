function r(max) {
    return Math.floor(Math.random() * max);
}

var events = [
    "Videos",
    "LOL",
    "Minecraft",
    "Maple Story",
    "Hearthstone",
    "Fallout4",
    "Anime",
]

console.log(`${events[r(events.length)]}`);