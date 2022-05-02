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
    "revision": "db2f21659e2708bc1bebf66319b85eff"
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
    "url": "assets/js/12.c4107c5f.js",
    "revision": "ab8a49651dbda7687cad3ae2a8da49b7"
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
    "url": "assets/js/17.88228d5b.js",
    "revision": "83e59f3933eaa1a30a3bdfcc7db12a3d"
  },
  {
    "url": "assets/js/18.cbb5c998.js",
    "revision": "3886d127f16b7d7ebfe246f83594f9d5"
  },
  {
    "url": "assets/js/19.02105b98.js",
    "revision": "c46b66173b51ac1c00baf5cee18ea3bd"
  },
  {
    "url": "assets/js/2.218d6373.js",
    "revision": "4e6476edde4a3b768d4471ed9524ec4e"
  },
  {
    "url": "assets/js/20.1fd11221.js",
    "revision": "9fa61cfabaa7b60dcff0c711c0215de0"
  },
  {
    "url": "assets/js/21.cb2c2e1f.js",
    "revision": "3998742061aa2bf51dad2deea8bdded9"
  },
  {
    "url": "assets/js/22.0fdde652.js",
    "revision": "66b15ab8a85883d65ba7192068b6cef9"
  },
  {
    "url": "assets/js/23.51834ab0.js",
    "revision": "8825c6475b553f390669c78606a7d85b"
  },
  {
    "url": "assets/js/24.20e2f11a.js",
    "revision": "0e78b26b24722de776188c25f2fd8d81"
  },
  {
    "url": "assets/js/25.3c52437e.js",
    "revision": "b99a014d2b415cf87aea51b801a897d3"
  },
  {
    "url": "assets/js/26.1bf55dfe.js",
    "revision": "0370a115e6d39b0249a6f62a883f1891"
  },
  {
    "url": "assets/js/27.b22dadab.js",
    "revision": "a3da5463f9fb5874acb3e58a89bbe9e1"
  },
  {
    "url": "assets/js/28.8ccf9aa5.js",
    "revision": "93c2c4148d7c42874e48d4016890f07e"
  },
  {
    "url": "assets/js/29.09b0bdb4.js",
    "revision": "39e3c5f591cd87f3e15676a6de590f71"
  },
  {
    "url": "assets/js/3.5aa28447.js",
    "revision": "82dcafab39831023971390c41458a591"
  },
  {
    "url": "assets/js/30.dd77fde4.js",
    "revision": "0f0d9a46d0426aeafa02243e1ecb55d0"
  },
  {
    "url": "assets/js/4.50e75645.js",
    "revision": "57dbceb575e5f6a4d4a0ad19c94727d8"
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
    "url": "assets/js/app.bfdf00a6.js",
    "revision": "5cccf2fb46474329bda21b1dd97dd567"
  },
  {
    "url": "git/fix.html",
    "revision": "4cdde85487f047d4375963d6929c6d38"
  },
  {
    "url": "git/git-action.html",
    "revision": "ce0b773f5a9a030e330d05e1adfe3e75"
  },
  {
    "url": "git/index.html",
    "revision": "a99575db4960f95f36033ac8f394645a"
  },
  {
    "url": "hosts.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "index.html",
    "revision": "2f07adc1ef884d1766f18d5fdf27f301"
  },
  {
    "url": "Javascript-DataType.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "javascript/dependencies.html",
    "revision": "a91e4571d6e07b62e56d548e85d3b98d"
  },
  {
    "url": "javascript/event-loop.html",
    "revision": "8edd25c823cd5e652e25d0def081453f"
  },
  {
    "url": "javascript/function.html",
    "revision": "ab1fc9ef9560a896be8988bf1988bffc"
  },
  {
    "url": "javascript/index.html",
    "revision": "45defbf4f662acf8d270e2ddfb78d2d8"
  },
  {
    "url": "javascript/shallow-deep-copy.html",
    "revision": "206fa068e26646a8b8edbe87dca02656"
  },
  {
    "url": "javascript/this.html",
    "revision": "f78ea859b2a82a47966138b9a4b51993"
  },
  {
    "url": "logo.png",
    "revision": "aca1cf8154f00a69c07b300d72204b2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "8597472f500de84b72ae40779eb0b9b2"
  },
  {
    "url": "mobile/index.html",
    "revision": "938aedf8015e6d0b0c7b1869fea1dc0c"
  },
  {
    "url": "react/advanced.html",
    "revision": "2b6d15b56cbc02339130218cb1724f61"
  },
  {
    "url": "react/base.html",
    "revision": "f09666d993589c64541a0c4f99845ae4"
  },
  {
    "url": "react/dependencies.html",
    "revision": "6475c6871a60c724d024b628ad92d55f"
  },
  {
    "url": "react/hooks.html",
    "revision": "d673a47bcebf89bac3af9649db1df3b2"
  },
  {
    "url": "react/index.html",
    "revision": "d260149c64eac604898c8b4b9885dd53"
  },
  {
    "url": "tool/index.html",
    "revision": "31d61bbadf8f6cfbdafd4c31df173475"
  },
  {
    "url": "tool/tool.html",
    "revision": "8c9ada60b06a9dcc11dd484319dfa848"
  },
  {
    "url": "vue/framework.html",
    "revision": "56cbe2d1697013a073f33537d7c1facd"
  },
  {
    "url": "vue/index.html",
    "revision": "f33269c9327622bb6023689003a48d48"
  },
  {
    "url": "vue/scaffold.html",
    "revision": "b8e644c12a1c3760cc92c65d4101a165"
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
