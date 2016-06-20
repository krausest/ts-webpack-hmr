# ts-webpack-hmr
Example for typescript and webpack with hot module replacement

Hot module replacement (HMR) from webpack-dev-server can make developing pure fun.
It wasn't that easy to make it work with typescript, so I created a very basic example
to show how to use it.

## How to run it:

`npm install`

`npm run build-dev-server`

Open http://localhost:8080/index.html, open the browser console to see what's happening, make an update to a.ts, save the file and start smiling. 
There's no reloading necessary to update the contents of the red div. It shows the results of the updated iAmReloadable function from a.ts.
The module a.ts is reloaded, main.ts is notified about the update. The handler then calls iAmReloadable to update the div.

## Here are the important steps to make HMR with typescript work:

* Use import and require statements correctly. 
The module must be imported, but not used as an expression.

`import * as mod_a from "./a";`

Then we're actually loading the module via:

`let a: typeof mod_a = <any>require("./a.ts");`

This allows to replace the module in the callback to module.hot.accept().
See "Optional Module Loading and Other Advanced Loading Scenarios" from http://www.typescriptlang.org/docs/handbook/modules.html for details
* Babel compilation to ES 5 (while using HMR)
If you prefer ES6 output just remove "presets": ["es2015"] from .babelrc and restart webpack
* awesome-typescript-loader supports HMR whereas ts-loader does not
* Use a typescript definition file for webpack via typings
