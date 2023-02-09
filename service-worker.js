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
    "revision": "69fb3b5dcc2c74483e0dc01541a93c9f"
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
    "url": "assets/js/10.2ed86849.js",
    "revision": "36fdb3cc0e942da2719a61052e0e2273"
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
    "url": "assets/js/16.08a2e7d9.js",
    "revision": "7dcab97c1d844da97dd450153df89163"
  },
  {
    "url": "assets/js/17.7389a773.js",
    "revision": "0ffc821c6939c824bd4ab4af19491ce4"
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
    "url": "assets/js/23.976a8b63.js",
    "revision": "63dce1b58ec44bd79818761aa6034f7b"
  },
  {
    "url": "assets/js/24.c0c4d235.js",
    "revision": "3b93fe4963f8b3c1daa9e1cc7e981982"
  },
  {
    "url": "assets/js/25.cf49bb88.js",
    "revision": "d77ac2c248108c62cb5fca09995cc04b"
  },
  {
    "url": "assets/js/26.f837f1f9.js",
    "revision": "fc62a027bcbc8117efcdf05f97e27784"
  },
  {
    "url": "assets/js/27.9b167c65.js",
    "revision": "f6da34c7c9eb4ca6701d045ebc11aec6"
  },
  {
    "url": "assets/js/28.b0b7916a.js",
    "revision": "b7f7d7a4e5960fc65ed2b852cf7ac15b"
  },
  {
    "url": "assets/js/29.c9eb33d4.js",
    "revision": "dff76a01b49ab9dc7970fbb3f4958d91"
  },
  {
    "url": "assets/js/3.b32e13b7.js",
    "revision": "4d3dd16ad165a0bf33eb342787168a8d"
  },
  {
    "url": "assets/js/30.b1518466.js",
    "revision": "6f974871ddb1e094bdd41f56e0f85997"
  },
  {
    "url": "assets/js/31.e3e2fecc.js",
    "revision": "966c805363da5afdb7df35d282289f81"
  },
  {
    "url": "assets/js/32.d16adb94.js",
    "revision": "524467a0ca17dfcf2cae4583a1b665b7"
  },
  {
    "url": "assets/js/33.d5bfb7b6.js",
    "revision": "780b3e5a4aa0ded80a7dbf4ae661ec5b"
  },
  {
    "url": "assets/js/34.d8028541.js",
    "revision": "d7f6fe3f2a7f5b5878eb9d41c04df989"
  },
  {
    "url": "assets/js/35.7a2d5844.js",
    "revision": "8d8ec72241499d18250b2360358cb242"
  },
  {
    "url": "assets/js/36.876a3026.js",
    "revision": "a773fd84ef8f3e91e05bd3b4721fecc9"
  },
  {
    "url": "assets/js/37.0a29a1d8.js",
    "revision": "cd6c8a8646a62c81e11bff026cf9c624"
  },
  {
    "url": "assets/js/38.9ad0291f.js",
    "revision": "3bebadabdbb22acce0772cebcf7c92d3"
  },
  {
    "url": "assets/js/39.fc639995.js",
    "revision": "134e67757b8e437193b5ff3caf046366"
  },
  {
    "url": "assets/js/4.d7944c26.js",
    "revision": "27609217f596ee74fe1b6ea5a4618b8d"
  },
  {
    "url": "assets/js/40.90188a25.js",
    "revision": "44406340a063d67c1fc9d93a5fa74b74"
  },
  {
    "url": "assets/js/41.50bde237.js",
    "revision": "ce3c60cde03e2aed2b9b20b4e3931bc3"
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
    "url": "assets/js/8.9a6254a4.js",
    "revision": "ec055133774a00a4739f3008ad277813"
  },
  {
    "url": "assets/js/9.3ea6cb83.js",
    "revision": "2dafbbd9ff3e873c7ff320e9307fa932"
  },
  {
    "url": "assets/js/app.356569cd.js",
    "revision": "2a9240d6c7d915add618b9d75dde885a"
  },
  {
    "url": "flutter/dart.html",
    "revision": "94c08d7a267a85151ec4091019142382"
  },
  {
    "url": "flutter/flutter.html",
    "revision": "3c8f5060b3482cc791697ceb6b2f6a1b"
  },
  {
    "url": "flutter/index.html",
    "revision": "0d7c1575c6333ec95ac6d6e2f0115387"
  },
  {
    "url": "git/fix.html",
    "revision": "e932bc83ad11ff4f39b59bc4beafa3f2"
  },
  {
    "url": "git/git-action.html",
    "revision": "74f93821829e0a62ed7877cd69eeaf3d"
  },
  {
    "url": "git/git-flow.html",
    "revision": "6c7b143db35bbefcbae7bc8167e8f121"
  },
  {
    "url": "git/index.html",
    "revision": "4071d3f586b040f155e54d1a830ab286"
  },
  {
    "url": "git/pull-request.html",
    "revision": "64ef6434e4551f075920126c4d7adc95"
  },
  {
    "url": "hosts.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "index.html",
    "revision": "37490ea7bdbdd18f93389426f643280f"
  },
  {
    "url": "Javascript-DataType.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "javascript/dependencies.html",
    "revision": "22f6d81a702d9033caa02074454d1227"
  },
  {
    "url": "javascript/event-loop.html",
    "revision": "e4f82b338c8d6966da7e7e130a612250"
  },
  {
    "url": "javascript/function.html",
    "revision": "4d2eee602a6596ee3bb59348a98677c1"
  },
  {
    "url": "javascript/index.html",
    "revision": "37945fab8a1b25b27cf6ca373ee66807"
  },
  {
    "url": "javascript/operator.html",
    "revision": "87c1097772ae4c06f9b987dd6ec1e5c4"
  },
  {
    "url": "javascript/shallow-deep-copy.html",
    "revision": "289cebc57bb32285694cf83bb57be62d"
  },
  {
    "url": "javascript/this.html",
    "revision": "f6fbdb8a7423897eee076f4bc2848b81"
  },
  {
    "url": "javascript/typescript.html",
    "revision": "feeca0cdc981b05a5125191a1cad5e47"
  },
  {
    "url": "logo.png",
    "revision": "aca1cf8154f00a69c07b300d72204b2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "4ca15532df9d0db86b062ac82f501b67"
  },
  {
    "url": "mobile/index.html",
    "revision": "10f734b5b6217ae207cd32e15f3b258d"
  },
  {
    "url": "node/dependencies.html",
    "revision": "3a7a25f78b0c6e2d5861d5249d3164e2"
  },
  {
    "url": "node/index.html",
    "revision": "efc49a635fad1f79c6545a611a802251"
  },
  {
    "url": "react/advanced.html",
    "revision": "40e4fd4c82f1c0a7bdf95b81545cc921"
  },
  {
    "url": "react/base.html",
    "revision": "ec33470090fb64d54d805d6eee8423c5"
  },
  {
    "url": "react/dependencies.html",
    "revision": "9ceb14da12a087fbc6c54e41737121d6"
  },
  {
    "url": "react/hooks.html",
    "revision": "3d80dae4a7452d9deae7b27620cc401d"
  },
  {
    "url": "react/index.html",
    "revision": "b8ce73383b2e96117d6498ff7b70f4c0"
  },
  {
    "url": "setupFiles-vs-setupFilesAfterEnv.png",
    "revision": "3c351d966b581a8cd71d5d2b307cee20"
  },
  {
    "url": "tool/index.html",
    "revision": "a224d9f4565ba7af578a0804a5bc3783"
  },
  {
    "url": "tool/jest.html",
    "revision": "5a02a9b0a910d1318f584c3ccc1144cf"
  },
  {
    "url": "tool/pm2.html",
    "revision": "1c0babd22552653bda917d6f6944601b"
  },
  {
    "url": "tool/tool.html",
    "revision": "7cda77e2bd917f38707da0505eba3229"
  },
  {
    "url": "vue/framework.html",
    "revision": "a2924fac4702177c46f38d272743b4eb"
  },
  {
    "url": "vue/index.html",
    "revision": "add90d5af8674ea061beae4cdfbc9e7a"
  },
  {
    "url": "vue/scaffold.html",
    "revision": "2432b3801e17c8be0374a0eab45ede27"
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
