// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // put your firebase code here
  // replace complete firebase object
  firebase : {
    apiKey: 'AIzaVyA7x0nzIVX2NCrewAGmSpl8Houhr9Mmr1skW0Q',
    authDomain: 'cruddemo-9867941.firebaseapp.com',
    databaseURL: 'https://cruddemo-97941.firebaseio.com',
    projectId: 'cruddemo-41181',
    storageBucket: 'cruddemo-41181.appspot.com',
    messagingSenderId: '123456789098'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
