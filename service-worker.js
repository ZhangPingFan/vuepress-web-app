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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "81a4f02e2939b7c5db91fc05bdc6e4cf"
  },
  {
    "url": "assets/css/0.styles.73fbb6c6.css",
    "revision": "3338b641ff6aa711a48b388099497403"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.508fa0c0.js",
    "revision": "18d92561d1eacd7b71a05aab2a193b12"
  },
  {
    "url": "assets/js/10.5e521b26.js",
    "revision": "36cc47415a8e0277c0b59be553f51897"
  },
  {
    "url": "assets/js/11.9ad9fda6.js",
    "revision": "48a9c39f6e7c58a4bf126fb37ebd574f"
  },
  {
    "url": "assets/js/12.333bbceb.js",
    "revision": "b5b1b1630019d8b0ecaf314cedd130d7"
  },
  {
    "url": "assets/js/13.04c78c76.js",
    "revision": "b7382b81c112e71119729c7599cf406e"
  },
  {
    "url": "assets/js/14.4c7b5cc3.js",
    "revision": "40d14980501990d417c684868e1a728f"
  },
  {
    "url": "assets/js/15.3a0b3719.js",
    "revision": "192b4504a38963f8341e96323ad76f56"
  },
  {
    "url": "assets/js/16.0924bde0.js",
    "revision": "32e9b7d4b92934922ca7c6fe5b6455b3"
  },
  {
    "url": "assets/js/17.77faebaf.js",
    "revision": "f1ef1612a4a1b787cd27c570aed9dfeb"
  },
  {
    "url": "assets/js/18.252a5f2f.js",
    "revision": "1f586cabe8d81a3334834ce28f705a72"
  },
  {
    "url": "assets/js/19.7d3f31ef.js",
    "revision": "0fa7b0644f59fd2b1765fe80a1e70865"
  },
  {
    "url": "assets/js/2.da0fb1d7.js",
    "revision": "6b66922fc06290a4ed0af12d142b8503"
  },
  {
    "url": "assets/js/20.bdd3e493.js",
    "revision": "9991c6e835ac3d64f738613311d1fbc1"
  },
  {
    "url": "assets/js/21.1dce4f97.js",
    "revision": "276d30459005b541c7df74506ca58820"
  },
  {
    "url": "assets/js/22.acb171c4.js",
    "revision": "1c3f54655d5c571ef454fef4d68153a7"
  },
  {
    "url": "assets/js/23.288c32ae.js",
    "revision": "deede0d21866f0e94c4a6dd0d5bb0c4c"
  },
  {
    "url": "assets/js/24.b030e143.js",
    "revision": "52b3759c9eb68f358fd987ab547688c9"
  },
  {
    "url": "assets/js/25.55568c32.js",
    "revision": "05dd54e317ab3c2eabb1dd1c8946c7f1"
  },
  {
    "url": "assets/js/26.c0eb4d2b.js",
    "revision": "a3670587efa96372d252d8cd8b4baba5"
  },
  {
    "url": "assets/js/27.59766530.js",
    "revision": "c83dede49c354f0deaed626387c394a4"
  },
  {
    "url": "assets/js/28.9b08e1a4.js",
    "revision": "2c72374663677c9d54d8aef60c801d34"
  },
  {
    "url": "assets/js/29.409f8e4c.js",
    "revision": "612229acb565db166e5ad8b190e3bb62"
  },
  {
    "url": "assets/js/3.6d41bb2f.js",
    "revision": "bfe628fa6d011891a971aaaf108c7de4"
  },
  {
    "url": "assets/js/30.0376a2a5.js",
    "revision": "921f8700673071badb0d857045473896"
  },
  {
    "url": "assets/js/31.e928e030.js",
    "revision": "0935cb9dbe181685a9441cd50d3a9009"
  },
  {
    "url": "assets/js/32.96847cdd.js",
    "revision": "3e7605c12fb23f786a9b4b0993ba1d4c"
  },
  {
    "url": "assets/js/5.5c905881.js",
    "revision": "ffa579f45b7ac9bb12cf1039eff9c93b"
  },
  {
    "url": "assets/js/6.1171fb0b.js",
    "revision": "b19d9ddacb8855ee738e23f9a16d7ba4"
  },
  {
    "url": "assets/js/7.5b96e105.js",
    "revision": "e81307a30b33c6e7d1ece63910caae6f"
  },
  {
    "url": "assets/js/8.1b36f3e0.js",
    "revision": "b59e5eb6e15edd2cd88bb5880d0a5dca"
  },
  {
    "url": "assets/js/9.3b5961fb.js",
    "revision": "59e16a3b88c90837b9095bf2e54fbe74"
  },
  {
    "url": "assets/js/app.6f828208.js",
    "revision": "e12703ed87143713e95556436b7b3e01"
  },
  {
    "url": "assets/js/vendors~docsearch.6e6b0544.js",
    "revision": "b5b3a79450b8fb6da93a6893c42c146f"
  },
  {
    "url": "en/application/index.html",
    "revision": "7b54e8fd791f51bc766491597e99c854"
  },
  {
    "url": "en/index.html",
    "revision": "8d6b2b92b2154a2aa70ef4895240a2d6"
  },
  {
    "url": "google21c733509a589aaa.html",
    "revision": "dc170db798841bd226dabf5217b26a1f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "5de773e7f554dc38c354662e62bbde3c"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "c924d6c1d7abf0827bf05e7f533d41c4"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "5285f5460f1f76972a12d741280b73cb"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "cc40dfd01cf3b235ce6a10ebedec10c0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2a0b600f3ad0d71d9a6f789b99d3609a"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "d9e30f1bb3c8825211698eb1de034288"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "8230c53bdf042e4a40d3f61e3d1e6b8b"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "80aeead9a626b8e46289d81c90d0f264"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "1a07aeea0d6762459b94e520bbacec69"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "51884ae4c1403f79bf48adb9ca3427df"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "ee5048b66d53514bd4e6535007eef213"
  },
  {
    "url": "images/MG-1P.png",
    "revision": "b33194b1fcd1a81287fee93e49e43c86"
  },
  {
    "url": "index.html",
    "revision": "0c9182adda2bdbb8fd389da73143b07c"
  },
  {
    "url": "logo.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "love.svg",
    "revision": "dce92620955225095706c1f4a9010533"
  },
  {
    "url": "zh/application/index.html",
    "revision": "b1ca63910bcefe6934b71ea066edae10"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "ec4b500b4c1e1106b0d3d253bd79d1fb"
  },
  {
    "url": "zh/article/develop-quick-app-experience-notes.html",
    "revision": "f097b078e82dc1901c725fc71c1fb644"
  },
  {
    "url": "zh/article/index.html",
    "revision": "cf491aeee9588b6a1c98640180ce0729"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "376cea5ae05fe69231d04344680a6bb3"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "1f16253d3005d9a77c912f9b8f147d33"
  },
  {
    "url": "zh/blog/csdn-blog.html",
    "revision": "4c8ba2ed0e34d0a6c181157e91528818"
  },
  {
    "url": "zh/blog/hexo-blog.html",
    "revision": "565a150b3be654dbda4bf2299293ed26"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "e40990b965ab9a0592a006a646b8273a"
  },
  {
    "url": "zh/blog/jekyll-blog.html",
    "revision": "91f1b9671bd60b9394def055c36f9445"
  },
  {
    "url": "zh/blog/jianshu-blog.html",
    "revision": "b5eaca240235d6cadca851f9c1dd46bc"
  },
  {
    "url": "zh/blog/vuepress-blog.html",
    "revision": "0bba321248c56c11c72b1237695acf2e"
  },
  {
    "url": "zh/blog/wechat-blog.html",
    "revision": "b36795a05c42aea037a48a7bcb83f93c"
  },
  {
    "url": "zh/index.html",
    "revision": "29874f02454f3e1062ad19686bd1ab8a"
  },
  {
    "url": "zh/recruit/index.html",
    "revision": "c80355bd2cad0ac6863698cb9379c530"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
