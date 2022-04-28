function r(max) {
    return Math.floor(Math.random() * max);
}

var champ =[
    "veigar",
    "braum",
    "ezreal",
    "karthus",
    "Support540",
]
var lol = [
`league ${champ[r(5)]}`,
"hearthstone",
"onmyoji",  
"Video (until you are lagged)",
"Minecraft Hardcore"
]
console.log(`${lol[r(lol.length)]}`);