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
    "revision": "0ac2782d874857855b8ba26bbbf796c4"
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
    "url": "assets/js/12.5350d8b4.js",
    "revision": "8b3aa32f9e0be3978950216bf7f1674d"
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
    "url": "assets/js/19.679fcae8.js",
    "revision": "2482e608012249227db2e476cd9af652"
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
    "url": "assets/js/26.18d92fe2.js",
    "revision": "e4727fa55287a3f84203aafd52f6aea4"
  },
  {
    "url": "assets/js/27.70bb3b14.js",
    "revision": "8f21d812ef99fe19e142d252bece9fe3"
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
    "url": "assets/js/app.3009722c.js",
    "revision": "84999e04103f5e7a9682a79cfd6506c3"
  },
  {
    "url": "git/fix.html",
    "revision": "cee8562dfaf23026a04b9245436bfae6"
  },
  {
    "url": "git/git-action.html",
    "revision": "803b287f89c25c23bd3e2245b8c9e06e"
  },
  {
    "url": "git/index.html",
    "revision": "a040853774c2c68a19cb842575ccd329"
  },
  {
    "url": "hosts.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "index.html",
    "revision": "703e3436c5047d939d36bbb2649b2218"
  },
  {
    "url": "Javascript-DataType.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "javascript/dependencies.html",
    "revision": "2041bcdc54e827dd9d6ec8f34dbd14d1"
  },
  {
    "url": "javascript/event-loop.html",
    "revision": "bb165b772ca86563e5564ead5fc83af3"
  },
  {
    "url": "javascript/function.html",
    "revision": "11bac8d5fc27391dabd6f4d62640bf32"
  },
  {
    "url": "javascript/index.html",
    "revision": "f1a4d868515e1275c512c8f98a79ebd2"
  },
  {
    "url": "javascript/shallow-deep-copy.html",
    "revision": "e6520537214657fb6f1b003ec148f350"
  },
  {
    "url": "javascript/this.html",
    "revision": "7e3c42cd291956942017abbfeb90534e"
  },
  {
    "url": "logo.png",
    "revision": "aca1cf8154f00a69c07b300d72204b2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "4089bd03a50ae94b2ceb0038a17ec963"
  },
  {
    "url": "mobile/index.html",
    "revision": "df11a5bc0997d854ce239b2b88b9ec1e"
  },
  {
    "url": "react/advanced.html",
    "revision": "976680efb1443074e777f995d73d7c36"
  },
  {
    "url": "react/base.html",
    "revision": "d9df39d6c30842aa340a8bdc8c9b4e69"
  },
  {
    "url": "react/dependencies.html",
    "revision": "6c20fa45c9f2484aaac5640f60c8ce7f"
  },
  {
    "url": "react/hooks.html",
    "revision": "e4008fcf9a93beb53aece611df8f2476"
  },
  {
    "url": "react/index.html",
    "revision": "5aa518aac6ba2ef6a1ef8ac912eaca47"
  },
  {
    "url": "tool/index.html",
    "revision": "f1387bb8225c5c512b6c44f76032df0c"
  },
  {
    "url": "tool/tool.html",
    "revision": "74fd87d60e233d23aef620eb9866e46c"
  },
  {
    "url": "vue/framework.html",
    "revision": "0d6c79728c4c9dcc53056cdfcb9bc70a"
  },
  {
    "url": "vue/index.html",
    "revision": "328a64ee7c3fcf1572bfd23669beeeb3"
  },
  {
    "url": "vue/scaffold.html",
    "revision": "00b6ef105e32d9d4591e271362fdcdaf"
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
