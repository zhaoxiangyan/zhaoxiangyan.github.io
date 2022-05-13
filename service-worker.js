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
    "revision": "66d1cff5e2126cc038a18bc3bc836b72"
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
    "url": "assets/js/14.43c965b4.js",
    "revision": "b05f9ae1387be0c939dda544a014c0d1"
  },
  {
    "url": "assets/js/15.7745bb97.js",
    "revision": "c121106dbf5e299310203ae0ed95e6dd"
  },
  {
    "url": "assets/js/16.c7017a8c.js",
    "revision": "4f9759d7a9eec42f2ed9291344437d6d"
  },
  {
    "url": "assets/js/17.b0a59964.js",
    "revision": "e9288f0baa76ecbd41e9244ac3b97455"
  },
  {
    "url": "assets/js/18.ec084317.js",
    "revision": "0e27465f61ea5b8ff246cf537b520c0d"
  },
  {
    "url": "assets/js/19.75f989b5.js",
    "revision": "55cb4497da6907a0adfd21a9ac81a784"
  },
  {
    "url": "assets/js/2.218d6373.js",
    "revision": "4e6476edde4a3b768d4471ed9524ec4e"
  },
  {
    "url": "assets/js/20.d9ac6189.js",
    "revision": "01c1894674fcd1344d5669059c3e8255"
  },
  {
    "url": "assets/js/21.deb0b8e2.js",
    "revision": "56c5f847d75beddb5fcfb3398fcaf4be"
  },
  {
    "url": "assets/js/22.73110df8.js",
    "revision": "6ded57cc96c2edfa85f063c15785f492"
  },
  {
    "url": "assets/js/23.1e957f2f.js",
    "revision": "6df1583f78f124610efc07d21aa2308a"
  },
  {
    "url": "assets/js/24.8d370947.js",
    "revision": "b6a27c6fc85d4545b0e1dbbce5607f61"
  },
  {
    "url": "assets/js/25.7f779065.js",
    "revision": "e19377bbe862c088e9dd33db6051e200"
  },
  {
    "url": "assets/js/26.4d87bef0.js",
    "revision": "0cd9e8f8a26c57d944a16ab4bfef0419"
  },
  {
    "url": "assets/js/27.a0383287.js",
    "revision": "9d3e3c4a3a666a0445e8cd8693fb8344"
  },
  {
    "url": "assets/js/28.ddb9fc8e.js",
    "revision": "5dc6c73f5152e6ba800df968039b9d29"
  },
  {
    "url": "assets/js/29.b23cd4f8.js",
    "revision": "20ba99546579c071b4e5594bce06dc1d"
  },
  {
    "url": "assets/js/3.505b66df.js",
    "revision": "e7a581ee7bf5ae08b9901b722ef20d9c"
  },
  {
    "url": "assets/js/30.f6fa545e.js",
    "revision": "bb6ea7a084877fa1fb0462010bb44eb6"
  },
  {
    "url": "assets/js/31.fd467b4f.js",
    "revision": "8eaf554d00e0806729a8296c76241df4"
  },
  {
    "url": "assets/js/32.639eba4f.js",
    "revision": "b2c21426bfecbd60a4488e70e4fdfeb0"
  },
  {
    "url": "assets/js/33.1481c021.js",
    "revision": "4906a55ce26e7b0efdcbd031571637e9"
  },
  {
    "url": "assets/js/4.0ed06b03.js",
    "revision": "d3f911017e74654019c116baa37d3056"
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
    "url": "assets/js/7.3165c7d3.js",
    "revision": "71fcad65e4a30161985067aabab782b0"
  },
  {
    "url": "assets/js/8.4fb02c8a.js",
    "revision": "14c9d723bf7b876fcf02e10da7dcba0d"
  },
  {
    "url": "assets/js/9.dc711983.js",
    "revision": "1901c21026d2331348b2a12a03b47650"
  },
  {
    "url": "assets/js/app.232199f7.js",
    "revision": "ff4f476d76e18fff5da2b91a896146ce"
  },
  {
    "url": "git/fix.html",
    "revision": "9e60eb59e728cf8f6d48f9663cdbf507"
  },
  {
    "url": "git/git-action.html",
    "revision": "a8159be5ebe78b670292a1f7ce4cd590"
  },
  {
    "url": "git/git-flow.html",
    "revision": "76d36dfc2e3a62871005ea98b2b13f3d"
  },
  {
    "url": "git/index.html",
    "revision": "ecda0c38fe89dad148fc3a0561ac2a16"
  },
  {
    "url": "git/pull-request.html",
    "revision": "58104968d22365590c396b305155efd6"
  },
  {
    "url": "hosts.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "index.html",
    "revision": "50e5c8f0a4718e005ecb0f13342dac56"
  },
  {
    "url": "Javascript-DataType.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "javascript/dependencies.html",
    "revision": "bc4ce32b629538b7ae6063bcba0abbd8"
  },
  {
    "url": "javascript/event-loop.html",
    "revision": "025a8e0097cee9e2fa734f08803c4f4a"
  },
  {
    "url": "javascript/function.html",
    "revision": "aea90d860013e2715ef296ccf24320b7"
  },
  {
    "url": "javascript/index.html",
    "revision": "ff99ed3c692c0f35a98f1cdc44d70223"
  },
  {
    "url": "javascript/operator.html",
    "revision": "807f966e9fca65dab55e4942e8b81f9f"
  },
  {
    "url": "javascript/shallow-deep-copy.html",
    "revision": "d9b53b6648e7ccb7d96de5b401501e9a"
  },
  {
    "url": "javascript/this.html",
    "revision": "2cf40e0c8f841cb0077cca6be6ba2967"
  },
  {
    "url": "logo.png",
    "revision": "aca1cf8154f00a69c07b300d72204b2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "bf4055a8370cd8a9c3f029e1e1e62208"
  },
  {
    "url": "mobile/index.html",
    "revision": "0b8fb58bb821035850db1ab68b852f77"
  },
  {
    "url": "react/advanced.html",
    "revision": "ec8f38470d363825703f76e8d5b5cfd2"
  },
  {
    "url": "react/base.html",
    "revision": "5c3f2a4df4563cdb8c6c751986a72291"
  },
  {
    "url": "react/dependencies.html",
    "revision": "978e044a474aaf27147a226c8c756245"
  },
  {
    "url": "react/hooks.html",
    "revision": "26d54b52d9563451ccda82e58bfdc67f"
  },
  {
    "url": "react/index.html",
    "revision": "a0d74b2734a378073d89b79e131b4998"
  },
  {
    "url": "tool/index.html",
    "revision": "7c522b8469d37edd68afea5a63463e23"
  },
  {
    "url": "tool/tool.html",
    "revision": "1b017d1327468ed1d522c244ada84bc3"
  },
  {
    "url": "vue/framework.html",
    "revision": "a58187d6780a19401cbcde23a09a6fd3"
  },
  {
    "url": "vue/index.html",
    "revision": "e13ceda5c88ce9a2ddf8dc2cdd6ee128"
  },
  {
    "url": "vue/scaffold.html",
    "revision": "8506f8a96ced53f6ab9ea124bf0f5302"
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
