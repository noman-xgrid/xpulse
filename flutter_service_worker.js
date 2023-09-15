'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ff4de268d696277eaff74c1f74a42040",
"index.html": "d80ec17da4a5c57a0bb868285438db51",
"/": "d80ec17da4a5c57a0bb868285438db51",
"main.dart.js": "a2a3c58f4779d92d8be02cec3b8abef0",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "7361d6696f35714eceb86bc55b38673e",
"icons/Icon-192.png": "5a1a905e21edb19641c2e9cd10b1995c",
"icons/Icon-maskable-192.png": "5a1a905e21edb19641c2e9cd10b1995c",
"icons/Icon-maskable-512.png": "b1ea3ae4a14e6dfecc64beb9bf257051",
"icons/Icon-512.png": "b1ea3ae4a14e6dfecc64beb9bf257051",
"manifest.json": "87001f87f6360b636900561896b7b24e",
"assets/AssetManifest.json": "76053869604b1b3800e254b97f70436f",
"assets/NOTICES": "ca4fced2c5f33a787ea1124fff416c13",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "c48fbe7274a913c5b8bbe096fe02c0c5",
"assets/fonts/MaterialIcons-Regular.otf": "3ac66e3f59f11669f8992d740cf9424b",
"assets/assets/xpulse_logo.svg": "8abdf1ada141c499dfb32f855812942b",
"assets/assets/x_logo.png": "e26a2f88597e73e5f0d7b33194e73038",
"assets/assets/images/birthday_header_image.svg": "c6780823232fe2f36b9d28646c21d12d",
"assets/assets/images/event_image.png": "3203cd81ab9fa6705bc2d7469d7d8c69",
"assets/assets/images/male.svg": "d6adfc8b355ab8a75554b10f0a9f5350",
"assets/assets/images/login_right.svg": "21a9626082a9a09f0db39130d651124e",
"assets/assets/images/select_function_bg.png": "03181074252326fbc9a600a37ee59dff",
"assets/assets/images/profile_image.svg": "a33eb97142a9c39677ff9ead04b5c179",
"assets/assets/images/login_left.svg": "b97af5e8263aaf9781bfa69411ca9ffa",
"assets/assets/images/Shape.png": "4bbfc9eec48dcecedf7c3691c4f92ef2",
"assets/assets/images/cto_home_image.svg": "fc52fb728a6cccfabc29851de4a23e9b",
"assets/assets/images/nothing_to_show.svg": "39b35992d1875f604b385f499312e5bb",
"assets/assets/images/request_cto_image.svg": "44799bd669e4ea23848be26391602026",
"assets/assets/images/leaveApply_image.svg": "3cb478ce01bb4fbaa1e66eb4200e7d8a",
"assets/assets/images/cto_requested_successfully_image.svg": "f862ad1d4ad2ec5ecc3cdea5896e1ac2",
"assets/assets/images/profile.png": "4c1c3f7a4260cd54600aefc99ad0971e",
"assets/assets/images/apply_cto_voucher_image.svg": "61f9edac6a34035afce128061641dd35",
"assets/assets/images/female.svg": "5be7e09c9e1ab5953bba59209fdd1ecd",
"assets/assets/images/welcome_image.svg": "ffde0d86ac2404bf5dd956d9da44935e",
"assets/assets/backgrounds/login_bg_mobile.svg": "88675b60fb7472bd2aff1e40c9c65d4d",
"assets/assets/backgrounds/select_function_bg.svg": "1c58795c91fbb461ce4a03a3fdb905db",
"assets/assets/backgrounds/birthday_card_bg.svg": "43077fcde03bf6a3327d67bdef5014ad",
"assets/assets/backgrounds/hr_level_guide_bg.svg": "ce81a621ba56d5968d1183c4f9886900",
"assets/assets/backgrounds/login_bg.svg": "fe32a05321b32c606815632c8f0a4977",
"assets/assets/backgrounds/birthday_header_bg.svg": "41b6840bd83a01bf504d321fda6935e4",
"assets/assets/backgrounds/hr_policies_bg.svg": "d9d030fefd7df5eeba7206ead1c922b9",
"assets/assets/backgrounds/hr_leave_policy_bg.svg": "c286c423aab69113a0bee421cb8e649a",
"assets/assets/backgrounds/hr_calender_bg.svg": "d8fbf045febc67b183f07255a04f9c75",
"assets/assets/logo.png": "1b34cc86f4f257577e6293cda7b680f2",
"assets/assets/icons/search_icon.svg": "4df2c1014d1dbabcec750da433ca2895",
"assets/assets/icons/wedding_icon.svg": "9ca8bf3a9f5edb36b2600890f4d3198e",
"assets/assets/icons/crown_selected_icon.svg": "ef0fb0820ced4b6fc32cd9b93a19efc0",
"assets/assets/icons/leavesSelectedIconMobile.svg": "256411c6178757a9d6195ed54f48ef0c",
"assets/assets/icons/history_icon_small.svg": "6766f39d9d742e1e3ea6a60f87493514",
"assets/assets/icons/settings_icon.svg": "eabacc829c734e20bcfdd26451746817",
"assets/assets/icons/home_icon.svg": "f369732f6c857295b1b4aeb008639390",
"assets/assets/icons/dashboard_icon.svg": "47765edd80f0b9d0fa0c1d6d0a1d340d",
"assets/assets/icons/edit_icon.svg": "9a027b5779810df35c5d25fb5ee103ae",
"assets/assets/icons/on_afk_icon.svg": "27c15b6ce19bd2de1ea7db832107f685",
"assets/assets/icons/star_icon.svg": "228c09d9862e635ed2a88ae12ac4e130",
"assets/assets/icons/maternity_icon.svg": "9571e2bedfa1e97bf0d2f6efcb25ccd0",
"assets/assets/icons/circular_close_icon.svg": "d81041bdd72a542c598055ca0f6a52a5",
"assets/assets/icons/manage_selected_icon.svg": "2e3c6302059b9037b8ef3133474b562c",
"assets/assets/icons/google_icon.svg": "9c7b4757d1781372a301677ac6df5d02",
"assets/assets/icons/calender_icon.svg": "e554c9b0ce0e6dbb45f0e8f65cc2744a",
"assets/assets/icons/afk_icon.svg": "2ea6a412b9ee3394d3e0a7abdfb282de",
"assets/assets/icons/employees_icon.svg": "061a3e16431fb85ac9470e6b8fc79bb6",
"assets/assets/icons/calender_icon_large.svg": "481205751d6f9304a8449e3adbd33b97",
"assets/assets/icons/projects_icon.svg": "b780a871d676eb7e67210fef44751408",
"assets/assets/icons/employeeSelectedIconMobile.svg": "568df2582dc3723c847bd468c94da84f",
"assets/assets/icons/active_fab.svg": "6bbb4874c9742b9fd6359359102170eb",
"assets/assets/icons/medical_icon.svg": "724917e0f6299674a33e2a1af1dfbff8",
"assets/assets/icons/laptop_icon.svg": "7738e3f2fb7ca429ee21fb7210999410",
"assets/assets/icons/fab.svg": "9ebcc5b38e357687f99463358eb104fb",
"assets/assets/icons/hr_icon.svg": "c3bdc39bd23088c6a325f84b36599a10",
"assets/assets/icons/settings_selected_icon.svg": "9f8780d3c1e5f37608c32c35c45c6892",
"assets/assets/icons/crown_icon.svg": "b0afcca2cf03e382cd309f929f3b754c",
"assets/assets/icons/filter_selected_icon.svg": "ed9ad677c9afb8d776124393a947a2de",
"assets/assets/icons/wfo_icon.svg": "77481226bc07aafa1235806076893237",
"assets/assets/icons/cto_icon.svg": "f607399b4a9101aa402e4b4ea6d90b25",
"assets/assets/icons/all_leaves_icon.svg": "262196db172d98ef3577404409009410",
"assets/assets/icons/yellow_cto_tag_icon.svg": "4944e16933a3ba001cce677b2a1e359b",
"assets/assets/icons/xpulse_icon_white.svg": "06dc12750849f8533760e797b18661ec",
"assets/assets/icons/male_icon.svg": "a57b61e3ea4b1699224edb85e126d8ea",
"assets/assets/icons/history_icon.svg": "608a065fd0063e98c7a53f6e025c9673",
"assets/assets/icons/clock_icon.svg": "0dcc5b52deccb1099a04732d11b9fba3",
"assets/assets/icons/trophy_icon.svg": "1d1b8aefd4c341b47bdc9021504f30cb",
"assets/assets/icons/dashboard_selected_icon.svg": "ecb11ad0daee4a048342f4ad655ae8eb",
"assets/assets/icons/manage_icon.svg": "3c9b173238d2767b0b3a19b6666ca537",
"assets/assets/icons/x_icon.svg": "fd48d401d4b59d8ceb65bf7a8efc8709",
"assets/assets/icons/user_icon.svg": "00bd6143097101860a548ea604aa43a3",
"assets/assets/icons/filter_icon.svg": "c5addad1c137d2efd160752b287ec22b",
"assets/assets/icons/female_icon.svg": "f0752eeae4e1fdc00a95d19e895dfae9",
"assets/assets/icons/three_users_icon.svg": "32adb1f88fd35e9d497c74f80320d29a",
"assets/assets/icons/leaveType_icon.svg": "e8a6c5d3561ac258416944afeca1ea48",
"assets/assets/icons/logout_icon.svg": "5b7a2d166e3ba2a7e59597115a5f3cea",
"assets/assets/icons/notification_icon.svg": "e2dcabedbde5cb0c2d61175228715d06",
"assets/assets/icons/hrSelectedIconMobile.svg": "7b449775bd1d60b199f41ccce713cc59",
"assets/assets/icons/hr_selected_icon.svg": "94a939618239d97936a4fa484022f981",
"assets/assets/icons/homeSelectedIconMobile.svg": "72eb9f134abe68b771334fa9d21590a8",
"assets/assets/icons/wfh_icon.svg": "e73a8f490a8c479d3ce6ef31ae852d9d",
"assets/assets/icons/all_leaves_selected_icon.svg": "f39c96abb0632edd4cd87a73103e15c1",
"assets/assets/icons/employees_selected_icon.svg": "eeae3013bdb9927f3a7da8ca87d7ca63",
"assets/assets/icons/department_icon.svg": "03126ea30c5cdaf5af6e60db62880daf",
"assets/assets/icons/projects_selected_icon.svg": "8a3be3f61eff2fa4f091e0ef94bde97b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
