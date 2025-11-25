import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('chiyaumlinalagyo', () => {
  console.log('oe gas banda gar na yar xito');
  setTimeout(() => {
    console.log('gas banda vayo dost yar');
  }, 3000);
});
myEmitter.emit('chiyaumlinalagyo');