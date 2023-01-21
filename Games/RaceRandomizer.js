function r(max) {
    return Math.floor(Math.random() * max);
}

var race =[
    "Beast",
    "Demon",
    "Dragon",
    "Murloc",
    "Pirate",
    "Totem",
    "Elemental",
    "Undead",
    "Neutral"
]

var Hearthstone = [
`league ${race[r(race.length)]}`
]
console.log(`${Hearthstone[r(Hearthstone.length)]}`);