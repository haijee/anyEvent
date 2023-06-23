# event-action
一个简单的发布订阅器

# install

```bash
npm install  event-action --save

```

# usage

```js
import Events from 'event-action'

const events = new Events();

// 订阅
events.on('event', function (args) {
 //
});

// 发布
events.emit('event', 'args');

// 关闭
events.off('event', function (args) {
 //
});

```



