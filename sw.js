/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/index.css",
    "revision": "8734e36a88d25ed46a73297d03621b1f"
  },
  {
    "url": "db.json",
    "revision": "d7991964e1d469fbc4fb6d01eade8882"
  },
  {
    "url": "images/manifest/icon-192x192.png",
    "revision": "1b4ff0940763a7bf382c0f2c3250341b"
  },
  {
    "url": "images/manifest/icon-512x512.png",
    "revision": "be49c25d989daa06e2709e54d0dea4a3"
  },
  {
    "url": "index.html",
    "revision": "7902f3b86875b725c22673d7aac1f172"
  },
  {
    "url": "js/app.js",
    "revision": "415237091b24ed94e7e85afc72160e2d"
  },
  {
    "url": "js/components/list/list.js",
    "revision": "00633c0ba9fd6db3f498302fd1af79d7"
  },
  {
    "url": "js/components/queue/queue.js",
    "revision": "66f80b425138aa163d063627562ce955"
  },
  {
    "url": "js/connection.js",
    "revision": "596c93897e34c24588b6f659aaeaec2c"
  },
  {
    "url": "manifest.json",
    "revision": "50d35b70cafc74c663a9dce6e4105996"
  },
  {
    "url": "package.json",
    "revision": "ce5048fb522030faadc1bb90ba42f5fa"
  },
  {
    "url": "workbox-config.js",
    "revision": "15b486a7da95ee8fad80e476e07e76e4"
  },
  {
    "url": "workbox-v4.2.0/workbox-background-sync.dev.js",
    "revision": "80e2fd2bee18caff1589ef418a187b34"
  },
  {
    "url": "workbox-v4.2.0/workbox-background-sync.prod.js",
    "revision": "d40937049053994d22e8054e8e1a11e0"
  },
  {
    "url": "workbox-v4.2.0/workbox-broadcast-update.dev.js",
    "revision": "c480a817c366c3bd301e3ae760e09019"
  },
  {
    "url": "workbox-v4.2.0/workbox-broadcast-update.prod.js",
    "revision": "9abc26a68b7d04adaef5b0e1f65db551"
  },
  {
    "url": "workbox-v4.2.0/workbox-cacheable-response.dev.js",
    "revision": "8d235dafdf594ea284f79933f735ba51"
  },
  {
    "url": "workbox-v4.2.0/workbox-cacheable-response.prod.js",
    "revision": "ba4812c8fbb6cea65d6d5983fefa9b44"
  },
  {
    "url": "workbox-v4.2.0/workbox-core.dev.js",
    "revision": "aefb82968b5a50084b10a705f3420f0d"
  },
  {
    "url": "workbox-v4.2.0/workbox-core.prod.js",
    "revision": "5eb85a3eb44105994e5c244fdf2e3715"
  },
  {
    "url": "workbox-v4.2.0/workbox-expiration.dev.js",
    "revision": "8e63af5416b2e8d375a7f98e1ba1e3cf"
  },
  {
    "url": "workbox-v4.2.0/workbox-expiration.prod.js",
    "revision": "2c9c98b7b9ba5311ff55ad06f43aee36"
  },
  {
    "url": "workbox-v4.2.0/workbox-navigation-preload.dev.js",
    "revision": "448e81f55027ed4d0bccc681f6ec3bd8"
  },
  {
    "url": "workbox-v4.2.0/workbox-navigation-preload.prod.js",
    "revision": "6ccd5c4fe0095ea40832c8f7cf527b87"
  },
  {
    "url": "workbox-v4.2.0/workbox-offline-ga.dev.js",
    "revision": "d51e36837401844efcd2d91946d3bef2"
  },
  {
    "url": "workbox-v4.2.0/workbox-offline-ga.prod.js",
    "revision": "5c9e8650ee5348460927aa4b7a6fdd5f"
  },
  {
    "url": "workbox-v4.2.0/workbox-precaching.dev.js",
    "revision": "5481f0e28be68bec21b0500f42994ddf"
  },
  {
    "url": "workbox-v4.2.0/workbox-precaching.prod.js",
    "revision": "3467532e610e05ce75e39d5548ab2571"
  },
  {
    "url": "workbox-v4.2.0/workbox-range-requests.dev.js",
    "revision": "c3a14830b83ca20f61298a859158d78a"
  },
  {
    "url": "workbox-v4.2.0/workbox-range-requests.prod.js",
    "revision": "ca78d83b4ad61361b0d56af861ba9e96"
  },
  {
    "url": "workbox-v4.2.0/workbox-routing.dev.js",
    "revision": "153ce90009642fff5dd0e72b3b54ade3"
  },
  {
    "url": "workbox-v4.2.0/workbox-routing.prod.js",
    "revision": "e1bbba0c4b7d8fb7ece664662f7aeb98"
  },
  {
    "url": "workbox-v4.2.0/workbox-strategies.dev.js",
    "revision": "87f4abe75fe616ac56a79b5408696be8"
  },
  {
    "url": "workbox-v4.2.0/workbox-strategies.prod.js",
    "revision": "ef6121db4ba3c816a265f3c579af6ee4"
  },
  {
    "url": "workbox-v4.2.0/workbox-streams.dev.js",
    "revision": "157ecaa9eac0a6c87568d44a816d907e"
  },
  {
    "url": "workbox-v4.2.0/workbox-streams.prod.js",
    "revision": "67b2d2940bee2489f3db7829520fdee7"
  },
  {
    "url": "workbox-v4.2.0/workbox-sw.js",
    "revision": "0a440db84aaced0c9a41976a85e6bfb1"
  },
  {
    "url": "workbox-v4.2.0/workbox-window.dev.umd.js",
    "revision": "bc6003235a052c0955807a97f0eac222"
  },
  {
    "url": "workbox-v4.2.0/workbox-window.prod.umd.js",
    "revision": "a1c4b9c76113565814cd84603498edbd"
  },
  {
    "url": "node_modules/idb/build/esm/index.js",
    "revision": "1744c78524339333fc1a296a8d11baf9"
  },
  {
    "url": "node_modules/idb/build/esm/chunk.js",
    "revision": "c425e70eed99680fd3f14b1f70580f8a"
  },
  {
    "url": "node_modules/lit-element/lib/css-tag.js",
    "revision": "88a7776dc45a2f5f5a2a99b144d49075"
  },
  {
    "url": "node_modules/lit-element/lib/decorators.js",
    "revision": "aa875a7b763b574cfce40b684b733eb3"
  },
  {
    "url": "node_modules/lit-element/lib/updating-element.js",
    "revision": "2276cf333bd0a08bd8ae34783f36aa4c"
  },
  {
    "url": "node_modules/lit-element/lit-element.js",
    "revision": "72433c8e2d5d81583b7af68bad4822d6"
  },
  {
    "url": "node_modules/lit-html/directives/async-append.js",
    "revision": "20e3f940ebfcbf1fd1c3ff930140478c"
  },
  {
    "url": "node_modules/lit-html/directives/async-replace.js",
    "revision": "7732ef7434ee0095decce950f416bff8"
  },
  {
    "url": "node_modules/lit-html/directives/cache.js",
    "revision": "8aa0c9b2096899239e163a0727362c6f"
  },
  {
    "url": "node_modules/lit-html/directives/class-map.js",
    "revision": "13fd443f5b030395790886e21fa7ef6b"
  },
  {
    "url": "node_modules/lit-html/directives/guard.js",
    "revision": "ad09d68d2035c335d3be91e78a390ec7"
  },
  {
    "url": "node_modules/lit-html/directives/if-defined.js",
    "revision": "0b45cc46b88bc39118f14369e7f9141e"
  },
  {
    "url": "node_modules/lit-html/directives/repeat.js",
    "revision": "a3ed38e564c97093741ed7fe6ab53d1d"
  },
  {
    "url": "node_modules/lit-html/directives/style-map.js",
    "revision": "52f71857303971de342219f86e1be27c"
  },
  {
    "url": "node_modules/lit-html/directives/unsafe-html.js",
    "revision": "ff818bc767837badf6765e48c3903154"
  },
  {
    "url": "node_modules/lit-html/directives/until.js",
    "revision": "ee1eb6e410fa9920673890aece12b517"
  },
  {
    "url": "node_modules/lit-html/lib/async-append.js",
    "revision": "e72ae444630172678a2ce51dbf52beb6"
  },
  {
    "url": "node_modules/lit-html/lib/async-replace.js",
    "revision": "08d3c1a2322c52e2689758fb0bd6c912"
  },
  {
    "url": "node_modules/lit-html/lib/default-template-processor.js",
    "revision": "e96dc25c4a6ab961d383723b243bacb1"
  },
  {
    "url": "node_modules/lit-html/lib/directive.js",
    "revision": "1d0d4dd4117349ba63339aee90963f44"
  },
  {
    "url": "node_modules/lit-html/lib/dom.js",
    "revision": "45322140ad6ad2789e8ebeb95eec59f3"
  },
  {
    "url": "node_modules/lit-html/lib/lit-extended.js",
    "revision": "d24daec20065370d69db1eea3ca14252"
  },
  {
    "url": "node_modules/lit-html/lib/modify-template.js",
    "revision": "19cd46629fac6601423169f538f5b5ba"
  },
  {
    "url": "node_modules/lit-html/lib/part.js",
    "revision": "ffd11b35ced31f865d8381f3585892df"
  },
  {
    "url": "node_modules/lit-html/lib/parts.js",
    "revision": "ffdc54cd7f09acb476c53d96c99b0a99"
  },
  {
    "url": "node_modules/lit-html/lib/render-options.js",
    "revision": "b135ca8c29cdf7d1e3d0761b692e1663"
  },
  {
    "url": "node_modules/lit-html/lib/render.js",
    "revision": "e22a39942d0d752076163c996cf8fc56"
  },
  {
    "url": "node_modules/lit-html/lib/repeat.js",
    "revision": "8472ee5fdd935aa72259321a05f9471f"
  },
  {
    "url": "node_modules/lit-html/lib/shady-render.js",
    "revision": "6f7e199cd1cf7c2ae9bf6eba7a8c12c7"
  },
  {
    "url": "node_modules/lit-html/lib/template-factory.js",
    "revision": "dcdc52b73ba1f464ece3387ab1ce1b8d"
  },
  {
    "url": "node_modules/lit-html/lib/template-instance.js",
    "revision": "6c9495fce172762a92590b384bb4d3c3"
  },
  {
    "url": "node_modules/lit-html/lib/template-processor.js",
    "revision": "da7fb57119a10d43468d581552ceee39"
  },
  {
    "url": "node_modules/lit-html/lib/template-result.js",
    "revision": "692e28fbf475a700fcb68ebecfe37741"
  },
  {
    "url": "node_modules/lit-html/lib/template.js",
    "revision": "aa4ec6a7762d526e15f7c34b4e06c9c4"
  },
  {
    "url": "node_modules/lit-html/lib/unsafe-html.js",
    "revision": "68d76f033adbaf4fea06ad13cf0980ce"
  },
  {
    "url": "node_modules/lit-html/lib/until.js",
    "revision": "5c149fcee4354ebda36af2e9bb63a79a"
  },
  {
    "url": "node_modules/lit-html/lit-html.js",
    "revision": "b0f1b842794a5026a27829356f2a26ce"
  },
  {
    "url": "node_modules/lit-html/polyfills/template_polyfill.js",
    "revision": "0f0860f25b55c688dd6f1bd5685a824c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
