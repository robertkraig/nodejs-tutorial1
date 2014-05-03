var events = require('events');

var ee = new events.EventEmitter();

ee.on('someEvent', function(){
	console.log('event has occured');
});

ee.emit('someEvent');