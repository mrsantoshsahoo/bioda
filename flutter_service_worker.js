'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "950865f5cff46cf0967f136b93d9662c",
"index.html": "ce7e6a91c979164ffe0104ceb1e70474",
"/": "ce7e6a91c979164ffe0104ceb1e70474",
"main.dart.js": "173de79dc458faa30b5ea934d198d007",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1d3f94493ccce06e2d851c407996d1a5",
"assets/AssetManifest.json": "95e7a2c2c33ca13caca9379fb41b6470",
"assets/NOTICES": "1771e28824fb5f04e81440e609fae1fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7122a4e1f370890e3d6ba2298d8ec0e5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bba41c84e00ca744b8c31a4795dddfac",
"assets/fonts/MaterialIcons-Regular.otf": "bf5fa724b231efdab33da694ccbed237",
"assets/assets/images/dialog_char_boys_1.png": "1670bf84bbf2aee3a03a674aa6d0952b",
"assets/assets/images/model1.png": "d3f25e8e2d5ab56f5762f13b82ffe8be",
"assets/assets/images/model2.png": "c994503cea5f2b1403809c09d1851865",
"assets/assets/images/earth3d_showcase.png": "d761acbd76e27c31b886b6b4d0c2b065",
"assets/assets/images/house2.png": "1319b733e436b38a10a934a7222c8cee",
"assets/assets/images/earth3d.png": "a90e6e9d43de3ea21753dd24af18f341",
"assets/assets/images/tile_map2.png": "1f47c887e7f5ed056bf206075754f61e",
"assets/assets/images/github.png": "1607a3a71b55547fb4da1ce188c1bc1b",
"assets/assets/images/music.jpg": "7a405af9a45069336979c6d67ecb9cb7",
"assets/assets/images/daly_rewards.png": "b325cc85f659d64cdd1122aab9261fcf",
"assets/assets/images/zoo_gate.png": "aad9745feca696f230ddff6e49a22d35",
"assets/assets/images/founten_water.png": "ccc1443684a175ce04e48a091e700bff",
"assets/assets/images/girl.jpg": "ccb0bb930dc667a07bb439e68c595510",
"assets/assets/images/flower_tree.png": "a78c835113f86ddaa4e80d7d190b6706",
"assets/assets/images/dialog_char_girl_1.png": "d10e66acc0a534154c7da0ec4f9f2846",
"assets/assets/images/s_tree_2.png": "875b760aa6aee996169259a38aff9a21",
"assets/assets/images/man.jpg": "6606bff93134cdbc646ac4733e9ea776",
"assets/assets/images/splash.png": "dcec111888332daf05c653950da82d46",
"assets/assets/images/s_tree_1.png": "c8f2022888390460153d252fe3f6ecb8",
"assets/assets/images/animals_images/Dog.png": "513adcc30f48bed8c65b57510d9ca22e",
"assets/assets/images/animals_images/Horse.png": "30d940da832cf30f0693fdfa649221a9",
"assets/assets/images/animals_images/Whale.png": "4a03a0f9de05cddd8ea76c589a2e95d6",
"assets/assets/images/animals_images/Yak.png": "69bd9ad4f0bfb33cac74388165001432",
"assets/assets/images/animals_images/Xenopus.png": "f9e527a63c6dca531323873db4459479",
"assets/assets/images/animals_images/Elephant.png": "fd73cc089f1d8fa0e7426f29607b1745",
"assets/assets/images/animals_images/Lion.png": "3399be33e32e216a418612035e3a3b07",
"assets/assets/images/animals_images/Quail.png": "996063e80deed847622952854e4ef10f",
"assets/assets/images/animals_images/Zebra.png": "e9008dfa5333f7db77e60a0778003748",
"assets/assets/images/animals_images/Tiger.png": "c88b4ce9004c66e434fa242f8b1ac14a",
"assets/assets/images/animals_images/Kangaroo.png": "18d1ee53c0df7af8e63cc146dcfbcd95",
"assets/assets/images/animals_images/Sheep.png": "1c3aeb230d8b924040329d478d4eb8aa",
"assets/assets/images/animals_images/Ostrich.png": "980c0080b7bfeaca1018a0beb81002d8",
"assets/assets/images/animals_images/Gorilla.png": "b85d59e8efb77015924ba0b4394c653f",
"assets/assets/images/animals_images/Penguin.png": "f765007b3d68cb1a971db577104eace2",
"assets/assets/images/animals_images/Cat.png": "b31201c9ea4f4e0b1fb7858f3187dc65",
"assets/assets/images/animals_images/UmbrellaCockatoo.png": "fb6e5ef5bb9ee92d31edf2314521b22b",
"assets/assets/images/animals_images/Rooster.png": "21cea41ac5f20cf583ede859a67ab543",
"assets/assets/images/animals_images/Monkey.png": "8200491ca2dfcf4d46f7ef794bd5e796",
"assets/assets/images/animals_images/NightHawk.png": "27134e5655a182f8020ec96287ffbda3",
"assets/assets/images/animals_images/Iguana.png": "b250b1654a49dc1115415b9fd147338f",
"assets/assets/images/animals_images/Fox.png": "996efc605f5e7d184ba6e56ce330455f",
"assets/assets/images/animals_images/Alligator.png": "f31a375425291efcae67e06718e14b22",
"assets/assets/images/animals_images/Bear.png": "57b72158916c5d9dbdbe91c9f306bab9",
"assets/assets/images/animals_images/Jaguar.png": "8d87e4b18e19d7926fdbe36898631814",
"assets/assets/images/animals_images/Vulture.png": "1b31f0de4a8bcdc907cdb49a93c7d8de",
"assets/assets/images/animals/dog.png": "be6ce55267a3116bc5e636891afbb013",
"assets/assets/images/animals/horse.png": "481c47a5f88344f63392a721b78a5ed4",
"assets/assets/images/animals/whale.png": "30f9358e2200b790ca2a5912f5aa3ac3",
"assets/assets/images/animals/yak.png": "ba7412b695e57c6d1a2d9d45708c122f",
"assets/assets/images/animals/xenopus.png": "6d221987ef7aa55db4c8e27fef7e282f",
"assets/assets/images/animals/elephant.png": "d4008cfc3c7c37a649f9c92a37b7b9c9",
"assets/assets/images/animals/lion.png": "5130afbf4247684d1bfb2e3ac90cae26",
"assets/assets/images/animals/quail.png": "130723a936a73ae96a05eda1db5ba88e",
"assets/assets/images/animals/zebra.png": "29a02a446e18bf28f92cb7fe78acfd7c",
"assets/assets/images/animals/tiger.png": "21ffdd73ad58dd0f7ac476da40d19273",
"assets/assets/images/animals/kangaroo.png": "326174e2e8ded516d8b43c918af1b879",
"assets/assets/images/animals/sheep.png": "981b259c51139726dd34df0fe7909e04",
"assets/assets/images/animals/ostrich.png": "b91514b1fd648184b25ef7f06b3d08c0",
"assets/assets/images/animals/gorilla.png": "7749945d7ba28a3c8218c93451f8d095",
"assets/assets/images/animals/penguin.png": "c12437a0b265ec25f32301a7c288c633",
"assets/assets/images/animals/cat.png": "3c7e76319f2aa5218e71c49dfb0134ff",
"assets/assets/images/animals/umbrellacockatoo.png": "e36a71be116d4914cabd64d47e826445",
"assets/assets/images/animals/rooster.png": "4ef68f36c927ea939af63c592a9ddaa4",
"assets/assets/images/animals/monkey.png": "b297fada89ecfbf2b0ebc2c69b0ea83c",
"assets/assets/images/animals/nighthawk.png": "584605b88c75a743bb07bf1bf517f13e",
"assets/assets/images/animals/iguana.png": "b3c2d3e02162b51c252284c22799135a",
"assets/assets/images/animals/fox.png": "7d923613de7824c0fd2af5f9029bfbec",
"assets/assets/images/animals/alligator.png": "0def4bece0d88daefb7ab71db1ce82c3",
"assets/assets/images/animals/bear.png": "176e282f501d72a905679b41d8e0ea0b",
"assets/assets/images/animals/jaguar.png": "9be9f3f2f86edf207e8be96106105c2d",
"assets/assets/images/animals/vulture.png": "dee7e0506405d06819f62618a8ceca59",
"assets/assets/images/s_tree_set.png": "7d77943a7e81da2f03fdc3fd299254dd",
"assets/assets/images/l_tree_set.png": "60b3f9996b16910dd71066c0dd8f2f46",
"assets/assets/images/marketing/app_logo.png": "a029dfbc9fcc76633689ca79f8e21772",
"assets/assets/images/marketing/app_splash.png": "9b8eb5a8f8870573194b160bee69f2c4",
"assets/assets/images/woman.jpg": "a6c9189619d85c3ac2bced86f91d0faf",
"assets/assets/images/road_building/sea-02.png": "b16cab21e2d01a2d334ed78b3e692a81",
"assets/assets/images/road_building/sea-03.png": "a674bc253716d059d02559358a7b48f2",
"assets/assets/images/road_building/road-59.png": "2d811c8d659b8f5e7d62a9fb063e4d70",
"assets/assets/images/road_building/sea-01.png": "d5d0f643a56645eb343006ee1f22cf89",
"assets/assets/images/road_building/road-58.png": "ec42607109613946d4dc5be64168a1d0",
"assets/assets/images/road_building/fog.png": "7d77cc95669a7a55cee40b8c092b54ea",
"assets/assets/images/road_building/road-60.png": "13a0b4d0ae70860cdeb4af31393426b0",
"assets/assets/images/road_building/road-48.png": "33a4a222bffeea7bf646808a0fdc943a",
"assets/assets/images/road_building/sea-10.png": "2ed054001d80ecf87bb5a405a7e7c244",
"assets/assets/images/road_building/sea-04.png": "1c2ebc31e81a90ea1540a7e32701fd45",
"assets/assets/images/road_building/sea-05.png": "76cf8858a77fdffcb011d6420e86eed0",
"assets/assets/images/road_building/sea-11.png": "5b8305d13ebacb2163d46fb8156906e6",
"assets/assets/images/road_building/sea-07.png": "ffe0ba6854e83c9f42966efd64f79a2e",
"assets/assets/images/road_building/sea-12.png": "9ee093d42be46644dedfb635206a4710",
"assets/assets/images/road_building/sea-06.png": "2e26ef3c72073a45695b6567ae071d98",
"assets/assets/images/road_building/road-62.png": "bac9c2c6b4d9677d2efe46299cbd109c",
"assets/assets/images/road_building/road-39.png": "456849da7256254bb5c68d22bc058d32",
"assets/assets/images/road_building/road-11.png": "7afd07a90248a9223d56697bd7f775c3",
"assets/assets/images/road_building/road-10.png": "4262c97295d774a7b125ce1e8281f448",
"assets/assets/images/road_building/road-38.png": "a62087205bf64bacf5db4896c780c1d3",
"assets/assets/images/road_building/residential-building-08.png": "edc35e82612da92664285d47d7094a15",
"assets/assets/images/road_building/road-06.png": "aa006a84bd3f7960b41db635f8da8f16",
"assets/assets/images/road_building/road-07.png": "6358c4027f609534165c4f306bb68276",
"assets/assets/images/road_building/road-13.png": "aecb3cb70cc744bcf70b8c6b3cd4c0fe",
"assets/assets/images/road_building/office-building-part-08.png": "ad436496ab7dd8d942705f80d0cc8199",
"assets/assets/images/road_building/lake-04.png": "9874946a40030f7c919a6f13f9b054fb",
"assets/assets/images/road_building/road-17.png": "7d3bd4efe86defb03607a187d0b1670b",
"assets/assets/images/road_building/restaurant.png": "c0a3c94fffbb5a5a5b1d926b581f9212",
"assets/assets/images/road_building/lake-05.png": "5067fd13aea39331fdb600389b53d1b6",
"assets/assets/images/road_building/road-01.png": "ad3e0de34907d70f59be401d76e08327",
"assets/assets/images/road_building/lake-12.png": "f585a527c2ebcea68e0e912beb58d117",
"assets/assets/images/road_building/office-building-part-03.png": "b7896d9f518ad71d9863f806c73d296b",
"assets/assets/images/road_building/office-building-part-02.png": "6ab9c67035e9fd59d0e816dc8b5e450b",
"assets/assets/images/road_building/picnic-table-people%2520(1).png": "59d2631c489e96a7cfe9eaedb05c26c2",
"assets/assets/images/road_building/road-27.png": "4437c22858bbb0489178bdc6aa695388",
"assets/assets/images/road_building/lake-09.png": "2247d7a645c0b36bad20bec4c16fff2d",
"assets/assets/images/road_building/office-building-part-05.png": "fb82c0546e685b2511ee72d36520a1f3",
"assets/assets/images/road_building/road-37.png": "a589870ad836edf3cf6644cfb2179e45",
"assets/assets/images/road_building/office-building-part-04.png": "104d778d71959af16d620f4636294963",
"assets/assets/images/road_building/sea-05%2520(1).png": "76cf8858a77fdffcb011d6420e86eed0",
"assets/assets/images/road_building/office-building-part-06.png": "f246a8ad18395d0388ff5fa73b9794d3",
"assets/assets/images/road_building/road-21.png": "cba1b3f882c319640409d8dbb6689728",
"assets/assets/images/road_building/policebuilding-02.png": "d2c985435813e37eb0f6d0e17749719b",
"assets/assets/images/road_building/people06.png": "7512047cea34b7a0a1413763dc30ddb5",
"assets/assets/images/road_building/office-building-part-07.png": "764a0541504ca8ecb909802ccc0ebae3",
"assets/assets/images/road_building/skyscraper-07.png": "d667da667ae04c65ee2afc659db417a6",
"assets/assets/images/road_building/road-53.png": "e191092da4b84f0edf56d35462cfdfa9",
"assets/assets/images/road_building/road-46.png": "839b8baef02c16d31d21fec44683c625",
"assets/assets/images/road_building/road-50.png": "2240b370efaef10c48c1ea7a048f0983",
"assets/assets/images/road_building/sea-08.png": "07080ff8e66e96b14347e8bf07cbc16e",
"assets/assets/images/road_building/market.png": "fa778c536f75d45efb9ba9d94e7defce",
"assets/assets/images/road_building/road-45.png": "663aece447d77036f1fb5f46103533e0",
"assets/assets/images/road_building/road-51.png": "0ccdd1f75b7d35104f0994c0ac3c991f",
"assets/assets/images/road_building/sea-09.png": "7ea5880ee795820e5908550d451a56fe",
"assets/assets/images/road_building/road-55.png": "79d9c9015157c77c8d4cf02a3191d050",
"assets/assets/images/road_building/road-41.png": "5f7b51ffe8cf22b227e3827e81067ff2",
"assets/assets/images/road_building/road-40.png": "1fd9405fbb22082f3bcc865a27ca835a",
"assets/assets/images/road_building/road-54.png": "63d6fa399aa6416b26cb96995230b246",
"assets/assets/images/road_building/restaurant%2520(1).png": "c0a3c94fffbb5a5a5b1d926b581f9212",
"assets/assets/images/road_building/skyscraper-02.png": "97c40be8896e5a27f7fa520c7d00bde5",
"assets/assets/images/road_building/road-42.png": "68dab8b174ed279264a03a46bfb0c699",
"assets/assets/images/road_building/road-56.png": "4d957a14e0c918d7233fc3dc3c3c3fac",
"assets/assets/images/road_building/road-57.png": "95327c5a6fd15515e1e989db92ab6bcf",
"assets/assets/images/road_building/road-43.png": "7b13af7397dc98d1a921bd318eeb52a1",
"assets/assets/images/road_building/skyscraper-03.png": "aebaab0fb6bea705c5932179ba37c03a",
"assets/assets/images/greeny_water/water_ani1.png": "41ddb3c725e4ad536f39a88da43005da",
"assets/assets/images/greeny_water/beachN.png": "9a7f92d1c160f265d28d093c4582fdbe",
"assets/assets/images/greeny_water/Group-2.png": "edf30c51f4eaef74f2e35ae339ab20e0",
"assets/assets/images/greeny_water/Group-3.png": "1b59459893b0e7c8cbad4b20bcae3641",
"assets/assets/images/greeny_water/roadEW.png": "32100499f24ee6fad9d75056b50b7e27",
"assets/assets/images/greeny_water/frame_04_delay-0.1s-removebg-preview.png": "9fdf7aef6007cf0aa6afadc9fb4b1c65",
"assets/assets/images/greeny_water/treeAltTall.png": "698bc1d6838316cd7c8542fad7d87270",
"assets/assets/images/greeny_water/waterES.png": "7507872a8b68b1fdbca805d2f3f67cac",
"assets/assets/images/greeny_water/beachCornerNE.png": "0ad465a6a15075fcd4620057ea424e3a",
"assets/assets/images/greeny_water/crossroadNEW.png": "026ae18f9a8fd63eb87786c68464d453",
"assets/assets/images/greeny_water/water_ani2.png": "771667f5029dc6d093bc6d55b8085ada",
"assets/assets/images/greeny_water/exitE.png": "5aa858f7389b51d2581c5109c52464d9",
"assets/assets/images/greeny_water/lotE.png": "cc2b02339ca5113b6ff27c2cb2e74a25",
"assets/assets/images/greeny_water/road_cr_4.png": "108dd11042f41b51671973f9bbfccefc",
"assets/assets/images/greeny_water/roadHillW.png": "636c57cc82396df84229680e55434eb8",
"assets/assets/images/greeny_water/riverEW.png": "79516a0dceed5ff0655c619ebebabf9a",
"assets/assets/images/greeny_water/Group-1.png": "32499d2988264e2f9de428816935647e",
"assets/assets/images/greeny_water/endS.png": "2dc03c2c03e4c58a01d92995526db07e",
"assets/assets/images/greeny_water/endE.png": "9827a24aeefa46b7c807735412801d9d",
"assets/assets/images/greeny_water/water_1.png": "e1d27c4bf02227f5d10b08c550bc7416",
"assets/assets/images/greeny_water/lotES.png": "833960dac55537fd99075be7aa20eb77",
"assets/assets/images/greeny_water/beachSW.png": "3cd0c71f2ffb3b0da87bea817de7d01f",
"assets/assets/images/greeny_water/fog.png": "7d77cc95669a7a55cee40b8c092b54ea",
"assets/assets/images/greeny_water/lotS.png": "cf427c09fae348a22a16f1f4e5454f49",
"assets/assets/images/greeny_water/exitS.png": "a2710dc362b5f48363ffb15250335478",
"assets/assets/images/greeny_water/water_ani3.png": "0b46429760486d772b479758aa469e6e",
"assets/assets/images/greeny_water/treeTall.png": "95db6dd59912863debcb2e4820bac805",
"assets/assets/images/greeny_water/frame_01_delay-0.1s-removebg-preview.png": "7c29cf1b987fb9971ace635dc15a4a4a",
"assets/assets/images/greeny_water/waterCornerES.png": "5d96b5c29953f5009eccc5e352ba7daa",
"assets/assets/images/greeny_water/exitW.png": "9a8cdfd08ba566db6d0bbb2cc9dc54a4",
"assets/assets/images/greeny_water/treeShort.png": "517c4d26540f6c5d9f94888633583b2e",
"assets/assets/images/greeny_water/lotW.png": "3dcf13279591a1567f4384eb6f02f2d9",
"assets/assets/images/greeny_water/road_cr_1.png": "62e849d9525c4be9aa6713b71365ffba",
"assets/assets/images/greeny_water/roadHillE.png": "969f9d550b209149207e6f5fe1cecfc4",
"assets/assets/images/greeny_water/Group-4.png": "2b3a9feee2154ea8d9e6b8bfc7a02b6f",
"assets/assets/images/greeny_water/endW.png": "4f8dbb3cd6b6ebbad73d366862c572de",
"assets/assets/images/greeny_water/Group-5.png": "62394dcde23d7110708030646a4d8954",
"assets/assets/images/greeny_water/riverES.png": "63858a17ea88bd5e77d066c0363af218",
"assets/assets/images/greeny_water/hillES.png": "f8e19d9fa2dbb10e1ae1c6f7934fbc28",
"assets/assets/images/greeny_water/crossroad.png": "589c529480a92ea3cd332653b723c279",
"assets/assets/images/greeny_water/roadHillS.png": "8f969b337a6837e91fdc040560e1d0f8",
"assets/assets/images/greeny_water/gress231.png": "e6b8460d3a6a0a00fdd6f020851bcb42",
"assets/assets/images/greeny_water/Group.png": "60c9bc6bc80e99f531ca7f013ad9fbd5",
"assets/assets/images/greeny_water/dirt.png": "0bdcce21632485adf0bfb1874f5b0a97",
"assets/assets/images/greeny_water/crossroadNES.png": "3805db907111d9d9c5fe8ccc5c313e1f",
"assets/assets/images/greeny_water/water_ani4.png": "2221bd282ad09e2fbe145fd71467ec6d",
"assets/assets/images/greeny_water/road_cr_2.png": "266ea128ea18c9f70a2f7c943996c08e",
"assets/assets/images/greeny_water/roadES.png": "57a7fc0b4d6038bf69f53ff0ec44d957",
"assets/assets/images/greeny_water/Group-7.png": "302a9ab7de692dc44f34dba7c2a9c2de",
"assets/assets/images/greeny_water/Group-6.png": "52cb4705f346abbb4eaf29bde26e5b1c",
"assets/assets/images/greeny_water/coniferTall.png": "c3823d89ad9bf5305c41b01bc105d071",
"assets/assets/images/greeny_water/road_cr_3.png": "7f00ef3f04091f99dcedb7234f569309",
"assets/assets/images/greeny_water/beachCornerNW.png": "18ff39567bd3956e7ea292854ab8c532",
"assets/assets/images/greeny_water/roadNE.png": "6bc8ca267d8ae7196b6b4f121edb2de2",
"assets/assets/images/greeny_water/coniferAltTall.png": "969a46235f0cf20ded9f2bfc906e75d9",
"assets/assets/images/greeny_water/road.png": "e36a3d83f1266875eefc613d299c9a15",
"assets/assets/images/greeny_water/gress122.png": "d0e93d6743e2b1cb5983b595a5538d1c",
"assets/assets/images/greeny_water/coniferAltShort.png": "5c943789013e5d4f57eda97ca6310c66",
"assets/assets/images/greeny_water/roadNS.png": "ddc746433ab5d58062ad15b4d2a702a1",
"assets/assets/images/greeny_water/hillW.png": "9ba84263e9a115170689c2772550c455",
"assets/assets/images/greeny_water/waterNW.png": "1f21ca6c810dd882c36a72fe63f89bd3",
"assets/assets/images/greeny_water/dirtDouble.png": "cdf0dfd3172007300683fbcaaa5f97a4",
"assets/assets/images/greeny_water/waterCornerNE.png": "91b65ed2687153b9d61bae995d555248",
"assets/assets/images/greeny_water/roadHill2S.png": "923230b59ba13a0e11d956341e5fb417",
"assets/assets/images/greeny_water/waterW.png": "814a9f3ecf193d5c35c1087c11b92c5c",
"assets/assets/images/greeny_water/riverNS.png": "23f8310b97ae058c812c2af5a864cfe8",
"assets/assets/images/greeny_water/cloud_bg.png": "fbac066df37557a286a4611f0222c0f9",
"assets/assets/images/greeny_water/riverNE.png": "2bc7874cf996e8370f5d53c28879ccce",
"assets/assets/images/greeny_water/hillNE.png": "2df50113cc08682b633f05f099cd0bf3",
"assets/assets/images/greeny_water/lotNW.png": "d919bfbc6e6479302bce458db70f00e3",
"assets/assets/images/greeny_water/roadHill2E.png": "d7a1714ae953056a54257717a434aeac",
"assets/assets/images/greeny_water/waterCornerNW.png": "dd2f7e876455cf29205c3a16ebecab8e",
"assets/assets/images/greeny_water/road_br_L.png": "75b7b3cc953ba2a7a3fab22c9cc5a055",
"assets/assets/images/greeny_water/waterE.png": "53f26316edb47882a68b2138a4054d70",
"assets/assets/images/greeny_water/road_br.png": "2e56196d9f6c9b7d00fa9a96730ad7f1",
"assets/assets/images/greeny_water/grassWhole.png": "1410f29a6fb399a166731b2b43e604c1",
"assets/assets/images/greeny_water/riverBankedSW.png": "be48fbb5c5d97b0f1956ae0720c0fe63",
"assets/assets/images/greeny_water/frame_15_delay-0.1s-removebg-preview.png": "3d0fe4efd5923a70b7f6fdc01cf90081",
"assets/assets/images/greeny_water/gress_11.png": "02a0c2dd790230852850654fceb04a36",
"assets/assets/images/greeny_water/riverNW.png": "9e701f5f06df9c75014986304ac3f6bf",
"assets/assets/images/greeny_water/hillNW.png": "61d9a33045f23c0f9b3cf00730a6dd91",
"assets/assets/images/greeny_water/waterS.png": "414fe008fce2e8e5e835d32293cf328d",
"assets/assets/images/greeny_water/lotNE.png": "4c5453fb4472920b499566f4819dee25",
"assets/assets/images/greeny_water/roadHill2W.png": "4fef5f607285f0d438745ab031e1ca54",
"assets/assets/images/greeny_water/hillS.png": "7160b5cc087bb7a2c5ff2ffaf636a786",
"assets/assets/images/greeny_water/roadNW.png": "8b4d6ae69a6366feaa3f4a294bb4ed99",
"assets/assets/images/greeny_water/coniferShort.png": "922ba4e4ec004eac3db885f4fe7202d3",
"assets/assets/images/greeny_water/gress_12.png": "240ccfa0511a9c83dc36a354c9e3c317",
"assets/assets/images/greeny_water/waterNE.png": "83cb1b45fe689c6d35ef374f16b575a4",
"assets/assets/images/greeny_water/hillE.png": "272f35633f6a8175cba35e550ec8284f",
"assets/assets/images/greeny_water/frame_02_delay-0.1s-removebg-preview.png": "fea49bcae57bd8818b2518d5c5ca88eb",
"assets/assets/images/greeny_water/beachCornerES.png": "2e6f7741c857b62b06b9c0080277de91",
"assets/assets/images/greeny_water/crossroadESW.png": "8a60795bf3595f3068cffd6433d4551a",
"assets/assets/images/greeny_water/roadHill2N.png": "5ac2bdbee8a99adb73ae108f1befd70a",
"assets/assets/images/greeny_water/bridgeNS.png": "d5404c992bd5d0ea9faa226b90ecad5c",
"assets/assets/images/greeny_water/beach.png": "0e9cc155e8074f4508d4ee0e2dc1b084",
"assets/assets/images/greeny_water/grass.png": "63da0d768de2f3613fe2bd770e59c4b4",
"assets/assets/images/greeny_water/riverBankedEW.png": "d3393ff0cc25096206ea3f827cdc1dc0",
"assets/assets/images/greeny_water/beachNW.png": "6070c53d8dcbcfe7d696c984bb4e210c",
"assets/assets/images/greeny_water/frame_03_delay-0.1s-removebg-preview.png": "0f2684ee1600b239465fce1a2ad3c8a3",
"assets/assets/images/greeny_water/hillN.png": "e9529a18990204eadb020c1b520057c0",
"assets/assets/images/greeny_water/riverBankedES.png": "0fdb987ea1ef8ab659dfc396ed3c048c",
"assets/assets/images/greeny_water/water.png": "9b02793673497d745b3d7c741df97e8a",
"assets/assets/images/greeny_water/treeAltShort.png": "802a3499374a602dbcddb188b2977fd2",
"assets/assets/images/greeny_water/beachNE.png": "510ad825ba8f3bd2e0dda1a8e820c55e",
"assets/assets/images/greeny_water/waterN.png": "9cdfd9398df1ed1681d7aebcaa4646b2",
"assets/assets/images/greeny_water/beachCornerSW.png": "33d925f26a1c35611885fbc677d23052",
"assets/assets/images/greeny_water/Group-10.png": "b6ca9856791c752a633c194086125c25",
"assets/assets/images/greeny_water/frame_00_delay-0.1s-removebg-preview.png": "563bee7b3a39e3cd2e7dc37db040de49",
"assets/assets/images/greeny_water/clod_bg2.png": "9d57beb6d59e2d74f1c0410a0bf2f8be",
"assets/assets/images/greeny_water/road_gr.png": "580650e91ccc63c4e199ed93220c462a",
"assets/assets/images/greeny_water/bridgeEW.png": "045ce52e7dee73894b7f42271cb820f4",
"assets/assets/images/greeny_water/endN.png": "656946597ad68a06f731fe7f94a49a83",
"assets/assets/images/greeny_water/gress14.png": "63e0f8d30fe35d6ead20a5c565b6610b",
"assets/assets/images/greeny_water/lotN.png": "52e56333a9644c953b5fc3e8a5409919",
"assets/assets/images/greeny_water/exitN.png": "e0d75857d71b6e79b263acf435a8b748",
"assets/assets/images/greeny_water/waterSW.png": "f69091212f4adb06934803288a80aa68",
"assets/assets/images/greeny_water/Group-11.png": "884183fc8ddbc7074937ee75c3ac509b",
"assets/assets/images/greeny_water/riverBankedNE.png": "d908c6b7527717f7f622aeec057b7328",
"assets/assets/images/greeny_water/beachS.png": "e06da53c6ea7e2cc8d140ff337ae89d4",
"assets/assets/images/greeny_water/Group-8.png": "9e1654832f7c4c42a5e067561335f2cc",
"assets/assets/images/greeny_water/Group-9.png": "152ca2f22951797b0b238f3b0d10dae6",
"assets/assets/images/greeny_water/lotSW.png": "1c8c632e8ad39e4055352654acdac27a",
"assets/assets/images/greeny_water/beachE.png": "69e677f3fc411359bb2ef1fdcf7c5d90",
"assets/assets/images/greeny_water/riverBankedNS.png": "30ff8741cd180e2a94c6fd922d95da23",
"assets/assets/images/greeny_water/grassIso.png": "0ec71b894f8ab063b8d394cf819fbaf7",
"assets/assets/images/greeny_water/beachES.png": "c0370cf41f68627e921f4c663d2494db",
"assets/assets/images/greeny_water/mitti_bg2.png": "5f2487c2dc4f5bde1304e79536933b87",
"assets/assets/images/greeny_water/waterCornerSW.png": "02273957028755dbeabeafe60ae46139",
"assets/assets/images/greeny_water/riverBankedNW.png": "38a9216d5159ebffd629252ad95664ab",
"assets/assets/images/greeny_water/hillSW.png": "e012ec97d8bc71564cc369906a69d4be",
"assets/assets/images/greeny_water/riverSW.png": "f46928bcfedd183a8a085e5a2c883ef8",
"assets/assets/images/greeny_water/beachW.png": "029e94f74628d2a52127ffb0a25a1cdb",
"assets/assets/images/greeny_water/mitti_bg3.png": "278a69b9ed3a6320564617f25919cd37",
"assets/assets/images/greeny_water/mitti_bg1.png": "eb037126c042a605afee9015b9994b7e",
"assets/assets/images/greeny_water/crossroadNSW.png": "79c238217864253495684b80d1d63711",
"assets/assets/images/greeny_water/roadSW.png": "920a6b07dab92b562cbfba0138c27c99",
"assets/assets/images/greeny_water/roadHillN.png": "03659b47999fa1321a5f9785ad874d23",
"assets/assets/images/tilemap_packed.png": "db783149e54e9ee8912a22887ae19e0e",
"assets/assets/images/tree2.png": "807e9e4397268b0c558829a9044309fd",
"assets/assets/images/games/char_child_3.png": "7463be774d72b4760a6fd6b2072af082",
"assets/assets/images/games/char_child_2.png": "4164c0f70ed809b4fae073f7912f711e",
"assets/assets/images/games/char_child_1.png": "37a4cf6acddc01f8229dca10434f4f82",
"assets/assets/images/games/char_child_5.png": "3bdab3484c1fa74a9f0d90dfdffb99ea",
"assets/assets/images/games/user_inner_bg.png": "ed74aa73c947c4edd897fe11d32e69d0",
"assets/assets/images/games/char_child_4.png": "b94f859e0cca45341f6987557170a3d5",
"assets/assets/images/games/char_child_6.png": "f3fe6ae9bbfb34d468d2bf8a683f3644",
"assets/assets/images/games/learn__play.png": "fa345a01c63f399445b9452bfbd3c7ea",
"assets/assets/images/games/memory_game_icon.png": "cbc3dd4258c019b042c4e1b1eafcbdea",
"assets/assets/images/games/github.png": "1607a3a71b55547fb4da1ce188c1bc1b",
"assets/assets/images/games/sound_effort.png": "40cb38f0c3ea771e87bda1564d2b95f4",
"assets/assets/images/games/music.jpg": "7a405af9a45069336979c6d67ecb9cb7",
"assets/assets/images/games/girl.jpg": "ccb0bb930dc667a07bb439e68c595510",
"assets/assets/images/games/about_inner_bg.png": "5314f149c9347a54105391b3f414e4ea",
"assets/assets/images/games/play_start_inner_bg.png": "3a9e1a25c565a82aac490d2dd2d31e78",
"assets/assets/images/games/man.jpg": "6606bff93134cdbc646ac4733e9ea776",
"assets/assets/images/games/solver_game_icon.png": "bf5a381cb628eabd3bf9fe887ff17eef",
"assets/assets/images/games/woman.jpg": "a6c9189619d85c3ac2bced86f91d0faf",
"assets/assets/images/games/word_game_icon.png": "6d9e36abb3dfd0522d7b97f510c455d7",
"assets/assets/images/games/game_inner_bg.png": "f3e243afa0128f1d09327b3646fc0c44",
"assets/assets/images/games/close_icon.png": "7c630bba12e1d367a42e018640933bb0",
"assets/assets/images/tree3.png": "6f0949acf25a8b0e05083805a06c9b9e",
"assets/assets/images/king/walk/5_king_walk_30.png": "d03e7da0d84d78c60104396242b2b37d",
"assets/assets/images/king/walk/1_king_walk_30.png": "97f5de3dd9b3160fc4f03dab1b3dce57",
"assets/assets/images/king/walk/4_king_walk_30.png": "7361937625fd3fc582c868b9f560c19f",
"assets/assets/images/king/walk/0_king_walk_30.png": "5c81c614b1788f1d53908717102649e8",
"assets/assets/images/king/walk/7_king_walk_30.png": "925bd8f1ee06f874d2973db8ffd04eaa",
"assets/assets/images/king/walk/3_king_walk_30.png": "586feb081853bb2bc0c4bfa7d8ef050f",
"assets/assets/images/king/walk/6_king_walk_30.png": "088621a612b7d47d9ed48e9ad5fd1032",
"assets/assets/images/king/walk/2_king_walk_30.png": "4c9e9746dc87c99604f3872e7bae9d3c",
"assets/assets/images/animations/add.png": "97945cc5705c230d88ee7700fe31f0e4",
"assets/assets/images/animations/games.png": "0b3f994c1a661207355eb437e7f5b44a",
"assets/assets/images/animations/level_up.json": "6bdf69adc03cafa1b8d1a2fcfe518f58",
"assets/assets/images/animations/music_on.png": "8120c2d473514f940b824e50fdbdde06",
"assets/assets/images/animations/coinFlat.png": "877f611ef18ad2bebdea2824e98b062e",
"assets/assets/images/animations/win.json": "19dbc29be95bdda7a3b776054e74a215",
"assets/assets/images/animations/sound_off.png": "7525a35b5f450bc36fa586b430e223b8",
"assets/assets/images/animations/music_off.png": "2bd63cbb82381bd59c3bd37121c9127c",
"assets/assets/images/animations/finger-tap.json": "7944b19728031271d912e03fa8f4367e",
"assets/assets/images/animations/ani_star.png": "06cc5f2812de4d9815b2cc31a94c897c",
"assets/assets/images/animations/finger-tap.gif": "3f7fc56dc26d744a63c1df8e14fa4d36",
"assets/assets/images/animations/star.png": "0586a06120a6b4368c5187dc6aad897c",
"assets/assets/images/animations/setting_icon.png": "b74cc0c39ddbc47552187e5e0bad3721",
"assets/assets/images/animations/empty_fav.png": "4b70597d4cd3fd6d3e0970f607d9e351",
"assets/assets/images/animations/blast.json": "aca598ebbeddae52a9b0060747ab8dd7",
"assets/assets/images/animations/daly_rewords.json": "47e6c4a67183ea3f2be7b090d643abfc",
"assets/assets/images/animations/coin.png": "98c862f59bc09df6176ceddad072630b",
"assets/assets/images/animations/sound_on.png": "8586024fdd966865ef8c0c6d89a5f816",
"assets/assets/images/mychar_front.png": "5c81c614b1788f1d53908717102649e8",
"assets/assets/tiles/Pixel%2520Adventure.tsx": "7b1187b2336bd6c76bd6161c7642812e",
"assets/assets/tiles/isomap-test.tiled-project": "f569bfd3353c5a0faa26a765cae42f0d",
"assets/assets/tiles/tile_map2.tsx": "9744fdd9e98e5d2d93cc6f0dc3df2cf0",
"assets/assets/tiles/simple-map.tmx": "132b0ca46a79dd9f593cab4006968f27",
"assets/assets/tiles/dungeon.tmx": "9699251ff3a8c0ef9b5d8f7df02ddce9",
"assets/assets/tiles/isomap-test.tiled-session": "e9b20b2c6cbf3ef42ce5067c29ae2604",
"assets/assets/tiles/map-exported.tmx": "b109a75416940ddbff4861148fc7f0dc",
"assets/assets/tiles/Level1.tmx": "432e7a0f379fe29cfcf828e1c9bf1021",
"assets/assets/tiles/water_set.tsx": "abb2685a479fcb89fb4982b603c8d2f2",
"assets/assets/tiles/road_building.tsx": "78dcb1d3e4c16ba0cde6fb9e56393783",
"assets/assets/tiles/iso_line.tmx": "ad56c7a3821174491c778c0ff70a8a65",
"assets/assets/tiles/my_game.tmx": "5dc94de74d80a1b77c1ae2c40027dfa1",
"assets/assets/tiles/map.tmx": "efa741d17b5d8f8a69702f0f1ab3aa26",
"assets/assets/tiles/Level-02.tmx": "4a5903921852b22ccc93e291b2d8274b",
"assets/assets/tiles/0x72_DungeonTilesetII_v1.4.tsx": "823843a6b468b35cbe37b6cc8f25f458",
"assets/assets/tiles/Level-01.tmx": "9369dff83309fd96d941266faaaea24f",
"assets/assets/tiles/tiles.tsx": "3ec6ddc860f5c96deaaf96b0982701c8",
"assets/assets/videos/biodiversity_important.mp4": "e76a008382a7bd46b90db3a504787d01",
"assets/assets/audio/bg_music.mp3": "0655770e873afaee127614b7fbfe1261",
"assets/assets/audio/game_bg_tune_2.mp3": "f30b8338d4faacd81bb6e2a4c3fbc851",
"assets/assets/audio/game_bg_tune_1.mp3": "67358da152c3d8d39781de8c2dcf5e66",
"assets/assets/audio/animals_sound/iguana.mp3": "6cf40dc23a4c0d55b5dc716ba26796bd",
"assets/assets/audio/animals_sound/fox.mp3": "d9cfe0d182cc8b1b3a6a6b93ec87373b",
"assets/assets/audio/animals_sound/monkey.mp3": "169994f848ee9057d28361ca76ab7c9b",
"assets/assets/audio/animals_sound/nighthawk.mp3": "2530305f1eb2dfdbf026ff8438e3e2af",
"assets/assets/audio/animals_sound/bear.mp3": "49c41f88d48b65d4c96a2e213a42ef02",
"assets/assets/audio/animals_sound/jaguar.mp3": "c0dc25610b1cbf906ff7fb0ff19fb28c",
"assets/assets/audio/animals_sound/vulture.mp3": "dbda990d3e1403fba944c358a2a6373c",
"assets/assets/audio/animals_sound/alligator.mp3": "5ee6a2a20879308c49b17d489a5fe15e",
"assets/assets/audio/animals_sound/cat.mp3": "2f9438aedca64fd2bb9afcccf88fc415",
"assets/assets/audio/animals_sound/penguin.mp3": "ff5cb500db9435f2c0a36a72ebaab631",
"assets/assets/audio/animals_sound/rooster.mp3": "bc02a05e32af4be817d1dd706dd06149",
"assets/assets/audio/animals_sound/umbrellacockatoo.mp3": "aa977e28c61829e8d7f42a30c91162a4",
"assets/assets/audio/animals_sound/sheep.mp3": "40387d76f2dae8630a5875e253759734",
"assets/assets/audio/animals_sound/tiger.mp3": "d9589829adfa3b7d607524eddd469d14",
"assets/assets/audio/animals_sound/kangaroo.mp3": "ff1dae24d44b9b7a8669e9d5970b92ed",
"assets/assets/audio/animals_sound/ostrich.mp3": "30d54c0c9202d0c18f0fd10029976437",
"assets/assets/audio/animals_sound/zebra.mp3": "7d224f5cfa0f07fbcc439e4e0e142fd1",
"assets/assets/audio/animals_sound/gorilla.mp3": "fa845c5d5af3c60548683fbed6a1efdc",
"assets/assets/audio/animals_sound/xenopus.mp3": "b856292d49c464d7b6300b83921a25b8",
"assets/assets/audio/animals_sound/horse.mp3": "77254bb54886f16b1193cbd72583cd48",
"assets/assets/audio/animals_sound/dog.mp3": "7040b3e9d03461cead7e85d303f13708",
"assets/assets/audio/animals_sound/yak.mp3": "3e18bb8cddb5c7612293c7f7980d9599",
"assets/assets/audio/animals_sound/whale.mp3": "f3d5fc67384fdb409c4f7e245984d723",
"assets/assets/audio/animals_sound/elephant.mp3": "c91fcbb123e310342aad6635ed2a5fac",
"assets/assets/audio/animals_sound/quail.mp3": "70a21821b856a0fa539b1720c685dc3a",
"assets/assets/audio/animals_sound/lion.mp3": "b906d4a0edb77680fe78babaeab568fa",
"assets/assets/audio/animal_nw_sound/a.mp3": "e2bd5f2da8a939c237799676c9313387",
"assets/assets/audio/animal_nw_sound/v.mp3": "7e0ac6fcad284d2eeb554edf5543e628",
"assets/assets/audio/animal_nw_sound/w.mp3": "44925cd19684974acde46f81f8484e88",
"assets/assets/audio/animal_nw_sound/b.mp3": "decb700071ae5485231a52289a6619c1",
"assets/assets/audio/animal_nw_sound/u.mp3": "5defb10b42ef2313e7b9a42ce215bf90",
"assets/assets/audio/animal_nw_sound/t.mp3": "6d933877af82a5b26685b25cc50e9164",
"assets/assets/audio/animal_nw_sound/c.mp3": "46500093940cdbffffebfdc2c1721ebc",
"assets/assets/audio/animal_nw_sound/p.mp3": "456555a52183c95a762b841c5bba0979",
"assets/assets/audio/animal_nw_sound/g.mp3": "01295e16008bdd4edb0ed4b0771ab9ef",
"assets/assets/audio/animal_nw_sound/f.mp3": "17867efeeef63f2d49dd65473c100095",
"assets/assets/audio/animal_nw_sound/q.mp3": "2ac55b0ba36f77c80b1ac4a1e76accf9",
"assets/assets/audio/animal_nw_sound/s.mp3": "3918328bf3ab02e01fd5db76e6977444",
"assets/assets/audio/animal_nw_sound/d.mp3": "f6b27e804ff4a5da99826a4b4fdf8ce9",
"assets/assets/audio/animal_nw_sound/e.mp3": "7044f60cb3e42e0b3583949e544856df",
"assets/assets/audio/animal_nw_sound/r.mp3": "364b77a2994541c31d605b62e443f9ca",
"assets/assets/audio/animal_nw_sound/h.mp3": "256e921fc936a30809f8f88d58b6cd83",
"assets/assets/audio/animal_nw_sound/i.mp3": "02087dee11065b7e6406ddd2c95fb412",
"assets/assets/audio/animal_nw_sound/k.mp3": "9ba52675f1875efcbb49764d0f545408",
"assets/assets/audio/animal_nw_sound/j.mp3": "6bd4e6fbe9f7c8a901d457c5a3c17c3a",
"assets/assets/audio/animal_nw_sound/n.mp3": "96f1b4aa90237adebc944eadd0c1c139",
"assets/assets/audio/animal_nw_sound/y.mp3": "273d3874a6adf367eb84229ea8a2da4c",
"assets/assets/audio/animal_nw_sound/x.mp3": "047ca0f711103ef2698b3edc7c343153",
"assets/assets/audio/animal_nw_sound/o.mp3": "e2405219d845eb9d56d15b6e79c8e9a1",
"assets/assets/audio/animal_nw_sound/m.mp3": "eb34783fd20e83e07d4948e3a049afb8",
"assets/assets/audio/animal_nw_sound/z.mp3": "39f80a781ca32540f5b7a00b598743ec",
"assets/assets/audio/animal_nw_sound/l.mp3": "cff803c57f2c56c0729145d8934e200c",
"assets/assets/audio/game_sounds/win.wav": "410f77f55e135b966dc173e730bddc80",
"assets/assets/audio/game_sounds/win.mp3": "2ffb2c8491be68ed28403eee9056b389",
"assets/assets/audio/game_sounds/button_tap.mp3": "27152af4e5b2ffa65eab8303ec9347c1",
"assets/assets/audio/game_sounds/close_button_tap.mp3": "b2da77acaaf315446c7ee96b7026736b",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
