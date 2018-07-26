'use strict';

// For the browser we just use a Image tag since we don't want to deal
// with CORS
module.exports = function(pixel_url, a, b, c, d, add_cache_buster) {
  let src = pixel_url + "?a=" + encodeURIComponent(a)
    + "&b=" + encodeURIComponent(b)
    + "&c=" + encodeURIComponent(c)
    + "&d=" + encodeURIComponent(d);

  if (add_cache_buster) {
    src += "&t=" + encodeURIComponent(Date.now()) + encodeURIComponent(Math.random());
  }

  return new Promise(function imgPromise(resolve, reject) {
    const img = new Image();
    img.onload = function imgOnLoad() { resolve(this) };
    img.onerror = function imgOnError() { reject() };
    img.src = src;
  });
};
