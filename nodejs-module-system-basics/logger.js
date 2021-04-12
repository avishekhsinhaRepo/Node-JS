const EventEmitter = require('events');

class Logger extends EventEmitter {
    logMessage(message) {
        this.emit('messageLogged', { message: message });
    }

}
module.exports = Logger;
