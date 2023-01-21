function r(max) {
    return Math.floor(Math.random() * max);
}

var champ =[
    "Top",
    "Jungle",
    "Mid",
    "Bottom",
    "Support",    
]

var lol = [
`league ${champ[r(champ.length)]}`
]
console.log(`${lol[r(lol.length)]}`);