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
    "revision": "13ea856a577eaa3a6aac25efa582e3e9"
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
    "url": "assets/js/14.8580f3b5.js",
    "revision": "56fe63df5cf29bb3098bf6a080d610ec"
  },
  {
    "url": "assets/js/15.b8024580.js",
    "revision": "62cd65c56ffc6a3e2f587f2aaadbf1a1"
  },
  {
    "url": "assets/js/16.5a145f2d.js",
    "revision": "12ff249450a9a911ea44166c2c7aa091"
  },
  {
    "url": "assets/js/17.0d3a78b0.js",
    "revision": "942b8e7d032be61062b6c3affb3d4959"
  },
  {
    "url": "assets/js/18.4f9e72c5.js",
    "revision": "e062d1cdf3faf0b1ef3b859ba6604172"
  },
  {
    "url": "assets/js/19.f29b5a5e.js",
    "revision": "cf1c13864a6ed5debf7062d224f47833"
  },
  {
    "url": "assets/js/2.218d6373.js",
    "revision": "4e6476edde4a3b768d4471ed9524ec4e"
  },
  {
    "url": "assets/js/20.9ee12630.js",
    "revision": "0a1810a4f659876ca9ef599e8528ac39"
  },
  {
    "url": "assets/js/21.9b58dac3.js",
    "revision": "e8b9baafa958610acf897afa4e68952b"
  },
  {
    "url": "assets/js/22.22ed9a69.js",
    "revision": "67f05f4fc8239c89870956504703868e"
  },
  {
    "url": "assets/js/23.ae010ca5.js",
    "revision": "ebf72ecd62a097f311c629c661fb74ef"
  },
  {
    "url": "assets/js/24.03002926.js",
    "revision": "09e22f185905d955b4d48a1801bf9a7b"
  },
  {
    "url": "assets/js/25.74de691d.js",
    "revision": "dbc96fdfef3f70bd47f89913aff55831"
  },
  {
    "url": "assets/js/26.20544dc5.js",
    "revision": "1a67073dbe675001b2dbd9156450caa2"
  },
  {
    "url": "assets/js/27.0ef5d450.js",
    "revision": "f880754873f6058db296dd4861fe39b2"
  },
  {
    "url": "assets/js/28.6af71d04.js",
    "revision": "aa73429d46f14825faede799a6a1a9dc"
  },
  {
    "url": "assets/js/29.de63c768.js",
    "revision": "0f1f2ef23a818cf66d27a59d5de2b83a"
  },
  {
    "url": "assets/js/3.5aa28447.js",
    "revision": "82dcafab39831023971390c41458a591"
  },
  {
    "url": "assets/js/30.fccb2b58.js",
    "revision": "9c86fdac95f939cfeb13003e947ad820"
  },
  {
    "url": "assets/js/31.a20182f6.js",
    "revision": "df90be7e4ffc1502833a22f826097e2d"
  },
  {
    "url": "assets/js/32.5e400d08.js",
    "revision": "6c4b560bcbe77719081f6268233cfb20"
  },
  {
    "url": "assets/js/4.e34a63d0.js",
    "revision": "cd6dae2d53dfe979fdc16484bf7a9e15"
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
    "url": "assets/js/7.95763120.js",
    "revision": "38f721dae6bd12c561f2eecec8821953"
  },
  {
    "url": "assets/js/8.4fb02c8a.js",
    "revision": "14c9d723bf7b876fcf02e10da7dcba0d"
  },
  {
    "url": "assets/js/9.38c0bcff.js",
    "revision": "2e68692a81a75b4b12b35e528ef711be"
  },
  {
    "url": "assets/js/app.85bc1ada.js",
    "revision": "7c5a7bd16d99982939dd8ddfc4dbe946"
  },
  {
    "url": "git/fix.html",
    "revision": "201e970cf7fc256255c4555f89af694b"
  },
  {
    "url": "git/git-action.html",
    "revision": "54d4927a12914c2b17cfb128db25b6c5"
  },
  {
    "url": "git/index.html",
    "revision": "bfc8b12e23990f08175659bd5d6dd637"
  },
  {
    "url": "git/pull-request.html",
    "revision": "76bae3df08dbc191f2607f2968a34de0"
  },
  {
    "url": "hosts.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "index.html",
    "revision": "ed2ac9d8714d0f2c0c3c5dfc701d3ac8"
  },
  {
    "url": "Javascript-DataType.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "javascript/dependencies.html",
    "revision": "55ba430f75cc7546b1ab2ce23e069757"
  },
  {
    "url": "javascript/event-loop.html",
    "revision": "6533d531fac9a79d4855141549bd1ebb"
  },
  {
    "url": "javascript/function.html",
    "revision": "aa56d57e72da9b0e6134845e1c358352"
  },
  {
    "url": "javascript/index.html",
    "revision": "f1f97747ef058773dc3df62bac19e379"
  },
  {
    "url": "javascript/operator.html",
    "revision": "25397da870210790206dd1e4c6996ea5"
  },
  {
    "url": "javascript/shallow-deep-copy.html",
    "revision": "501a55ebf4210e12f83e70a0cbb7e2d7"
  },
  {
    "url": "javascript/this.html",
    "revision": "21160bf7603f81069a2e7a6a2fa5c56b"
  },
  {
    "url": "logo.png",
    "revision": "aca1cf8154f00a69c07b300d72204b2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "cb791443bc0c5925a2908be318092774"
  },
  {
    "url": "mobile/index.html",
    "revision": "2fc209b4c5f098ed9445e187c2d973f5"
  },
  {
    "url": "react/advanced.html",
    "revision": "54b1532ebf091ca756a2df938a4e19fd"
  },
  {
    "url": "react/base.html",
    "revision": "33f506439f4ef3bffbc54bf404fb4700"
  },
  {
    "url": "react/dependencies.html",
    "revision": "1ea026443ad383ee3709bdc44b177f2d"
  },
  {
    "url": "react/hooks.html",
    "revision": "07c88359182e20df8ba01457411d7de5"
  },
  {
    "url": "react/index.html",
    "revision": "b32c3761f805652b75cf1aeb6ce9c5b0"
  },
  {
    "url": "tool/index.html",
    "revision": "9ea99fd81aff8cbcb000f45242bc26e6"
  },
  {
    "url": "tool/tool.html",
    "revision": "993ea4257a76b82e13eb86ee7f87cfee"
  },
  {
    "url": "vue/framework.html",
    "revision": "bbf8a535ce19dca5d705703f41821ad4"
  },
  {
    "url": "vue/index.html",
    "revision": "98c494e29fa9b9693da134ed224c12ae"
  },
  {
    "url": "vue/scaffold.html",
    "revision": "f584761cc96661ccdaa3dd33c435f3fc"
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
