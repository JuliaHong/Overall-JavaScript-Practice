var events = require('events');
var util = require('util');


var Person = function(name){
	this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var chloe = new Person('chloe');
var mary = new Person('mary');


var people = [james,chloe,mary];

people.forEach(function(person){
	person.on('speak',function(msg){
		console.log(person.name+ ' said '+msg);
	});
});

james.emit('speak','hey dudes');
mary.emit('speak','what\'s up');
