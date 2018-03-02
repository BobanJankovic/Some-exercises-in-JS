var names = ["ana", "marija", "ana", "bojan", "ana", "david", "sofija", "ana", "sofija"];


var ana = [];
var marija = [];
var bojan = [];
var sofija = [];
var david = [];

names.forEach(function (e) {
    switch (e) {
        case "ana":
            ana.push(e);
            break;
        case "marija":
            marija.push(e);
            break;
        case "bojan":
            bojan.push(e);
            break;
        case "sofija":
            sofija.push(e);
            break;
        case "david":
            david.push(e);
            break;

    }
});

console.log("ana : " + ana.length);
console.log("marija : " + marija.length);
console.log("bojan : " + bojan.length);
console.log("sofija : " + sofija.length);
console.log("david : " + david.length);






