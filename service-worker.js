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
    "revision": "10b00d1529f9ee18a602877b5d65e514"
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
    "url": "assets/js/10.fdd13433.js",
    "revision": "92593fdd44a5756bd744c77c582bbe87"
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
    "url": "assets/js/13.4362b390.js",
    "revision": "1652728b07955a7e24df2b3bf60059b7"
  },
  {
    "url": "assets/js/14.ccbfbe87.js",
    "revision": "20351f05d2db7e24537df5e7ee771ef3"
  },
  {
    "url": "assets/js/15.14e15bd0.js",
    "revision": "a32d06e4b8ff4bd1a8ee8fb1359d3b78"
  },
  {
    "url": "assets/js/16.4dada561.js",
    "revision": "e9a93ba568e7956248383ca7c82d70fe"
  },
  {
    "url": "assets/js/17.9c361cc2.js",
    "revision": "728478826d53dd281eec87f7e488bade"
  },
  {
    "url": "assets/js/18.f8685d24.js",
    "revision": "6086f2aa9ee021356039be72ec9ba716"
  },
  {
    "url": "assets/js/19.15d9cdb8.js",
    "revision": "211c164b5147b3ca0b4349d305a641a9"
  },
  {
    "url": "assets/js/2.b76205d1.js",
    "revision": "3609e7b36e59668548e71e866f69669e"
  },
  {
    "url": "assets/js/20.27aa6f4c.js",
    "revision": "f802b1478e692c1e7eb8959678dfa294"
  },
  {
    "url": "assets/js/21.374414c5.js",
    "revision": "50f3486856e5a94a021b62c8bbead2dd"
  },
  {
    "url": "assets/js/22.4ed030dc.js",
    "revision": "0806f6c1434aa1d2cae8a9cc5d00b923"
  },
  {
    "url": "assets/js/23.ceea6715.js",
    "revision": "e7f6c6dfd9c9bf6f0b8d4505a7c874ff"
  },
  {
    "url": "assets/js/24.be77d6a5.js",
    "revision": "4de298abc76ca5658ed8231901124985"
  },
  {
    "url": "assets/js/25.903c347c.js",
    "revision": "f5b5f2129e811518260c97b692a320d0"
  },
  {
    "url": "assets/js/26.6eb60ecf.js",
    "revision": "86237a995cc6707000ac9a4eb1afa7b3"
  },
  {
    "url": "assets/js/27.6e2299ab.js",
    "revision": "54666b7fbad87634b1511b751f8e9a54"
  },
  {
    "url": "assets/js/28.95e8aafa.js",
    "revision": "29a5f2bdb73a592687bf60bc4bf1564d"
  },
  {
    "url": "assets/js/29.445af839.js",
    "revision": "de2f464a8052c71edd6c9d2aef249042"
  },
  {
    "url": "assets/js/3.f1e50b4a.js",
    "revision": "5d9aed56c34a8ff36fe2911f60411f91"
  },
  {
    "url": "assets/js/30.6fc713c4.js",
    "revision": "a86f1db1f884fa734b721ce9461c7a64"
  },
  {
    "url": "assets/js/31.446d42cb.js",
    "revision": "56c674d4795236d2da6ec9f6bdbe2816"
  },
  {
    "url": "assets/js/32.b1f38aa9.js",
    "revision": "9cf274d32a264284c2ba5d5361bf0db5"
  },
  {
    "url": "assets/js/33.3ee322ad.js",
    "revision": "bd78d8bd9ab3190483a89099a429780d"
  },
  {
    "url": "assets/js/34.22be375e.js",
    "revision": "f46f935b017afb79bc7a1ad5b26a7732"
  },
  {
    "url": "assets/js/35.95cf0c33.js",
    "revision": "cc1939ca74d503217a67722e87c350df"
  },
  {
    "url": "assets/js/36.8284b4ac.js",
    "revision": "e2f8a65e7206c0ae61b6581a0e295b41"
  },
  {
    "url": "assets/js/4.8780c98a.js",
    "revision": "b6d9c4acfd971b8f8c463c21ef55e038"
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
    "url": "assets/js/7.d900d1ed.js",
    "revision": "fd66fa78f542622430f83af3a8439999"
  },
  {
    "url": "assets/js/8.31d56892.js",
    "revision": "ff0f9e5f731dd2fbe4ad580f4f8f4661"
  },
  {
    "url": "assets/js/9.35f36af1.js",
    "revision": "d3a9437a038677b2386cc69b3f11929e"
  },
  {
    "url": "assets/js/app.3ae62ad1.js",
    "revision": "a55b80133a973580da76298e6cc18044"
  },
  {
    "url": "git/fix.html",
    "revision": "e55fabcdce242ab0041fa858a2dada8e"
  },
  {
    "url": "git/git-action.html",
    "revision": "efc6cdd5745fbef707fec26a797c16c3"
  },
  {
    "url": "git/git-flow.html",
    "revision": "0c78be92bd433232f67069924a57196a"
  },
  {
    "url": "git/index.html",
    "revision": "ea406c792faa9102f6184877fd992c10"
  },
  {
    "url": "git/pull-request.html",
    "revision": "84b3540fc9c80252e4349ea7c986c128"
  },
  {
    "url": "hosts.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "index.html",
    "revision": "5a7010d33c1cf96005e5a12d655af0fc"
  },
  {
    "url": "Javascript-DataType.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "javascript/dependencies.html",
    "revision": "3243bf84de4962579d1c742742005b68"
  },
  {
    "url": "javascript/event-loop.html",
    "revision": "605eef28ed78d0c3328974a58796ed10"
  },
  {
    "url": "javascript/function.html",
    "revision": "9908a4efe2853b87604456434a081f3b"
  },
  {
    "url": "javascript/index.html",
    "revision": "aa86f1ccc40501deee970a18d1ef3b21"
  },
  {
    "url": "javascript/operator.html",
    "revision": "99484d4898f367ac1fef4d28656066fe"
  },
  {
    "url": "javascript/shallow-deep-copy.html",
    "revision": "7f12cbb115b76071ef1a2b75593d5da8"
  },
  {
    "url": "javascript/this.html",
    "revision": "775b6773ec86234870794d07505d5aa4"
  },
  {
    "url": "logo.png",
    "revision": "aca1cf8154f00a69c07b300d72204b2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "908a9f1cc477c596bfd5396479d1324b"
  },
  {
    "url": "mobile/index.html",
    "revision": "0a99da4f47001c573549a6df4e393ce3"
  },
  {
    "url": "node/dependencies.html",
    "revision": "78e9d2ad4536e0f3425668de54353b18"
  },
  {
    "url": "node/index.html",
    "revision": "eba6b584b1ae590519a701c61575c95c"
  },
  {
    "url": "react/advanced.html",
    "revision": "20904972ea91bd72cd5c419945d9afb7"
  },
  {
    "url": "react/base.html",
    "revision": "e1445fbdbf0005ff7c639edd2b623c27"
  },
  {
    "url": "react/dependencies.html",
    "revision": "b583792a266f6b2b2c6c1f69cb57a4dc"
  },
  {
    "url": "react/hooks.html",
    "revision": "566a4e9efae714996583ddd87cd77805"
  },
  {
    "url": "react/index.html",
    "revision": "3af85f136b59f30241ca6ae1634ac5ab"
  },
  {
    "url": "setupFiles-vs-setupFilesAfterEnv.png",
    "revision": "3c351d966b581a8cd71d5d2b307cee20"
  },
  {
    "url": "tool/index.html",
    "revision": "d62b00707b668a84a855bac7b4fb51d6"
  },
  {
    "url": "tool/jest.html",
    "revision": "9debd10aca2dc9bb4ec8f510fd3c858d"
  },
  {
    "url": "tool/tool.html",
    "revision": "1e2c8c5e6eafc054cedfe062d1053175"
  },
  {
    "url": "vue/framework.html",
    "revision": "102d70a4ca624bbe44b69303a87838d6"
  },
  {
    "url": "vue/index.html",
    "revision": "7067db584b9b8f142ea6e445a72bb8e0"
  },
  {
    "url": "vue/scaffold.html",
    "revision": "c23d8d2204a5f81058f32e626ccd4184"
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
