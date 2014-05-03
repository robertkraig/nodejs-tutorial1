var http = require('http');
var events = require('events');
var url = require('url');
var ee = new events.EventEmitter();
var handlebars = require('handlebars');
var fs = require('fs');

var server = http.createServer();

function render(filename, req, res, model)
{
	fs.readFile('views/' + filename, function(err, buffer)
	{
		var template = handlebars.compile(buffer.toString());
		var body = template(model);
		res.write(body);
		res.end();
	});
}

ee.on('/', function(req, res)
{
	var model = {
		title:'Home Page',
		data:[
			{
				name: 'bob1',
				age:20
			},
			{
				name: 'bob2',
				age:24
			}
		]
	};
	render('index.html', req, res, model);
});

ee.on('/about', function(req, res)
{
	render('about.html', req, res, {});
});

ee.on('/contact', function(req, res)
{
	render('contact.html', req, res, {});
});

server.on('request', function(req, res)
{
	// trigger-event-name
	var path = url.parse(req.url).pathname;

	ee.emit(path, req, res);
});

server.listen(3000);