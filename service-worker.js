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
    "revision": "33bcaf3b3b2b6e9dae13204464a6d8f9"
  },
  {
    "url": "assets/css/0.styles.df6bd8f5.css",
    "revision": "8d3ebf85bfbaf4efa138927fa37b2d10"
  },
  {
    "url": "assets/img/colour-wheel.e4a90312.jpg",
    "revision": "e4a9031240a56523931b887bd24b26e8"
  },
  {
    "url": "assets/img/cropping.b037ff65.jpg",
    "revision": "b037ff65e44ac8319fbbf276ec596a42"
  },
  {
    "url": "assets/img/drop-shadow.53e31cd7.jpg",
    "revision": "53e31cd7f24949ed02370e7663c1ffbe"
  },
  {
    "url": "assets/img/main-representatives.d5c0f5d0.png",
    "revision": "d5c0f5d04f02093b9780773c8f597579"
  },
  {
    "url": "assets/img/orthographic-drawing.be33b4ff.jpg",
    "revision": "be33b4ff86acc58c25e6f959191d8033"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/text-wrap.89f0631f.jpg",
    "revision": "89f0631f4983c92b70e0c792a962a9b8"
  },
  {
    "url": "assets/img/transparent.9cbd6119.png",
    "revision": "9cbd6119bc007eff7c1134f5ebf84f41"
  },
  {
    "url": "assets/js/10.9dd48f4b.js",
    "revision": "92fea070f4c9f350bb119351be1c8d40"
  },
  {
    "url": "assets/js/11.b3059a9c.js",
    "revision": "8ed9a41705de4e25ad5cebe7db4e0130"
  },
  {
    "url": "assets/js/12.81f03c95.js",
    "revision": "99aee6ffd95577b25fef227435da60f1"
  },
  {
    "url": "assets/js/13.03bcc24e.js",
    "revision": "789f5676fe305173bf540cc904e1bf31"
  },
  {
    "url": "assets/js/14.a3fa7810.js",
    "revision": "73ee6f8ae8ca920044335b626c119821"
  },
  {
    "url": "assets/js/15.e577d0fa.js",
    "revision": "df69dbd1a4fca39c3b98cfe917e7cd3e"
  },
  {
    "url": "assets/js/16.687a40d3.js",
    "revision": "351b8986153b4c9c9f1d011cc9f95f5e"
  },
  {
    "url": "assets/js/17.a44120ee.js",
    "revision": "3319b64c669a092ef313ea982000db7e"
  },
  {
    "url": "assets/js/18.be3403c2.js",
    "revision": "91aaa53ed98f2fe11c143e6bdb7b3970"
  },
  {
    "url": "assets/js/19.a54c7f01.js",
    "revision": "5ca92b4d1fbe7acd6f7c92626c849c2e"
  },
  {
    "url": "assets/js/2.1440a498.js",
    "revision": "0562bd3bf831718f5064fb76a53bc39b"
  },
  {
    "url": "assets/js/20.8451541a.js",
    "revision": "1ddf0ddf75e01cd23f96f71091fc6be4"
  },
  {
    "url": "assets/js/21.a6c4b7b7.js",
    "revision": "c3e2ee7d309ad4638d809a2db3c9b0df"
  },
  {
    "url": "assets/js/22.39cffe40.js",
    "revision": "cdb62134dfc5b8220aa51ee08008db95"
  },
  {
    "url": "assets/js/23.55897314.js",
    "revision": "91a64d5fb9010cbe91985ae004c45eeb"
  },
  {
    "url": "assets/js/24.1ef2a511.js",
    "revision": "1817ebb1be4935d399f9ff8317217044"
  },
  {
    "url": "assets/js/25.542b873d.js",
    "revision": "615393d9d07d694d4ae242687ce5417f"
  },
  {
    "url": "assets/js/26.dbf887bd.js",
    "revision": "41c7f44b49b2bbb9c281505c2ccfb7c0"
  },
  {
    "url": "assets/js/27.287520a7.js",
    "revision": "de23485720be7c365179d24c1bfcd36f"
  },
  {
    "url": "assets/js/28.379b5c35.js",
    "revision": "e2968ebb84e546181f74847c1202da3b"
  },
  {
    "url": "assets/js/29.8456c45e.js",
    "revision": "6e7f4d3901bb382cb3628365a14d789f"
  },
  {
    "url": "assets/js/3.b9e8d8cc.js",
    "revision": "2db54afabd086ee0e839f8c7e5ad07cf"
  },
  {
    "url": "assets/js/30.4fec1380.js",
    "revision": "3843b4f33c383451d28c8b0a5947890e"
  },
  {
    "url": "assets/js/31.434cb55f.js",
    "revision": "922383806d1b31615503d9ec6aca1651"
  },
  {
    "url": "assets/js/32.58546d28.js",
    "revision": "9f44314856087ed429c0c5e770043d2d"
  },
  {
    "url": "assets/js/33.f8dcaac8.js",
    "revision": "cfabe5d07e56d76bc3f92053ade9a812"
  },
  {
    "url": "assets/js/34.b89c5495.js",
    "revision": "21cf6bb81ceb7c6e03d83e68eb88e236"
  },
  {
    "url": "assets/js/35.bca3e2f5.js",
    "revision": "13e2f867b5c60c17db21ad592922a680"
  },
  {
    "url": "assets/js/36.2fab7e92.js",
    "revision": "12f48a1a9e1b90a32ff403d34ebc5d0c"
  },
  {
    "url": "assets/js/4.2dd67122.js",
    "revision": "9013a375ad7e8a1d3a3d02c8e126434b"
  },
  {
    "url": "assets/js/5.b10bab3e.js",
    "revision": "4a9e0f3d1317197d522a2d72c05e1074"
  },
  {
    "url": "assets/js/6.522614e2.js",
    "revision": "bc1f0d3f2135c97fc13ac02296360e2c"
  },
  {
    "url": "assets/js/7.769b3871.js",
    "revision": "9a86ee8ff23f9bae88fdd1db3992cd58"
  },
  {
    "url": "assets/js/8.87f2d478.js",
    "revision": "1476e55d2073a9f03cb15267b7804140"
  },
  {
    "url": "assets/js/9.02a4ff25.js",
    "revision": "9157f6dca1023be8bd62e8159e40ff86"
  },
  {
    "url": "assets/js/app.dff9eb85.js",
    "revision": "ef1df2b250754d0d76589f6eafb61e93"
  },
  {
    "url": "assets/js/vendors~docsearch.71751700.js",
    "revision": "8e36b8858fec5f116bbcc72c7755d78a"
  },
  {
    "url": "business/finance.html",
    "revision": "7b46677612b042354e479a047a46613d"
  },
  {
    "url": "business/index.html",
    "revision": "0dddc25af2db8cd9298a6d673b35a5aa"
  },
  {
    "url": "business/marketing.html",
    "revision": "83d1dc6ad9e7377a73e8b6de23694ddc"
  },
  {
    "url": "business/operations.html",
    "revision": "dee970f8d93684b37b85a4eeb3d39110"
  },
  {
    "url": "business/people.html",
    "revision": "1d21f7a41511480b9a3561520627fb24"
  },
  {
    "url": "business/understanding-business.html",
    "revision": "9316e4118da0ea2fb897c366f802446b"
  },
  {
    "url": "computing-science/computer-systems.html",
    "revision": "0e140bc935d54bb6e1526406cda0cbc5"
  },
  {
    "url": "computing-science/database-design-development.html",
    "revision": "def27228edde9a7db72138f108cd1aa1"
  },
  {
    "url": "computing-science/index.html",
    "revision": "dd6ed8b3cb2ab1df7e106af6b78c3fb7"
  },
  {
    "url": "computing-science/software-design-development.html",
    "revision": "468e9a2a12ea32277daae4f0d473b43c"
  },
  {
    "url": "computing-science/web-design-development.html",
    "revision": "a050e26ed0487eba2e3ccb0019490f48"
  },
  {
    "url": "english/index.html",
    "revision": "a8c7549eb34f6f7952a7515059cf2361"
  },
  {
    "url": "german/computers.html",
    "revision": "5817142d6a4873251f01e4cd852e2d37"
  },
  {
    "url": "german/days-week.html",
    "revision": "9c866d6662aacfca02f02e6d427b86c5"
  },
  {
    "url": "german/films.html",
    "revision": "83ec88fadf0bc8d362376806bfe64ebf"
  },
  {
    "url": "german/giving-reason.html",
    "revision": "f5c3d679010139f3557a262c3a2de4ed"
  },
  {
    "url": "german/health.html",
    "revision": "8cc1b685da6b6edea54954d55facf015"
  },
  {
    "url": "german/index.html",
    "revision": "bbfe14bc244c55179c789508c1875038"
  },
  {
    "url": "german/lifestyle-text.html",
    "revision": "b3306d3046bc8fbae54c9ce24725c38e"
  },
  {
    "url": "german/likes-dislikes.html",
    "revision": "7f3364c395c3b9d3b81bf3cb36de4c9c"
  },
  {
    "url": "german/music.html",
    "revision": "22136aa03518ad4bc72021227ab82dbd"
  },
  {
    "url": "german/sports.html",
    "revision": "e01eab55c0d6563a08666f644d93a41a"
  },
  {
    "url": "german/time-phrases.html",
    "revision": "42a405f6d15f1eeda613671c78ed1a5d"
  },
  {
    "url": "german/tv.html",
    "revision": "dcb4652ba922a87645dfcc285baec5ee"
  },
  {
    "url": "german/with-whom.html",
    "revision": "36eaf2d4bc78d68ec1833afa6ccbbb58"
  },
  {
    "url": "graphic-communication/index.html",
    "revision": "6d2599fd57fd3be302083522729f56f9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5dbaf2d8b729bfdf42086e2712627074"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0957339705707c4447496a7928a0dfe1"
  },
  {
    "url": "index.html",
    "revision": "5a4dc07b0fb204c1f0744c12490e642e"
  },
  {
    "url": "logo.png",
    "revision": "0957339705707c4447496a7928a0dfe1"
  },
  {
    "url": "logo.svg",
    "revision": "88962a44dc9bf50817c3e3faf228281a"
  },
  {
    "url": "maths/index.html",
    "revision": "1ca06cfbe2f602005a9b36a00e283289"
  },
  {
    "url": "modern-studies/index.html",
    "revision": "65ae03c1c10b29ed3148475171eea4b0"
  },
  {
    "url": "modern-studies/media-influence.html",
    "revision": "cdb44b53efdb99233a5bd96e00246e01"
  },
  {
    "url": "modern-studies/pressure-groups.html",
    "revision": "456cadbcd6c83d39e4af7a64d86c3385"
  },
  {
    "url": "modern-studies/scottish-democracy.html",
    "revision": "ee57b800e05eeb8be65e082d7d7070fe"
  },
  {
    "url": "modern-studies/social-issues.html",
    "revision": "2246d0c2101e9109d3321858237cdf22"
  },
  {
    "url": "modern-studies/usa.html",
    "revision": "6a504dc1f40be4875ae62b5e5dd9c10f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
