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
    "revision": "285f621464f337608d7177400660fccb"
  },
  {
    "url": "assets/AltServer.png",
    "revision": "fbbbdbd262f994bfd4d05a070c9ca7b1"
  },
  {
    "url": "assets/AppStore/AppStore_en-US_Black.svg",
    "revision": "2928664fe1fc6aca88583a6f606d60ba"
  },
  {
    "url": "assets/AppStore/AppStore_en-US_White.svg",
    "revision": "0f3514a45d51f95167e5fe8b6a03bb60"
  },
  {
    "url": "assets/AppStore/AppStore_fr-FR_Black.svg",
    "revision": "2cfdd0a74cd257a00a1821b968acfa92"
  },
  {
    "url": "assets/AppStore/AppStore_fr-FR_White.svg",
    "revision": "9d51a4305acf499f55276445860eba56"
  },
  {
    "url": "assets/css/0.styles.68f7189f.css",
    "revision": "9b4440bf9b5d0653bfd1a10a9ca2213a"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/iCloud.gif",
    "revision": "c1dd8928a541115ee11389aaca5fab13"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8d3e0f58.js",
    "revision": "3b42b2d055ae092740f5159af23d6910"
  },
  {
    "url": "assets/js/10.de47a80d.js",
    "revision": "88bc274834bd98b2c5fb89197d9d5a3f"
  },
  {
    "url": "assets/js/11.92af830f.js",
    "revision": "48ee723c8f728ec3d5d9ebdfb35a0fe2"
  },
  {
    "url": "assets/js/12.2a0cc4c8.js",
    "revision": "4761fa14cf81ddf42f4f82feeafed72a"
  },
  {
    "url": "assets/js/13.ec2016cc.js",
    "revision": "47691349c483fb06f7c0aac7142f0e92"
  },
  {
    "url": "assets/js/14.466fa7ee.js",
    "revision": "59a62247077c7574d45faa706b058f52"
  },
  {
    "url": "assets/js/15.e48ee5dd.js",
    "revision": "fbe25627eb95e8650cfaffadb471f909"
  },
  {
    "url": "assets/js/16.dba209e2.js",
    "revision": "2d7e185672461dcab28dcbfb1f79b74a"
  },
  {
    "url": "assets/js/17.ba002567.js",
    "revision": "15e03fd0f76d6829aa0c832d8f611c03"
  },
  {
    "url": "assets/js/18.524d97b6.js",
    "revision": "1f1a433f39cd0f02e3c52c3ffcb1091b"
  },
  {
    "url": "assets/js/19.13645f57.js",
    "revision": "aab019d27cf5dc3809bfdc9a1b09a176"
  },
  {
    "url": "assets/js/20.84ffa9c0.js",
    "revision": "1433a3a20fbdb68b8c09aec0cc368781"
  },
  {
    "url": "assets/js/21.e8cbf288.js",
    "revision": "48c87ddce59cf98e918bc97ee3531994"
  },
  {
    "url": "assets/js/22.5aa07f80.js",
    "revision": "2b46253526e56bb79faf1dfa39a876aa"
  },
  {
    "url": "assets/js/23.0145162a.js",
    "revision": "768afc769ce57a85e06521e97a97c505"
  },
  {
    "url": "assets/js/24.9b857f1d.js",
    "revision": "e346d3242ebaa8340a1bb24cbceb986f"
  },
  {
    "url": "assets/js/25.59b86346.js",
    "revision": "22effc3eeb5a00474bfbc4b5a0b374a0"
  },
  {
    "url": "assets/js/26.8ecfdb98.js",
    "revision": "8efa31ee3f5324aa52d3da28cd9c56fc"
  },
  {
    "url": "assets/js/27.0d1c81ce.js",
    "revision": "7c22c9f91a85dc3b7b4650aa97e0f6e1"
  },
  {
    "url": "assets/js/28.6d600ea1.js",
    "revision": "8bc323dceed6283920fc47c21b3be198"
  },
  {
    "url": "assets/js/29.55fbd999.js",
    "revision": "932eb20d638938fb1e9cab81c6989ec8"
  },
  {
    "url": "assets/js/3.5ede2cd4.js",
    "revision": "04fc0bdefe51f5617bc0f398cd763277"
  },
  {
    "url": "assets/js/30.c58b0fda.js",
    "revision": "b095706064e0d3ab0919b92ec39eab03"
  },
  {
    "url": "assets/js/31.5cc3d0a1.js",
    "revision": "52546e91ee4ad16cea95a327a29ec6ab"
  },
  {
    "url": "assets/js/32.6e67f24b.js",
    "revision": "71404d60563b65eb159aa45cd6e9e48c"
  },
  {
    "url": "assets/js/33.33a39a34.js",
    "revision": "0359fccad9b88470914bb54c16b75791"
  },
  {
    "url": "assets/js/4.0378e3f2.js",
    "revision": "1469b563ed34bd2e1728855878663e1e"
  },
  {
    "url": "assets/js/5.4b961424.js",
    "revision": "28c046573e7866d27c3d3bffebda9417"
  },
  {
    "url": "assets/js/6.12b26f88.js",
    "revision": "6699fa026082a99a7ca819c77a26a532"
  },
  {
    "url": "assets/js/7.b83fd89e.js",
    "revision": "8030047cdf02903b606b3cecb1cd4679"
  },
  {
    "url": "assets/js/8.df1c1c8a.js",
    "revision": "9d6c57716a6b923a098d5aa88e6c3561"
  },
  {
    "url": "assets/js/9.8eb99305.js",
    "revision": "70bca4efe920dbce77ee1edb23d3b002"
  },
  {
    "url": "assets/js/app.254f46c4.js",
    "revision": "532ea46376456fd7e1080337ae4f8c20"
  },
  {
    "url": "bg/help/faq/index.html",
    "revision": "f1ce25e7e666a5f67e965efb3f871745"
  },
  {
    "url": "bg/help/guides/getting-started/index.html",
    "revision": "99630cfd60a004e5f2363d973aa107cb"
  },
  {
    "url": "bg/help/index.html",
    "revision": "fa0b2f986be53fa7bba8d1b3585cf2ea"
  },
  {
    "url": "bg/index.html",
    "revision": "7ce7e1f1b962849ccd931af65b9dde3b"
  },
  {
    "url": "fr/help/faq/index.html",
    "revision": "0f39816610ca841ae10175263bc1acbf"
  },
  {
    "url": "fr/help/guides/getting-started/index.html",
    "revision": "74bd6d3328badc55474a8e3831ce041d"
  },
  {
    "url": "fr/help/index.html",
    "revision": "05fd8207882d16a2f4c92ea11d7b2d2d"
  },
  {
    "url": "fr/index.html",
    "revision": "20c55fcd91976ff1fdb8079fe2c97bd3"
  },
  {
    "url": "help/faq/index.html",
    "revision": "98a33d5f2fedf0499a508e2405a13c4b"
  },
  {
    "url": "help/guides/adding-repos/index.html",
    "revision": "42e857935333c6570433b43939be178c"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "f8cd3a44b2c040de10c810e23d764dd8"
  },
  {
    "url": "help/index.html",
    "revision": "a4ae0509f4cd8e5296a5209735f5880d"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "c97e8a691df9abf97f4c668ecbda9768"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "c085c496019127c205aa7d0352e55313"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "dea7d9c89fb1d9b6d7e08f4cc4d68f08"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4d9597730f63ad914bf0d15e0869e325"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "d56847c010ba76b4bb63e2ee48bc1df4"
  },
  {
    "url": "icons/logo-alt.png",
    "revision": "8e10c91f77baa73fca38cd7625b70742"
  },
  {
    "url": "icons/logo-alt.svg",
    "revision": "3c194ed627157351fb069caa66d2e592"
  },
  {
    "url": "icons/logo.png",
    "revision": "ee7b1e17796076ddade3958468ac80e7"
  },
  {
    "url": "icons/logo.svg",
    "revision": "db61fee2726ef37f62fe2a49e3b361f9"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "495484cfed365e313c750934d8882ea6"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "78dcd70d566ee7b0d9d9b6b659d425e4"
  },
  {
    "url": "index.html",
    "revision": "25cdd42d3590f1dda454d581b5dec799"
  },
  {
    "url": "it/help/faq/index.html",
    "revision": "53fde0d99bbef1dc3bdaef2460799b37"
  },
  {
    "url": "it/help/guides/getting-started/index.html",
    "revision": "30438b35498e28d818f87a28d772ba18"
  },
  {
    "url": "it/help/index.html",
    "revision": "836ff3c88564f09c30db4997a5b91913"
  },
  {
    "url": "it/index.html",
    "revision": "7c505f5713e8b2bcefa5a0ed240fd585"
  },
  {
    "url": "nl/help/faq/index.html",
    "revision": "857614caf8cbecbb5a5514d3769e2bd8"
  },
  {
    "url": "nl/help/guides/getting-started/index.html",
    "revision": "4b73ef2e19081bf6e7f851ff1db8a3a3"
  },
  {
    "url": "nl/help/index.html",
    "revision": "b92f8821a286dc9b3936e867dfec329f"
  },
  {
    "url": "nl/index.html",
    "revision": "2a690d33a6a9374ea0eed11a48905ff0"
  },
  {
    "url": "privacy_policy/index.html",
    "revision": "f2efbcf57ee009ad0c2cdba61519a012"
  },
  {
    "url": "scripts/remove_service_worker.js",
    "revision": "5883d971498a169e98375b8c20ff3238"
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
