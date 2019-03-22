# BetterYui #

A Discord bot that's better than Yui.
## Configuration ##
All .ts files are located in lib/ and compilied .js files are located in dist/. Refer to the 'tsconfig.json' file for more info.

When setting up the project, it's best to create an empty dist folder first and then execute `npm run build` to make sure you don't have any errors. 

A .env file is also required to start the bot. Make sure it has a token key:
```
TOKEN=token goes here
```

Command list:
```
// To compile:
npm run build

// Running in dev mode:
npm run dev

// Starting the bot:
npm start
```