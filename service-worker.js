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
    "revision": "1a663555e1996dfb178e9817ccd39656"
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
    "url": "assets/js/10.f5c11295.js",
    "revision": "4308d042feb2c3a1606c5ef53b9950d1"
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
    "url": "assets/js/14.16f89f51.js",
    "revision": "0e0702e032f31b5708bffbc0d8e15873"
  },
  {
    "url": "assets/js/15.f92274d8.js",
    "revision": "b0e098851d2c13804e402e95a6d17478"
  },
  {
    "url": "assets/js/16.6e83e542.js",
    "revision": "62d42f6682da87f8b1167e61446cc872"
  },
  {
    "url": "assets/js/17.a223af2b.js",
    "revision": "681f6f014e87c4757a1c67c1db383aa6"
  },
  {
    "url": "assets/js/18.1074b63e.js",
    "revision": "d755af224df9888dafcca61914a8bcf5"
  },
  {
    "url": "assets/js/19.0f10f30d.js",
    "revision": "6f84dece39015f20b142774f4e74009b"
  },
  {
    "url": "assets/js/2.2166725d.js",
    "revision": "2bb3f41cc807303963ccf72edfc73200"
  },
  {
    "url": "assets/js/20.d63b1c09.js",
    "revision": "6bc06f54c8ce62d67b544e4bdd240236"
  },
  {
    "url": "assets/js/21.41c65bd0.js",
    "revision": "335f0e926752867cd54fa766c3a636ba"
  },
  {
    "url": "assets/js/22.0cc15fc7.js",
    "revision": "0992d8964b2e5dc24cf342bb755ed07d"
  },
  {
    "url": "assets/js/23.e6442252.js",
    "revision": "825e2cbee1c76320d99de7b1809d7ca6"
  },
  {
    "url": "assets/js/24.7556fcca.js",
    "revision": "08bee8f3baea01a60185725bd4a542e3"
  },
  {
    "url": "assets/js/25.92bce9d8.js",
    "revision": "88cdc003974438a7204e5365c1671f7c"
  },
  {
    "url": "assets/js/26.c621d9ed.js",
    "revision": "5bd9c6abf1205ae7f16c8ec4e014c14e"
  },
  {
    "url": "assets/js/27.ef293aa9.js",
    "revision": "ca41e968f84f094ee6da8781466931f1"
  },
  {
    "url": "assets/js/28.0629d3cf.js",
    "revision": "77a68d022a784ae3d8a5f437c44bdc6d"
  },
  {
    "url": "assets/js/29.dfeeae22.js",
    "revision": "0dc36b42070f1435c4f9c39229785377"
  },
  {
    "url": "assets/js/3.b32e13b7.js",
    "revision": "4d3dd16ad165a0bf33eb342787168a8d"
  },
  {
    "url": "assets/js/30.83f6cc36.js",
    "revision": "3ebce0f97dfa526a5812bcf397096bfd"
  },
  {
    "url": "assets/js/31.1eecca4d.js",
    "revision": "c8f8e2ec663ce9cf22fe755a05e2a250"
  },
  {
    "url": "assets/js/32.7315d6ba.js",
    "revision": "d09996e1506fc81431456c1b6961c1a1"
  },
  {
    "url": "assets/js/33.b2a9eb6f.js",
    "revision": "8ff455bfd255451a2dd8a30af478c79c"
  },
  {
    "url": "assets/js/34.328aeb27.js",
    "revision": "bf80de8fd9c8469a7df2f82058710877"
  },
  {
    "url": "assets/js/35.59314fd1.js",
    "revision": "ae5442883d5ef8de6baf59812df3d616"
  },
  {
    "url": "assets/js/36.3f7426bd.js",
    "revision": "95e331904a823f379de7b276929529cb"
  },
  {
    "url": "assets/js/37.28a18aaa.js",
    "revision": "fd780d76484edd0e6a56b9461b3f2884"
  },
  {
    "url": "assets/js/38.2b734dff.js",
    "revision": "311dc5ec8202c0cabc1fe9380f8de7d2"
  },
  {
    "url": "assets/js/39.889b79f1.js",
    "revision": "f5b2bcd70f4471bf1aa8dd6ff2395608"
  },
  {
    "url": "assets/js/4.4332a0e1.js",
    "revision": "657a433f6890e9654b5e362afb86f0d8"
  },
  {
    "url": "assets/js/40.c7f6008f.js",
    "revision": "c52db1925e9215168c90116b6d785c92"
  },
  {
    "url": "assets/js/41.19cecb1f.js",
    "revision": "f2eeef1589e326f8078f99948bc7cc71"
  },
  {
    "url": "assets/js/42.80d2ed07.js",
    "revision": "ad654953833b9f976f0aa67d47b66ea6"
  },
  {
    "url": "assets/js/43.6f49cecd.js",
    "revision": "97587a67cc5dd4e35f377b8b3c87c3f9"
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
    "url": "assets/js/7.68495a0c.js",
    "revision": "e7b462a2cb6d240b00ec673909f8eae8"
  },
  {
    "url": "assets/js/8.94b89b6d.js",
    "revision": "449ff70448c9a2a25d16973aa17c4940"
  },
  {
    "url": "assets/js/9.3ea6cb83.js",
    "revision": "2dafbbd9ff3e873c7ff320e9307fa932"
  },
  {
    "url": "assets/js/app.cba33010.js",
    "revision": "f09b39d2d8a6f88419e074b296e701f7"
  },
  {
    "url": "flutter/dart.html",
    "revision": "9c1371e954fa17144b9b1436df1e35b3"
  },
  {
    "url": "flutter/flutter.html",
    "revision": "31e4c28dbe09fb898253511ea66c7950"
  },
  {
    "url": "flutter/index.html",
    "revision": "be5060ad6f50a97ff082bbf04fe677cd"
  },
  {
    "url": "git/fix.html",
    "revision": "256353f3c86b591605c241f69eb3c78b"
  },
  {
    "url": "git/git-action.html",
    "revision": "71cb0d1f3db052b321ea7cad3fa9841c"
  },
  {
    "url": "git/git-flow.html",
    "revision": "cab00dba2821301772617fceac2cf4aa"
  },
  {
    "url": "git/index.html",
    "revision": "302d8add03358b642e9a2cf180e3233d"
  },
  {
    "url": "git/pull-request.html",
    "revision": "2ae0e41a3737d63977df81c4a08668cf"
  },
  {
    "url": "hosts.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "index.html",
    "revision": "1045a001770e6e290be930489d60e553"
  },
  {
    "url": "Javascript-DataType.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "javascript/dependencies.html",
    "revision": "ece78a9d0bca1ea1a0f5174a12632dd0"
  },
  {
    "url": "javascript/event-loop.html",
    "revision": "5e16f973d2cb2f5d0f2a263a06d6a171"
  },
  {
    "url": "javascript/function.html",
    "revision": "4ab0f61c311a0c4a9819a2d6e8c4fa1b"
  },
  {
    "url": "javascript/index.html",
    "revision": "861de30c5baad109066337fb6e1f62db"
  },
  {
    "url": "javascript/operator.html",
    "revision": "e65fa6c3f14fc708a45d7f5676904a38"
  },
  {
    "url": "javascript/questions.html",
    "revision": "5e6c6045ffd65c8d2ae4ddfd4a123ee4"
  },
  {
    "url": "javascript/set.html",
    "revision": "1f037233c91b5852a5b3d9a6bb7d6536"
  },
  {
    "url": "javascript/shallow-deep-copy.html",
    "revision": "99a353c5234c4a06a17894f96e005ca8"
  },
  {
    "url": "javascript/this.html",
    "revision": "67cc8f92b129a1f83ccc5f30559aa1ef"
  },
  {
    "url": "javascript/typescript.html",
    "revision": "52cd002b2a3d8a0bdb6eb65e61c552bc"
  },
  {
    "url": "logo.png",
    "revision": "aca1cf8154f00a69c07b300d72204b2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "f977d8ab0f9795060b4dd4a86860c41b"
  },
  {
    "url": "mobile/index.html",
    "revision": "c241a2fa8f4a128956646b47ba6edf48"
  },
  {
    "url": "node/dependencies.html",
    "revision": "c0f41952b8c4f3bdcc1d10a21d78ea88"
  },
  {
    "url": "node/index.html",
    "revision": "77042af0f0202abb3dae4a500804e993"
  },
  {
    "url": "react/advanced.html",
    "revision": "1506812d1a4a7c6046636f49d25f7708"
  },
  {
    "url": "react/base.html",
    "revision": "37fe8f5fbfb329643d50417d074da528"
  },
  {
    "url": "react/dependencies.html",
    "revision": "c4ca49408fe0a462249c71e59f94979a"
  },
  {
    "url": "react/hooks.html",
    "revision": "14a079a446891e1f12172561bd92feb2"
  },
  {
    "url": "react/index.html",
    "revision": "c3a1e4015bc64f7f531737d2b86f70e6"
  },
  {
    "url": "setupFiles-vs-setupFilesAfterEnv.png",
    "revision": "3c351d966b581a8cd71d5d2b307cee20"
  },
  {
    "url": "tool/index.html",
    "revision": "293ea216f495e1ecdc997794ec2fcbdb"
  },
  {
    "url": "tool/jest.html",
    "revision": "4f7d58966486c84cf983138154c7bc01"
  },
  {
    "url": "tool/pm2.html",
    "revision": "256be90e8c0e7f06526f9ef9ec18f6c6"
  },
  {
    "url": "tool/tool.html",
    "revision": "91b3daea7e4c8983af9fc6c22d6f469a"
  },
  {
    "url": "vue/framework.html",
    "revision": "67f378fa90b5b1c42e543c3a44e24c9c"
  },
  {
    "url": "vue/index.html",
    "revision": "a8380e133c3eb8627c6c138175c38aea"
  },
  {
    "url": "vue/scaffold.html",
    "revision": "d26167100975f5a23ab2f6db369a5260"
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
