"use strict";

console.log("i am in main.js");
/*
let test = require('./test.js');

console.log("test", test);
console.log("test.happy", test.getHappy());

let MathModule = require('./math.js');
console.log("MathModule", MathModule);
console.log("adding", MathModule.adding(3,5));
*/


///// real stuff
// let $ = require('lib/node_modules/jquery/dist/jquery');
let earth = require('./earth'),
	jupiter = require('./jupiter'),
	mars = require('./mars'),
	mercury = require('./mercury'),
	neptune = require('./neptune'),
	saturn = require('./saturn'),
	uranus = require('./uranus'),
	venus = require('./venus');

let solarSystem = { earth,
					jupiter,
					mars,
					mercury,
					neptune,
					saturn,
					uranus,
					venus
				};
let a = $("#div-earth"),
	b = $("#div-jupiter"),
	c = $("#div-mars"),
	d = $("#div-mercury"),
	e = $("#div-neptune"),
	f = $("#div-saturn"),
	g = $("#div-uranus"),
	h = $("#div-venus");


solarSystem.earth(a);
solarSystem.jupiter(b);
solarSystem.mars(c);
solarSystem.mercury(d);
solarSystem.neptune(e);
solarSystem.saturn(f);
solarSystem.uranus(g);
solarSystem.venus(h);


