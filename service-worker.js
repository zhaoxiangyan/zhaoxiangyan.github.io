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
    "revision": "35253cb3f746437a96b8a92ca9fd47b6"
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
    "url": "assets/js/10.74bdb634.js",
    "revision": "ddbdc443c9f4504dc723e18948b4e2cb"
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
    "url": "assets/js/22.e9f2c9fb.js",
    "revision": "7b316ca5b782e28bbee4ee9a27fba08c"
  },
  {
    "url": "assets/js/23.f1c3ff00.js",
    "revision": "839a83d78edbae80ec08e71077ca756c"
  },
  {
    "url": "assets/js/24.7c78fc1a.js",
    "revision": "55ef483b160b9d37d550f5b0ab1e4fb4"
  },
  {
    "url": "assets/js/25.d2699515.js",
    "revision": "863ec1742405e7cb2695bf4d519f1693"
  },
  {
    "url": "assets/js/26.f71b2877.js",
    "revision": "040a875fbdd051111c4677fb02a43906"
  },
  {
    "url": "assets/js/27.93b95d52.js",
    "revision": "4125c34aba3a24b5a2c60efe90e884bd"
  },
  {
    "url": "assets/js/28.5f11b687.js",
    "revision": "1da48c7155de51e177fc1e8abbb4de79"
  },
  {
    "url": "assets/js/29.2ed9ae30.js",
    "revision": "d5e5a4d54cf8effafeccaf92a45d7875"
  },
  {
    "url": "assets/js/3.f1e50b4a.js",
    "revision": "5d9aed56c34a8ff36fe2911f60411f91"
  },
  {
    "url": "assets/js/30.6f439643.js",
    "revision": "9004c4f5080c19fa0cd0fd35cb110891"
  },
  {
    "url": "assets/js/31.5034a523.js",
    "revision": "70d67a56f0a380e5d3c77cd6ead06421"
  },
  {
    "url": "assets/js/32.d4f8268e.js",
    "revision": "7b9437e4d4165d17eda25e4905f5b5fc"
  },
  {
    "url": "assets/js/33.f64a5251.js",
    "revision": "4b95ca13b74379c035a31b209da4eb84"
  },
  {
    "url": "assets/js/34.f93a4f94.js",
    "revision": "ca2056ab5acc6f994ed8eaa75352b7b8"
  },
  {
    "url": "assets/js/35.0af588a4.js",
    "revision": "d04c1db3b779d7500ca464f29d401abd"
  },
  {
    "url": "assets/js/36.3b94c105.js",
    "revision": "f1da0bb7da1a15398ca97cc0370a1406"
  },
  {
    "url": "assets/js/37.61cd722b.js",
    "revision": "645f06416cade04b89da8663fe0ed8a6"
  },
  {
    "url": "assets/js/4.421d8028.js",
    "revision": "b9552f4e8f8cc48d7c81ada963395c32"
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
    "url": "assets/js/app.b6e61b6d.js",
    "revision": "4c148cbb6b829086b4120112370d897a"
  },
  {
    "url": "git/fix.html",
    "revision": "75510adcfb6af56cf10165e1b666b670"
  },
  {
    "url": "git/git-action.html",
    "revision": "00764948473b9115cb045e31e2c10a4e"
  },
  {
    "url": "git/git-flow.html",
    "revision": "d315b5fd373b12f9cc371b1b7c610f2c"
  },
  {
    "url": "git/index.html",
    "revision": "02154f8170a857529ab47067d7ddb319"
  },
  {
    "url": "git/pull-request.html",
    "revision": "f33e1055cca09e6527f56a1250bfa6e0"
  },
  {
    "url": "hosts.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "index.html",
    "revision": "5a902d94a1bd356e1cbb944f4cf5b7b5"
  },
  {
    "url": "Javascript-DataType.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "javascript/dependencies.html",
    "revision": "b1fa474292c3af844fc52f0b11000578"
  },
  {
    "url": "javascript/event-loop.html",
    "revision": "2e3421e488c58aa9dcf70133c14f324b"
  },
  {
    "url": "javascript/function.html",
    "revision": "839dc16dfc76d2f6f193b2f5062bd7aa"
  },
  {
    "url": "javascript/index.html",
    "revision": "9f82d4cc4c0309f8f81a5d45852a0a0e"
  },
  {
    "url": "javascript/operator.html",
    "revision": "60f4fb88ac5b523daf87ec7ae46b6efa"
  },
  {
    "url": "javascript/shallow-deep-copy.html",
    "revision": "353e94643a15df0e8f48fbf4a8b027b9"
  },
  {
    "url": "javascript/this.html",
    "revision": "97febd067dc2c9541023576d484fefff"
  },
  {
    "url": "javascript/typescript.html",
    "revision": "f31e189a19cd3bc7ab71e5252195f512"
  },
  {
    "url": "logo.png",
    "revision": "aca1cf8154f00a69c07b300d72204b2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "d1a5753b294e021f36c7f9a3e513e68a"
  },
  {
    "url": "mobile/index.html",
    "revision": "07f4cf156c8f0c0f80cb2377c5e32598"
  },
  {
    "url": "node/dependencies.html",
    "revision": "e7b12eb3570902b56af2a22c897fd480"
  },
  {
    "url": "node/index.html",
    "revision": "b643a8c14279ee02fd6ad8617689143f"
  },
  {
    "url": "react/advanced.html",
    "revision": "3dbe43b6572870886b7f6d58b051830a"
  },
  {
    "url": "react/base.html",
    "revision": "f861e7be5c55a111bf4d1923978704db"
  },
  {
    "url": "react/dependencies.html",
    "revision": "3c8c2c188b37b0ba1e0712534aee54db"
  },
  {
    "url": "react/hooks.html",
    "revision": "1ae02ae2af10d04bff926c903100a763"
  },
  {
    "url": "react/index.html",
    "revision": "dbdd91cc6aa8b416469a3a943fe0615b"
  },
  {
    "url": "setupFiles-vs-setupFilesAfterEnv.png",
    "revision": "3c351d966b581a8cd71d5d2b307cee20"
  },
  {
    "url": "tool/index.html",
    "revision": "64b11792dd0eb3af6e2b781766e47b61"
  },
  {
    "url": "tool/jest.html",
    "revision": "d44ad53295728936d8e70854985a860f"
  },
  {
    "url": "tool/tool.html",
    "revision": "8ef1a47753508d14665aa65168a00acc"
  },
  {
    "url": "vue/framework.html",
    "revision": "b2d95da88213d2cf57f2e75ba5249dcb"
  },
  {
    "url": "vue/index.html",
    "revision": "e6f705b18e86c113f657bd50a2d0cdd3"
  },
  {
    "url": "vue/scaffold.html",
    "revision": "7b6f4775488525efcf56b5968d96a81d"
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
