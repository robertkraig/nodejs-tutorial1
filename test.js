var fs = require('fs');
var text = null;

fs.readFile("test.txt", function(err, buffer){
	text = buffer.toString();
	console.log(text);
});

