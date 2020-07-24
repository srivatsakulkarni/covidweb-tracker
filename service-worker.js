if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"5dd583fad3a3dae60bb0f37c701a2734","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"5dd583fad3a3dae60bb0f37c701a2734","url":"index.html"},{"revision":"d48caac6271938f65492126a52e047e3","url":"precache-manifest.d48caac6271938f65492126a52e047e3.js"},{"revision":"066be3764a0039f712e46a97368d9df8","url":"static/css/15.5984a436.chunk.css"},{"revision":"7d76895dc12bb91d35802c57a4bea4b6","url":"static/js/0.4956e05b.chunk.js"},{"revision":"440a0f4092b91679e61ccfb28e3c9541","url":"static/js/1.212d57ef.chunk.js"},{"revision":"5f0f4645de923a871e7f8062af5a54b9","url":"static/js/10.da4dc904.chunk.js"},{"revision":"546f0b955808d8fb2f9cf57bb0745765","url":"static/js/11.adb24191.chunk.js"},{"revision":"ee57e3f45d87bfc7302b458f65545740","url":"static/js/12.8d73c06e.chunk.js"},{"revision":"60216c13c530b873113a3de463281522","url":"static/js/13.5e3616df.chunk.js"},{"revision":"f7fba333d612224957425adbc73f0a38","url":"static/js/14.7ceab0d0.chunk.js"},{"revision":"55718b783af4ae77590ba573cf8c36c6","url":"static/js/15.7f893401.chunk.js"},{"revision":"46b88d89a360eece98e214c7ccb31002","url":"static/js/16.b345c956.chunk.js"},{"revision":"5fea56d339cb2407c4211cd041f6ab01","url":"static/js/17.1a77698a.chunk.js"},{"revision":"350250384c0e46842ed4c80188c91507","url":"static/js/18.0ccb9bd2.chunk.js"},{"revision":"79bdd5aeb83df92bc4b406fdc2a7bdc5","url":"static/js/19.72b95a3b.chunk.js"},{"revision":"929766316bff7cb97f49fe9855305cf3","url":"static/js/2.79557938.chunk.js"},{"revision":"dba4caf64b2b38dd3447b4547ecb30cd","url":"static/js/20.c8a1cad4.chunk.js"},{"revision":"ec1624b05f3ed32adda039ef79c75bb6","url":"static/js/21.ac88c14e.chunk.js"},{"revision":"15b850b60593c5ec2f53695e7a47b7f5","url":"static/js/22.d1771f35.chunk.js"},{"revision":"6959c9da92a1c5b89778b33c2e81e82f","url":"static/js/23.5b6f194c.chunk.js"},{"revision":"8f88eaf9942bc825a79e83d7d164dea0","url":"static/js/24.6bcb68b2.chunk.js"},{"revision":"0fb0d83a05f7a46491edcbe37f98646a","url":"static/js/25.517fe8dd.chunk.js"},{"revision":"64c5c55f680814af018dfb36a39684ed","url":"static/js/26.cc78b654.chunk.js"},{"revision":"a534abb68c002ac963ece4223f6a8288","url":"static/js/27.1352ed32.chunk.js"},{"revision":"cde052f1d967d82ddf9cb9ad17d32298","url":"static/js/28.6b7a4fb2.chunk.js"},{"revision":"b25e621809e19c2b8a90eecad196c55d","url":"static/js/29.3a4c60bc.chunk.js"},{"revision":"8b83c1ae622fa1051755ded11fd3e002","url":"static/js/3.00d71476.chunk.js"},{"revision":"bdfb4c8aefa52d1d7ecec08b0fadcb9c","url":"static/js/30.945e5350.chunk.js"},{"revision":"215d513b8f7782f57b8d199fbf107aa7","url":"static/js/31.56eea8c7.chunk.js"},{"revision":"6ef51617a2067a10e0a236a998d019ef","url":"static/js/32.ab067b12.chunk.js"},{"revision":"5019a2a0ed3754c38842807cfa2170c6","url":"static/js/33.22627683.chunk.js"},{"revision":"935632ed894e29418c534ebfa31bc0ba","url":"static/js/34.ef29caf5.chunk.js"},{"revision":"65edd37abc706d3401547d4d6ec2f7ed","url":"static/js/35.9819448e.chunk.js"},{"revision":"5f1cd7b08818ebba07ef185432f6f6e9","url":"static/js/36.1cb394eb.chunk.js"},{"revision":"ab14af2c756365a1d4959b0338ba6985","url":"static/js/37.747c6a9a.chunk.js"},{"revision":"5a67c2642e294dd22ca13e478d5e3011","url":"static/js/38.8c44612f.chunk.js"},{"revision":"c9e8f7c3e47ce77adeb85674c515597a","url":"static/js/4.55458e3d.chunk.js"},{"revision":"9db0ab99aff4ba29bf0fd5c8714cf13d","url":"static/js/5.01939ca1.chunk.js"},{"revision":"5cfb100a9d70469d5fd33623ba653174","url":"static/js/6.72e565d5.chunk.js"},{"revision":"34f111443ce5cad21421a3bfa733c2da","url":"static/js/9.26231014.chunk.js"},{"revision":"a3aa02b1ac0d963ba2971c0ddaf6a6e1","url":"static/js/main.d5b6dac8.chunk.js"},{"revision":"3e42bd0ff1b45a656aae01ca4d354d35","url":"static/js/runtime-main.28f6a4a7.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
