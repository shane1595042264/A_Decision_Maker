function r(max) {
    return Math.floor(Math.random() * max);
}

var champ =[
    // "veigar",
    // "braum",
    // "ezreal",
    "karthus",
    // "Support540",    
]

var lol = [
`league ${champ[r(champ.length)]}`,
"hearthstone",    
]
console.log(`${lol[r(lol.length)]}`);