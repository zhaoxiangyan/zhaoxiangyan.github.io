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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
    "url": "404.html",
    "revision": "5b9e76e7372a0028924e744b74b2fa15"
  },
  {
    "url": "assets/css/0.styles.9e5abc12.css",
    "revision": "2739da0424f5701096ed06a8d44075a8"
  },
  {
    "url": "assets/img/hosts.f85e5d76.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "assets/img/Javascript-DataType.8edde8e4.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/setupFiles-vs-setupFilesAfterEnv.3c351d96.png",
    "revision": "3c351d966b581a8cd71d5d2b307cee20"
  },
  {
    "url": "assets/js/10.6ccf41f3.js",
    "revision": "2310d591c459c869c5272238b3eef674"
  },
  {
    "url": "assets/js/11.194dae4d.js",
    "revision": "a896be9d8f8a6116711eace86cf63b8b"
  },
  {
    "url": "assets/js/12.56116fb5.js",
    "revision": "101844d3f54f1e941772e1c019b06316"
  },
  {
    "url": "assets/js/13.44d9e6bd.js",
    "revision": "225db371b1fe59a8436dd493c037bd91"
  },
  {
    "url": "assets/js/14.41e55c3d.js",
    "revision": "8c240dc8ddf3cfd4e3d1570bd8783849"
  },
  {
    "url": "assets/js/15.922b893d.js",
    "revision": "f8d963f3143c723e17702d0d4a61e775"
  },
  {
    "url": "assets/js/16.6abe7d48.js",
    "revision": "e935a4970afb14d6de4431f1ccf9cfed"
  },
  {
    "url": "assets/js/17.a1cae7c4.js",
    "revision": "1dd0e992d4f88311db9ac3876e924032"
  },
  {
    "url": "assets/js/18.21b3547b.js",
    "revision": "a0a19c1ea36093dbf156785793400407"
  },
  {
    "url": "assets/js/19.fe78dbaf.js",
    "revision": "7633fa668bd398133ff076a7dba34552"
  },
  {
    "url": "assets/js/2.2166725d.js",
    "revision": "2bb3f41cc807303963ccf72edfc73200"
  },
  {
    "url": "assets/js/20.f76225d2.js",
    "revision": "255ed63fadea5cf547ad27633d1b5ed2"
  },
  {
    "url": "assets/js/21.3ca9a8fe.js",
    "revision": "2a5976f87d4c145cb586a34930c4fbd0"
  },
  {
    "url": "assets/js/22.17d60ca3.js",
    "revision": "45e7c96f81c28aa3f50a7b58b1fc32db"
  },
  {
    "url": "assets/js/23.907d5aec.js",
    "revision": "d20cb9f87bc01fb49a674d7ab8c88a98"
  },
  {
    "url": "assets/js/24.61fc9281.js",
    "revision": "293fdcd91974e2e99773adadeec12ca3"
  },
  {
    "url": "assets/js/25.7611ff90.js",
    "revision": "607436193a02b2f4578796e92c66dc7b"
  },
  {
    "url": "assets/js/26.1fa27922.js",
    "revision": "91636e76d909562e9a800d6af210cfae"
  },
  {
    "url": "assets/js/27.cd6ba855.js",
    "revision": "b9c08af94ce3aff502146f0f2d9a43e4"
  },
  {
    "url": "assets/js/28.d26f372b.js",
    "revision": "e4d977177ed511374fc52ed47158fdcd"
  },
  {
    "url": "assets/js/29.a9c55181.js",
    "revision": "b875808196d351fde5764d5b0ec59c84"
  },
  {
    "url": "assets/js/3.b32e13b7.js",
    "revision": "4d3dd16ad165a0bf33eb342787168a8d"
  },
  {
    "url": "assets/js/30.988d9090.js",
    "revision": "58c96c28317c52cd142957973f8a16d0"
  },
  {
    "url": "assets/js/31.b70e051e.js",
    "revision": "e471c1ce5522007fe79879819f3170ff"
  },
  {
    "url": "assets/js/32.d545b66c.js",
    "revision": "e8bb3908649414ba0fa56fa6d7e95fa1"
  },
  {
    "url": "assets/js/33.d659ad51.js",
    "revision": "4b3812f1bb1bb60840a04c5a426e7105"
  },
  {
    "url": "assets/js/34.9f03845f.js",
    "revision": "f2c9d59b50fa6f5e0b7eb1ddda251f70"
  },
  {
    "url": "assets/js/35.d5ec102c.js",
    "revision": "f12644a6dee7ee062c32e080ca8f5234"
  },
  {
    "url": "assets/js/36.f3f7a50e.js",
    "revision": "ccd385ede79eb675dd3fa345294c3b83"
  },
  {
    "url": "assets/js/37.8954ce22.js",
    "revision": "12644da4be18da852a48f04163696d4b"
  },
  {
    "url": "assets/js/38.13cf42a4.js",
    "revision": "f5828da0b9fa4e63abf2e957fca67c69"
  },
  {
    "url": "assets/js/39.31508417.js",
    "revision": "2ef158917fb89ec0245cc379d5cb7d0d"
  },
  {
    "url": "assets/js/4.c848ff80.js",
    "revision": "7fa66947079d45ae97dad0908e174f49"
  },
  {
    "url": "assets/js/5.afbdd2fa.js",
    "revision": "b997ca72bf5c54226037188cb0e1dca8"
  },
  {
    "url": "assets/js/6.ca86afd4.js",
    "revision": "7495063756fcfe900df796a02079ef86"
  },
  {
    "url": "assets/js/7.f44479fc.js",
    "revision": "f59aa50acb1b53cec67fc2e62ff4ec5a"
  },
  {
    "url": "assets/js/8.94b89b6d.js",
    "revision": "449ff70448c9a2a25d16973aa17c4940"
  },
  {
    "url": "assets/js/9.3497d61d.js",
    "revision": "1a0198644766b074535e1c47ad1519a5"
  },
  {
    "url": "assets/js/app.940fc152.js",
    "revision": "4a0e6b1ad1633941aef05566f8da86a5"
  },
  {
    "url": "flutter/dart.html",
    "revision": "14de74f2aba24f35b06af027871c8f63"
  },
  {
    "url": "flutter/index.html",
    "revision": "b942dbfc500bafa1749a045b0f742678"
  },
  {
    "url": "git/fix.html",
    "revision": "660c03e605cc1b807c882fd8d9332003"
  },
  {
    "url": "git/git-action.html",
    "revision": "f342dc84561a87466e14a773e3a11e97"
  },
  {
    "url": "git/git-flow.html",
    "revision": "7e3b70908c2ac7160f56689d4c370865"
  },
  {
    "url": "git/index.html",
    "revision": "374865cc0b73b90c39cbbdac84ef9d19"
  },
  {
    "url": "git/pull-request.html",
    "revision": "6395346fb385a5a441fe2c2d92c23a7e"
  },
  {
    "url": "hosts.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "index.html",
    "revision": "e78a34b9e785f2b84a9b83a8862beafd"
  },
  {
    "url": "Javascript-DataType.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "javascript/dependencies.html",
    "revision": "44bd58a8864cd63f2007085528e434a0"
  },
  {
    "url": "javascript/event-loop.html",
    "revision": "32ebed0a18850df18d64e28f02eb88ed"
  },
  {
    "url": "javascript/function.html",
    "revision": "bb03a4357b5d8e47d0c0b5f740de85e9"
  },
  {
    "url": "javascript/index.html",
    "revision": "fe1eb0dac2f3a601b44f26ae6778e7b9"
  },
  {
    "url": "javascript/operator.html",
    "revision": "e82dcb48678d152c5c12b949ea57e80f"
  },
  {
    "url": "javascript/shallow-deep-copy.html",
    "revision": "875633dab83016a6c868c026ad8b8bb8"
  },
  {
    "url": "javascript/this.html",
    "revision": "27959a8b41d267161d3ec04719881d6f"
  },
  {
    "url": "javascript/typescript.html",
    "revision": "5578794eb21acc246af9bf1cd472e54e"
  },
  {
    "url": "logo.png",
    "revision": "aca1cf8154f00a69c07b300d72204b2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "ec6e234baafe597f26ec6d5477edf5b2"
  },
  {
    "url": "mobile/index.html",
    "revision": "61795f3a784536b0b1a94fd61f84a032"
  },
  {
    "url": "node/dependencies.html",
    "revision": "ee6c99d6bca4ee0e7617feb2a19ae9b4"
  },
  {
    "url": "node/index.html",
    "revision": "11c5cbb912fe1c34135b7e8989fdb259"
  },
  {
    "url": "react/advanced.html",
    "revision": "1e16fb694045c1f190c98c786dcfa497"
  },
  {
    "url": "react/base.html",
    "revision": "5b78330798a4fba001e3873e18bd7a26"
  },
  {
    "url": "react/dependencies.html",
    "revision": "0402bc2092757e0e9130202a40b0b794"
  },
  {
    "url": "react/hooks.html",
    "revision": "98db2bfb3833e32b9535c6eb4219cc01"
  },
  {
    "url": "react/index.html",
    "revision": "94b86d845201071f667e8b9d59ee3c93"
  },
  {
    "url": "setupFiles-vs-setupFilesAfterEnv.png",
    "revision": "3c351d966b581a8cd71d5d2b307cee20"
  },
  {
    "url": "tool/index.html",
    "revision": "11af39791bd11b71e3d8e0d7669dbb60"
  },
  {
    "url": "tool/jest.html",
    "revision": "c18b25802c573790a6d8a61bbd04aa72"
  },
  {
    "url": "tool/tool.html",
    "revision": "16965b91dd99d16f016b24edb379f1ee"
  },
  {
    "url": "vue/framework.html",
    "revision": "b91c8689a21c9614644be09761d20b10"
  },
  {
    "url": "vue/index.html",
    "revision": "75bb9299fadf33ae128b82c50e6436fd"
  },
  {
    "url": "vue/scaffold.html",
    "revision": "61c577461a8cf58237cdbad145b8c309"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
