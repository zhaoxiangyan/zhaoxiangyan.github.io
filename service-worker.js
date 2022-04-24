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
    "revision": "a2a326f8c50175746fa3a520c61a10a4"
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
    "url": "assets/js/10.c8694cde.js",
    "revision": "9e03c36ea4d3c5df6d1569cfff31f7a0"
  },
  {
    "url": "assets/js/11.839ecdb7.js",
    "revision": "84f1ef5a2a369c760a6db02554f45f1f"
  },
  {
    "url": "assets/js/12.bc32a366.js",
    "revision": "8126e88f516ed32492bb70bd15ea0ccf"
  },
  {
    "url": "assets/js/13.f52e5dfd.js",
    "revision": "886b50974637f1879887ed8285d7721b"
  },
  {
    "url": "assets/js/14.118589f7.js",
    "revision": "cb863015c1dfbae7466eb4f4c5c4777f"
  },
  {
    "url": "assets/js/15.e727f182.js",
    "revision": "878206c701c51c97898ed9c450408090"
  },
  {
    "url": "assets/js/16.bed01d49.js",
    "revision": "9962cd2a3ca3d995db8344f181f85621"
  },
  {
    "url": "assets/js/17.d67846f9.js",
    "revision": "6590342acb0bb145a91ccc7500874158"
  },
  {
    "url": "assets/js/18.f8e62244.js",
    "revision": "32ca5c5b64c18a89701c5ac111ed1156"
  },
  {
    "url": "assets/js/19.b4f9ce0e.js",
    "revision": "471c9af56df64bd4a839633ac9253db9"
  },
  {
    "url": "assets/js/2.e51fe51e.js",
    "revision": "28a3c1838e9cbb613c3b22e7aa8ef6f7"
  },
  {
    "url": "assets/js/20.1a3b3863.js",
    "revision": "689847ad8579e7bf92110287808ed9c0"
  },
  {
    "url": "assets/js/21.eec5b66f.js",
    "revision": "f6be0dcf9026518f6770500111809c65"
  },
  {
    "url": "assets/js/22.acdc6044.js",
    "revision": "bd7b39103bf762e5956ae667a3cc2e4c"
  },
  {
    "url": "assets/js/23.3303ea0a.js",
    "revision": "63d859e56e0882b4d0b26b2b773413ae"
  },
  {
    "url": "assets/js/24.336cbc9f.js",
    "revision": "d88920b1a528a5fbd9277728ed27478c"
  },
  {
    "url": "assets/js/25.9ce01cdd.js",
    "revision": "76d19a9161c9eeb37794bf72ad428e30"
  },
  {
    "url": "assets/js/26.c2478b0b.js",
    "revision": "5408dc1c3a2f34cd3cbc53fb4a73a979"
  },
  {
    "url": "assets/js/27.f351f661.js",
    "revision": "fbe47544e68677f52661b62fb03c1c96"
  },
  {
    "url": "assets/js/3.57e7301a.js",
    "revision": "dc596314857b432857e9290648dd393e"
  },
  {
    "url": "assets/js/4.80aeaa77.js",
    "revision": "045eafe567d1327466aada694e7b1923"
  },
  {
    "url": "assets/js/5.9f33d58d.js",
    "revision": "8b9edab4ce1149ea740e81dfebe985f9"
  },
  {
    "url": "assets/js/6.58813b75.js",
    "revision": "e2b668fcfb4945f39ca9caa159a92409"
  },
  {
    "url": "assets/js/7.9a659688.js",
    "revision": "bb37148f13ce5652e34c99f93cd54312"
  },
  {
    "url": "assets/js/8.e9e267ec.js",
    "revision": "94934f684c88e89ec90ba91013736fd1"
  },
  {
    "url": "assets/js/9.a42465b7.js",
    "revision": "f6d5fba6233a0d1398f93f1e00dbc806"
  },
  {
    "url": "assets/js/app.634a4c1d.js",
    "revision": "b6f2de871e7da0ef1b1138decf004677"
  },
  {
    "url": "git/fix.html",
    "revision": "003a2b3838bbe16590e667be2db1f235"
  },
  {
    "url": "git/git-action.html",
    "revision": "7b3a123f6539996008858cc2282ae705"
  },
  {
    "url": "git/index.html",
    "revision": "d470cdf31b3cd93ba67b428c1ab6b309"
  },
  {
    "url": "hosts.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "index.html",
    "revision": "bbcfa8e803224922a1bfb4db85af933e"
  },
  {
    "url": "Javascript-DataType.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "javascript/dependencies.html",
    "revision": "a86b836d0fa42f11a81e0837783b4f67"
  },
  {
    "url": "javascript/event-loop.html",
    "revision": "737416bd711e6be07a3b2554dabbd233"
  },
  {
    "url": "javascript/function.html",
    "revision": "3933066ce2faeab7be91eacd40142e2a"
  },
  {
    "url": "javascript/index.html",
    "revision": "c0f0b96019caab48bbafd37cb402dad5"
  },
  {
    "url": "javascript/shallow-deep-copy.html",
    "revision": "05cc69f413cc2f30df95ffac9820dc1c"
  },
  {
    "url": "javascript/this.html",
    "revision": "faa3939f5e144dbe16cd55599e0ae5f4"
  },
  {
    "url": "logo.png",
    "revision": "aca1cf8154f00a69c07b300d72204b2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "3be1b6f9b596c706382fdd7e969a21f3"
  },
  {
    "url": "mobile/index.html",
    "revision": "c69c5d975afe1c97702b01df2416afcd"
  },
  {
    "url": "react/advanced.html",
    "revision": "0962a523cac6cc27e78192cec5bae294"
  },
  {
    "url": "react/base.html",
    "revision": "b89276acc824ca6e86502fe0a023478c"
  },
  {
    "url": "react/dependencies.html",
    "revision": "5e8d98ede79b4fff8144c503982bea88"
  },
  {
    "url": "react/index.html",
    "revision": "89219ae7d2c65bce9619bdababa0585b"
  },
  {
    "url": "vue/framework.html",
    "revision": "ece786de87e71f9777d9b9b87da919ad"
  },
  {
    "url": "vue/index.html",
    "revision": "a7bf1e2791cb59bfa2c22cf2d00089a8"
  },
  {
    "url": "vue/scaffold.html",
    "revision": "ffc342ffc76b0f9262b6193b06540952"
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
