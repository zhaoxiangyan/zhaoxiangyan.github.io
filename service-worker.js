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
    "revision": "853e21cf3306bf5821798e997a121b6d"
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
    "url": "assets/js/10.b7a780b2.js",
    "revision": "b22d2e18bdb735beecfcd0256767987e"
  },
  {
    "url": "assets/js/11.1a74e757.js",
    "revision": "d3b9fc71c4eae40c327164dc822da7c1"
  },
  {
    "url": "assets/js/12.b02911a8.js",
    "revision": "aa0f2a00fddbc046be03aea0410db935"
  },
  {
    "url": "assets/js/13.00f4c4a8.js",
    "revision": "e78982ea7876dd2641f8f284b546f493"
  },
  {
    "url": "assets/js/14.f60eb821.js",
    "revision": "5655512b0514c4181d3820b017d500f6"
  },
  {
    "url": "assets/js/15.fe0d6083.js",
    "revision": "0f9d120ccb8974ee953678aee4ae46a4"
  },
  {
    "url": "assets/js/16.eb311631.js",
    "revision": "abad2d93ec0d5c179e2e8c8f92c8b524"
  },
  {
    "url": "assets/js/17.abcac5d3.js",
    "revision": "a89c4865ea2a7e6c8c1957e5db385807"
  },
  {
    "url": "assets/js/18.0e9b2415.js",
    "revision": "138c5811b88b25240fb76a4b6e1231c5"
  },
  {
    "url": "assets/js/19.e834b8b2.js",
    "revision": "46024c40e5c15b80971ed818577430b8"
  },
  {
    "url": "assets/js/2.218d6373.js",
    "revision": "4e6476edde4a3b768d4471ed9524ec4e"
  },
  {
    "url": "assets/js/20.ace85b5c.js",
    "revision": "dfeeb856fd538aeded00ee146c3687c2"
  },
  {
    "url": "assets/js/21.b5fb473f.js",
    "revision": "a5f251d2bad51453dce8b5a4f156cbea"
  },
  {
    "url": "assets/js/22.b6c28946.js",
    "revision": "aeb77d5ce56bec0c4836289e83183c92"
  },
  {
    "url": "assets/js/23.04e91191.js",
    "revision": "cf1c28e132b4966886b4ffcea1fdf834"
  },
  {
    "url": "assets/js/24.14a535b9.js",
    "revision": "0849a0b8bdacd93cf563eea4dcbf3bfd"
  },
  {
    "url": "assets/js/25.2ae0a44c.js",
    "revision": "5de416a77b770031f31fb04129771111"
  },
  {
    "url": "assets/js/26.d7240a7e.js",
    "revision": "2ccc5e4f33c9018052e68a5a5d9386d1"
  },
  {
    "url": "assets/js/27.3967336d.js",
    "revision": "3882f7bda31baa3ef021fc82390fcd61"
  },
  {
    "url": "assets/js/28.a170abbd.js",
    "revision": "2f4128c10e36ecef853fada40829bf90"
  },
  {
    "url": "assets/js/29.5d7a0d79.js",
    "revision": "b055fea0b9ed496e9d613b5f5f866d9e"
  },
  {
    "url": "assets/js/3.5aa28447.js",
    "revision": "82dcafab39831023971390c41458a591"
  },
  {
    "url": "assets/js/4.10ebadab.js",
    "revision": "95dfb8ecf440ba8fb8714c2c5f2c407d"
  },
  {
    "url": "assets/js/5.b9130d9d.js",
    "revision": "a70e04c99a736fc5bfcde29ebebcca65"
  },
  {
    "url": "assets/js/6.e363db32.js",
    "revision": "61c9ad509fbd726232a82fd8e8f854ed"
  },
  {
    "url": "assets/js/7.7a30ae4c.js",
    "revision": "7b5d95efe3937e54929c0811186d4286"
  },
  {
    "url": "assets/js/8.4fb02c8a.js",
    "revision": "14c9d723bf7b876fcf02e10da7dcba0d"
  },
  {
    "url": "assets/js/9.a99d742e.js",
    "revision": "899c411e2c2b812adb6d1b72b411782f"
  },
  {
    "url": "assets/js/app.abf8d074.js",
    "revision": "f94df2da163a77979fe227bd6d361a82"
  },
  {
    "url": "git/fix.html",
    "revision": "049aa8578b700a9fbe4b8a20393bdb2b"
  },
  {
    "url": "git/git-action.html",
    "revision": "54dab039bc5fbf272b5828315f300a6a"
  },
  {
    "url": "git/index.html",
    "revision": "627e26d4c9689af7e62b3cf1b7322045"
  },
  {
    "url": "hosts.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "index.html",
    "revision": "705afadba310d02e1f8dbbf50d93e170"
  },
  {
    "url": "Javascript-DataType.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "javascript/dependencies.html",
    "revision": "9714a3363ba9cf92b6e916744c693bf7"
  },
  {
    "url": "javascript/event-loop.html",
    "revision": "d664655f918b2caefdcaebcd3896946e"
  },
  {
    "url": "javascript/function.html",
    "revision": "cd3a898cb7c2aae3b154a89183d73a9f"
  },
  {
    "url": "javascript/index.html",
    "revision": "56f5016f5da03cc686ca43a080eec542"
  },
  {
    "url": "javascript/shallow-deep-copy.html",
    "revision": "e36a498528f1e45046dd95091ce21869"
  },
  {
    "url": "javascript/this.html",
    "revision": "9f63f579914188ed43f8b537376d5728"
  },
  {
    "url": "logo.png",
    "revision": "aca1cf8154f00a69c07b300d72204b2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "86c2f493cf9b3e94350968e71aaf6490"
  },
  {
    "url": "mobile/index.html",
    "revision": "a7573c625dab6923732aedaf10dac26f"
  },
  {
    "url": "react/advanced.html",
    "revision": "6754f82fccad9910c72d209e0781ba47"
  },
  {
    "url": "react/base.html",
    "revision": "1c98bf085228cd20faee3329e7f76780"
  },
  {
    "url": "react/dependencies.html",
    "revision": "c9a579af2ae95ed890c199a1916bc79f"
  },
  {
    "url": "react/hooks.html",
    "revision": "93199c9360e7b20a17f163b5d29af94c"
  },
  {
    "url": "react/index.html",
    "revision": "331e4e44ebce1230075b13a4757979f8"
  },
  {
    "url": "tool/index.html",
    "revision": "a36d65c2badac0ba89a2a159f922c713"
  },
  {
    "url": "vue/framework.html",
    "revision": "20af3932d2076ee3ac99f3b4d135dfa3"
  },
  {
    "url": "vue/index.html",
    "revision": "d4fc3894ff35305bd20fb750f455f0e3"
  },
  {
    "url": "vue/scaffold.html",
    "revision": "54f1d041605a7664a66b4cafe19a30d1"
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
