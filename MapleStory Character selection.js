function r(max) {
    return Math.floor(Math.random() * max);
}

var characters = [
    "Lara",
    "Kain",
    "Adele",
    "Hoyoung",
    "Pathfinder",
    "Ark",
    "Illium",
    "Cadena",
    "Aran",
    "Evan",
    "Mercedes",
    "Phantom",
    "Mihile",
    "Illuminous",
    "Cygrus Knights",
    "Shade",
    "Resistance",
    "Dual Blade",
    "Canonneer",
    "Explorers",
    "Demon",
    "Xanon",
    "Kaiser",
    "Angelier Buster",
    "Kinesis",
    "Kanna",
    "Jett",
    "Hayato",
]

console.log(`${characters[1 + r(characters.length)]}`);