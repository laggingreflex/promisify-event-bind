var promisify = require('promisify-event');

module.exports = promisifyEventBind;

function promisifyEventBind(emitter) {
  var old = emitter.on.bind(emitter);
  emitter.on = function promisifiedOnHandler(event, listener) {
    if (listener) {
      return old(event, listener)
    } else {
      return new Promise(function(resolve) {
        old(event, resolve)
      });
    }
  }
  return emitter;
}
