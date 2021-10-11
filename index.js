//01

var fs = require("fs");
console.log("c'est parti pour la recherche :");

fs.stat("jour07.txt", function (err,stats) {
    if (err) {
        return console.error(err);
    }

console.log(stats);
console.log("Et voilà ! Voyons le résultat");

if (stats.isFile())
console.log("c'est un fichier !");
});

fs.readFile("jour07.txt", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("lecture : " + data.toString());
    console.log("lecture : " + data.toString());
});

fs.unlink("jour07.txt", function (path,callback) {
    if (path) {
        console.log(path)
        console.log(callback)
    }
})

//02

var array = [1,2,3,4,5]
var double = array.map(function(num) {
    return num * 2;
});

console.log(double)

//03 

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]
console.log(longNames)

var shortNames = longNames.map(function(long){
var name= {firstName: `${long.firstName}`}
return name
});

console.log(shortNames)

//04

var array = [1, "toto", 34, "javascript", 8]
console.log(array)
var numbers = array.filter(function(num){
    return Number(num);
})
console.log(numbers)

//05

var numbers = [1,2,3,4,5,6,7,8]
var even = numbers.filter(function(num){
    return num%2===0;
});

console.log(even)

//06 

var cakes =
[
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

console.log(cakes)

var chocolat = cakes.filter(function(gateau) {
    return gateau.flavor === "chocolate"
});
console.log(chocolat)

var SoldOut = chocolat.map(function(gateau) {
    return gateau.status = " sold out !"
});
console.log(chocolat) 