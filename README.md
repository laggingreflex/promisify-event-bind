# promisify-event-bind

Bind [promisify-event] to all EventEmitter's `.on` methods

[promisify-event]: https://github.com/inikulin/promisify-event

## Install
```
npm install promisify-event-bind
```

## Usage
```js
const promisifyAll = require('promisify-event-bind');

promisifyAll(server);

server.on('listening').then(() => {
  // ...
})
```

**Note** that since this is a promise it can **only** be **resolved** [***once***][once] (which is what it [does][under-the-hood]).

It's good for one-off events:
```js
const socket = await io.on('connection');
```
Not for events that'll fire multiple times with possibly different values:
```js
socket.on('message', data => {...});
```


[once]: https://nodejs.org/api/events.html#events_emitter_once_eventname_listener
[under-the-hood]: https://github.com/inikulin/promisify-event/blob/master/index.js#L22

