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
    "revision": "868ce27ab084a8a6c474dfde2b5bca96"
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
    "url": "assets/js/14.de90f19f.js",
    "revision": "15f059a5c96114aac93497d4bf0cac69"
  },
  {
    "url": "assets/js/15.f4bd7678.js",
    "revision": "23096436adc8c632a8718e1fd9aaffe5"
  },
  {
    "url": "assets/js/16.c171765d.js",
    "revision": "1f4d0fa5f1cda64eb967d2da76ee9019"
  },
  {
    "url": "assets/js/17.2798de83.js",
    "revision": "61f139ef904e8734a7e0f44da9284698"
  },
  {
    "url": "assets/js/18.26830ce2.js",
    "revision": "8ef7e99863bb7fb237ae23f3db1fe091"
  },
  {
    "url": "assets/js/19.e6fb8bcb.js",
    "revision": "159c37935de0d349e2949f01d7fa81b7"
  },
  {
    "url": "assets/js/2.e51fe51e.js",
    "revision": "28a3c1838e9cbb613c3b22e7aa8ef6f7"
  },
  {
    "url": "assets/js/20.93c20d2f.js",
    "revision": "83c22df5ba2066dc471a46727b1603d0"
  },
  {
    "url": "assets/js/21.2b2029a2.js",
    "revision": "6521d36c1e7c7ab552862357b5f5e297"
  },
  {
    "url": "assets/js/22.c01d798f.js",
    "revision": "e989575c9ca063842fb36f772b70d003"
  },
  {
    "url": "assets/js/23.5d6c448c.js",
    "revision": "695c8e210d528a71b060176e3e39c2ae"
  },
  {
    "url": "assets/js/24.b05299c1.js",
    "revision": "16e86ed98c8b21b101e531ff21393b02"
  },
  {
    "url": "assets/js/25.bd04cd37.js",
    "revision": "081bc95b9bf5c58f0f3b87f9788b1e0a"
  },
  {
    "url": "assets/js/3.57e7301a.js",
    "revision": "dc596314857b432857e9290648dd393e"
  },
  {
    "url": "assets/js/4.a54ef958.js",
    "revision": "8af1e947c0b8e0cf5d843bf9273cc530"
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
    "url": "assets/js/app.dde9b4b9.js",
    "revision": "073ce72dfc3e98dc39bd44a52420a76f"
  },
  {
    "url": "git/fix.html",
    "revision": "c69d0cd7dcc5588e3435ed260c829209"
  },
  {
    "url": "git/git-action.html",
    "revision": "94d5d2c8233440a6196b82fc13ad0cd5"
  },
  {
    "url": "git/index.html",
    "revision": "fa49788e1388df50385279fdb0031d3b"
  },
  {
    "url": "hosts.png",
    "revision": "f85e5d76ce140f4350d3192f24a83cfc"
  },
  {
    "url": "index.html",
    "revision": "65584d635ac406f169c748df9136027f"
  },
  {
    "url": "Javascript-DataType.png",
    "revision": "8edde8e497b5b66ce893289c13192b5f"
  },
  {
    "url": "javascript/dependencies.html",
    "revision": "830a9806344ea4e9e85fd74dbc22c4e1"
  },
  {
    "url": "javascript/function.html",
    "revision": "5b22be1ef0964821339aa02bd1ff6ff3"
  },
  {
    "url": "javascript/index.html",
    "revision": "4c9ceeb30201e3a74a4acb8632612115"
  },
  {
    "url": "javascript/this.html",
    "revision": "42986aa80fd8000a740eadd0f74af72c"
  },
  {
    "url": "logo.png",
    "revision": "aca1cf8154f00a69c07b300d72204b2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "ad6b14d05e4c554b315eecc297c743db"
  },
  {
    "url": "mobile/index.html",
    "revision": "66da921127df1616de7e22f2e5465c45"
  },
  {
    "url": "react/advanced.html",
    "revision": "90066261fdc9fae54f4a3874b248b8b4"
  },
  {
    "url": "react/base.html",
    "revision": "9efb5bda00dfd08902ae9eaff6133cd7"
  },
  {
    "url": "react/dependencies.html",
    "revision": "edfd49f2234e9c083af66de21b13cf53"
  },
  {
    "url": "react/index.html",
    "revision": "4d0127b687536aeaa35fbd6ad277831f"
  },
  {
    "url": "vue/framework.html",
    "revision": "07faa00164fe8fff32ede9f874317726"
  },
  {
    "url": "vue/index.html",
    "revision": "9fea650498dc9227b88b4f061ed4b98b"
  },
  {
    "url": "vue/scaffold.html",
    "revision": "39a15aa2e38d0fbc5a03147642ef8216"
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
