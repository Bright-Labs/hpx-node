# hpx-node
HPX bindings for Node

Fire pixels to the [Hacker Pixel Stack](https://github.com/Bright-Labs/hpx).

## Install

```
$ npm install --save hpx
```


## Usage

```js
const hpx = require('hpx');

hpx("http://mypixel.cloudfront.net/1x1.gif", "first", "second",  "third", "fourth", true);
```


## API

### hpx(pixel, a, b, c, d, cache_buster)

Returns a `Promise` for the pixel fire.  In many use cases it's fire and forget.

#### pixel

The pixel URL provided by HPX stack.

#### a,b,c,d

The parameters to the pixel

#### cache_buster

Add a cache_buster
