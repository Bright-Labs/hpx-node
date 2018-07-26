'use strict';
const got = require('got');

module.exports = function(pixel_url, a, b, c, d, add_cache_buster) {
  let src = pixel_url + "?a=" + encodeURIComponent(a)
    + "&b=" + encodeURIComponent(b)
    + "&c=" + encodeURIComponent(c)
    + "&d=" + encodeURIComponent(d);

  if (add_cache_buster) {
    src += "&t=" + encodeURIComponent(Date.now()) + encodeURIComponent(Math.random());
  }
  return got(src);
}
