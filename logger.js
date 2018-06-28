const EventEmitter = require('events');
var url = 'http://myblog.net/io';

class Logger extends EventEmitter {
	
	log(message){
		console.log(message);
		
		this.emit('messageLogged',{id: 1, url : 'http://google.com'});
	}
}

module.exports = Logger;