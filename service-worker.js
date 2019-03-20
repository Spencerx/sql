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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f94952931d94e5a29b695e06a9ad245f"
  },
  {
    "url": "Alter/Add/index.html",
    "revision": "b3db0e188a927a8ac2a2de84c00c5217"
  },
  {
    "url": "Alter/Drop/index.html",
    "revision": "6d01b672eec87ebed85317061988f948"
  },
  {
    "url": "Alter/index.html",
    "revision": "97a23cc6dcc6adef545718de0ae891f0"
  },
  {
    "url": "Alter/Modify/index.html",
    "revision": "72c20925d3025c8d2ee80bd365323a94"
  },
  {
    "url": "assets/css/1.styles.2187c1ae.css",
    "revision": "3e2e3df3b141da99f3491359fd73baf6"
  },
  {
    "url": "assets/css/2.styles.e606b350.css",
    "revision": "1052387d1d128ddeef0f1f57bda445dc"
  },
  {
    "url": "assets/css/3.styles.20e43bb7.css",
    "revision": "1f655dc6d91911a9cab832d676df0944"
  },
  {
    "url": "assets/css/4.styles.3dfe1f10.css",
    "revision": "b147a637eb4e2dd8d0a9ce08447427d6"
  },
  {
    "url": "assets/css/5.styles.0a6b1585.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.879f6333.css",
    "revision": "4f7e6f9e2c8eee3fa8de7379ebf4394a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e618b483.js",
    "revision": "3325372dc0e64b521d324835d3630bcf"
  },
  {
    "url": "assets/js/11.4a516234.js",
    "revision": "e1cda86557ed0748f123b4145219e347"
  },
  {
    "url": "assets/js/12.df4419e0.js",
    "revision": "88456eef70cd9472c2e420376ff9a000"
  },
  {
    "url": "assets/js/13.f0227ac3.js",
    "revision": "d7a39cadffd8f8f5ab0e842d3d8fb2ef"
  },
  {
    "url": "assets/js/14.c570fb9e.js",
    "revision": "d207b4c0503c465fe48125fb1538cf77"
  },
  {
    "url": "assets/js/15.0a38d26e.js",
    "revision": "2f7f0e381c48af2489b2f63f613ed604"
  },
  {
    "url": "assets/js/16.34168cdb.js",
    "revision": "8226caab1c568f39aa2a136e9325f6cb"
  },
  {
    "url": "assets/js/17.25f0c272.js",
    "revision": "078f93aa935a61160347df65aa5bede2"
  },
  {
    "url": "assets/js/18.bd09c8e5.js",
    "revision": "28e0d28cf425cf8a8b49a93157c26d77"
  },
  {
    "url": "assets/js/19.ef3c9ca9.js",
    "revision": "cd97549cd5ce0c73176bf0d493dc5a2c"
  },
  {
    "url": "assets/js/2.e606b350.js",
    "revision": "f0b35b1745601c944012c1e6f3784743"
  },
  {
    "url": "assets/js/20.5426f517.js",
    "revision": "6ad7d06483b0897792e1e65dfbc509ba"
  },
  {
    "url": "assets/js/21.19a168ed.js",
    "revision": "63b30fdc716c05b4bb32f6f8a3d51654"
  },
  {
    "url": "assets/js/22.cc81c209.js",
    "revision": "0dcc4dabfa4b36fe3d03dc2a2e1bfb8c"
  },
  {
    "url": "assets/js/23.a6aadc3e.js",
    "revision": "677c9daa0b3d5b7a5b97aa608a38b917"
  },
  {
    "url": "assets/js/24.e70fb7ef.js",
    "revision": "b1ed961894e6b232176272bf83fe2877"
  },
  {
    "url": "assets/js/25.626a6d56.js",
    "revision": "ff93bb8b3a1b7bc681fe6941efe84a44"
  },
  {
    "url": "assets/js/26.fb036b21.js",
    "revision": "2122aaf606e5c124306732d347276192"
  },
  {
    "url": "assets/js/27.f6e599a4.js",
    "revision": "60834e40b1744dc91d54f2f74b5e478d"
  },
  {
    "url": "assets/js/28.319e7daa.js",
    "revision": "4334a20a889547f9e382a19a23cf4960"
  },
  {
    "url": "assets/js/29.bcd936d1.js",
    "revision": "e8f42445c15c18f3cb249c0eeb9fe5d5"
  },
  {
    "url": "assets/js/3.20e43bb7.js",
    "revision": "893533f89cd7e7cf2e01b7ded4514253"
  },
  {
    "url": "assets/js/30.8ad946f1.js",
    "revision": "c2d16fd6a14abcadb58af004a5a39463"
  },
  {
    "url": "assets/js/31.2d40aa63.js",
    "revision": "f04c54c0d10192a997e2e0200bf28d66"
  },
  {
    "url": "assets/js/32.a6a2970e.js",
    "revision": "b95aaaa0e0496cf5ea07637be61f77fd"
  },
  {
    "url": "assets/js/33.c25309fc.js",
    "revision": "d1804730b8a3ebdf6086378caf9e606a"
  },
  {
    "url": "assets/js/34.31ed75d6.js",
    "revision": "a3c62de809220d284e445c53ed31e9a0"
  },
  {
    "url": "assets/js/35.9bd19dd5.js",
    "revision": "1bd36adf3a9123685628a524769380ec"
  },
  {
    "url": "assets/js/36.ab0dba38.js",
    "revision": "e39682412b510afe9881818ab6bd4bc5"
  },
  {
    "url": "assets/js/37.e6983b2d.js",
    "revision": "cc7f225b30b2842d39a097f1c4c02b0e"
  },
  {
    "url": "assets/js/38.7dea4c5f.js",
    "revision": "dc4098dd9386d8adfd5e4aaa3e3e83ea"
  },
  {
    "url": "assets/js/39.19101003.js",
    "revision": "bed2242b4a36b8f46ce591cbfd9548a6"
  },
  {
    "url": "assets/js/4.3dfe1f10.js",
    "revision": "8d49276db3e6d897299279465d068187"
  },
  {
    "url": "assets/js/40.aea16395.js",
    "revision": "64436cee2fc69a76463f6e1765a3e657"
  },
  {
    "url": "assets/js/41.2407fdd2.js",
    "revision": "f67ac0da2471d16ebc73efc079f0abcb"
  },
  {
    "url": "assets/js/42.e99e4690.js",
    "revision": "8c96ba29025cfb414d10215fc250bd22"
  },
  {
    "url": "assets/js/43.f60a1b97.js",
    "revision": "9a4b512e80535f5070a927fcff065a25"
  },
  {
    "url": "assets/js/44.b2d8227a.js",
    "revision": "b8110919f45508d3c23d29dc01f36c59"
  },
  {
    "url": "assets/js/45.2211ae47.js",
    "revision": "3e543d110cf083f4f5012b893c874f8c"
  },
  {
    "url": "assets/js/46.40b0f17c.js",
    "revision": "b4716c88d1068a79e4175c84afbd1201"
  },
  {
    "url": "assets/js/47.58031d7e.js",
    "revision": "98957a3ce430aa4cccf61f201af2393f"
  },
  {
    "url": "assets/js/48.18859af5.js",
    "revision": "592893b47adc0635e849c92692ac5611"
  },
  {
    "url": "assets/js/49.a7934482.js",
    "revision": "48a152b3bfb8fab688407c810c35b4db"
  },
  {
    "url": "assets/js/5.0a6b1585.js",
    "revision": "202449daef9c49355fbb7b96bae8ca57"
  },
  {
    "url": "assets/js/50.b7e45169.js",
    "revision": "943651d5c794b2c195bdba29442466ea"
  },
  {
    "url": "assets/js/51.753edc38.js",
    "revision": "c3da2773b2c517a0b32c3b4c7287ac0b"
  },
  {
    "url": "assets/js/52.447d9e1b.js",
    "revision": "2605d7ec582cfa90d9f5b177b54fe4d6"
  },
  {
    "url": "assets/js/53.923d5d19.js",
    "revision": "1a72b439b56a0a2e379ebe48e3e97a6c"
  },
  {
    "url": "assets/js/54.9b7f85ed.js",
    "revision": "e8987d86c9fa794fa78a8f9eef2eb14c"
  },
  {
    "url": "assets/js/55.4e5f0886.js",
    "revision": "a0a1482e6baf368f9d3747a0a71b5daf"
  },
  {
    "url": "assets/js/56.29ac6315.js",
    "revision": "cf2bed7cb6e8bc0e91286a4188bfdad3"
  },
  {
    "url": "assets/js/6.6875972d.js",
    "revision": "82e75655276a5277c2384f163177a687"
  },
  {
    "url": "assets/js/7.c1c4ba57.js",
    "revision": "a5b37d6c86526c1a8928d4b714f3fde5"
  },
  {
    "url": "assets/js/8.0e583c19.js",
    "revision": "6f9bc3473c87b90a861926f052801801"
  },
  {
    "url": "assets/js/9.6b7f5561.js",
    "revision": "bc6d6f01e4b0832050d2a77a543b82b5"
  },
  {
    "url": "assets/js/app.879f6333.js",
    "revision": "dedc85a74adbc126babb926be3fb17c7"
  },
  {
    "url": "assets/js/vendors~docsearch.2187c1ae.js",
    "revision": "13bdc6c8629d21017c174b7949e1ea8b"
  },
  {
    "url": "Commit/index.html",
    "revision": "b8fa42d72daea912bd1ba4256cb23e99"
  },
  {
    "url": "Create/index.html",
    "revision": "531c46f2b4427a21ae06815f28284ed8"
  },
  {
    "url": "Delete/index.html",
    "revision": "eb12794e84ff9d2dc89d4b039d5c2638"
  },
  {
    "url": "Describe/index.html",
    "revision": "502f425a19b82f4ed931a8b88ca1a8f7"
  },
  {
    "url": "Drop/index.html",
    "revision": "b763776c0ff383cd3d591d631859e13a"
  },
  {
    "url": "Group/index.html",
    "revision": "839456b4be4cfe211edad66edd20c44d"
  },
  {
    "url": "GroupFunction/index.html",
    "revision": "712c6ca02e24ac0d17aed5a89257962e"
  },
  {
    "url": "index.html",
    "revision": "046830e26c8f036ce777081261b9fed4"
  },
  {
    "url": "Insert/index.html",
    "revision": "8fde858d4de347a657f425b4d8d5ac9c"
  },
  {
    "url": "Join/index.html",
    "revision": "b4d6ae22a32f2ee9cc72715c8d2efa05"
  },
  {
    "url": "Join/Inner/CartesianProduct/index.html",
    "revision": "b34314be037229285eef029a1f539dc8"
  },
  {
    "url": "Join/Inner/Cross/index.html",
    "revision": "604b9f51dcd887916e9fbac237d5f3c7"
  },
  {
    "url": "Join/Inner/Equijoin/index.html",
    "revision": "834c6ff540db5ee13a1bc8e325a52eee"
  },
  {
    "url": "Join/Inner/index.html",
    "revision": "1525d6f4b7a22e45cd5701ba9e42242d"
  },
  {
    "url": "Join/Inner/Inner/index.html",
    "revision": "e76ea9ba6b3702e6f71da3220cbfbcec"
  },
  {
    "url": "Join/Inner/Natural/index.html",
    "revision": "2c318595c4ea9a9ac8f181c18d0b2673"
  },
  {
    "url": "Join/Outer/Full/index.html",
    "revision": "1403b5823f484248cf1e1c1246d8bafd"
  },
  {
    "url": "Join/Outer/index.html",
    "revision": "980a1f9bb9469ee434fb584376513c74"
  },
  {
    "url": "Join/Outer/Left/index.html",
    "revision": "cada317df7340418e53229f6b79ceec9"
  },
  {
    "url": "Join/Outer/Right/index.html",
    "revision": "23516079118ab34ddc597a011f96ab4a"
  },
  {
    "url": "Normalization/1NF.html",
    "revision": "149685cba872c80b7adaf85027806f83"
  },
  {
    "url": "Normalization/2NF.html",
    "revision": "85592e88c71749898bada3453b66eb14"
  },
  {
    "url": "Normalization/3NF.html",
    "revision": "431a641ba636c92d66e61b309ffc384d"
  },
  {
    "url": "Normalization/4NF.html",
    "revision": "217b0acebfd0987c2c527b15af11fab7"
  },
  {
    "url": "Normalization/5NF.html",
    "revision": "dc339a9f2f13627e39cc8543592e42b4"
  },
  {
    "url": "Normalization/Boyce-CoddNF.html",
    "revision": "2f13571238db8dca2a0774ea9946b9a9"
  },
  {
    "url": "Order/index.html",
    "revision": "1582698a6d13f004fb493d9bd07c78e9"
  },
  {
    "url": "Overall/Command/index.html",
    "revision": "1117e232f592d9841d4e9b0ed6ba46f5"
  },
  {
    "url": "Overall/DataType/index.html",
    "revision": "2401ceca5339f115e68f9ad4ffde11b0"
  },
  {
    "url": "Overall/Relationship/index.html",
    "revision": "bd819951c1ff469d218b185c43c73c08"
  },
  {
    "url": "Overall/Table/index.html",
    "revision": "40b5bb1e9aa6bfd17842651b7c4aeea8"
  },
  {
    "url": "Rename/index.html",
    "revision": "2bce8c86ba70e9f5186c5b5769b3952b"
  },
  {
    "url": "Rollback/index.html",
    "revision": "926011520e51852fe0b7a69b01ef9e92"
  },
  {
    "url": "Sample-Database/Countries.html",
    "revision": "938e92f6aa032e44ee8525d011ca78f7"
  },
  {
    "url": "Sample-Database/Departments.html",
    "revision": "14953ae21637649fb2aa408a2299a6b6"
  },
  {
    "url": "Sample-Database/Employees.html",
    "revision": "a9840f40c38b805cf032901ddb0a3e14"
  },
  {
    "url": "Sample-Database/index.html",
    "revision": "d0dbae57010550a9825ac4f51e98ea0b"
  },
  {
    "url": "Sample-Database/Job_History.html",
    "revision": "0df6a67e8ff5e713460e5a8d2d1a7a44"
  },
  {
    "url": "Sample-Database/Jobs.html",
    "revision": "d55d32a039bc20f23abd6826760a7c18"
  },
  {
    "url": "Sample-Database/Locations.html",
    "revision": "78abca1ca774a7fa6babadc691af4ee2"
  },
  {
    "url": "Sample-Database/Regions.html",
    "revision": "dda1b897672b222d505666f087a28110"
  },
  {
    "url": "Savepoint/index.html",
    "revision": "bec1812737d11645b069d9e127360c15"
  },
  {
    "url": "Select/index.html",
    "revision": "f8e021eb615d9d4af40428c5e6763d75"
  },
  {
    "url": "Subquery/index.html",
    "revision": "ecbf9c44f7f1c918756a00f8f87e9763"
  },
  {
    "url": "th/index.html",
    "revision": "f019e34c54965b0c962f50db4026507c"
  },
  {
    "url": "Update/index.html",
    "revision": "7e8fa5ce30c54dfbaeb6f1ab71be7826"
  },
  {
    "url": "Where/index.html",
    "revision": "9e89c8e641cb239f8d71ce43534a7a4a"
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
