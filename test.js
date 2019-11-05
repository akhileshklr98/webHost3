var events = require('events');
var eventEmitter = new events.EventEmitter();

var doo = function open()
{
  console.log('door opened');
}
var dc = function close()
{
  console.log('door closed');
}
eventEmitter.on('doorOpen', doo);
eventEmitter.on('doorClose', dc);
var door ='doorOpen';
eventEmitter.emit(door);
door ='doorClose';
eventEmitter.emit(door);

