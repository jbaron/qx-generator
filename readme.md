# fullapp

This is an app with the sole purpose of generating a JavaScript file that contains most qooxdoo classes and can be used standalone in a qooxdoo TypeScript project.
It does basically serve two purposes:

1. Have a small bootstrap app included that allows to register a function as a starting point for a qooxdoo application. See source/class/bootstrap/Application.js
2. Have the main qooxdoo packages included in a bundled, minified qooxdoo.js file. See compile.json for the included and excluded packages.

## Running it

```
npx qx clean
npx qx compile
```

After the compile step, you'll find: 

- the full qooxdoo JavaScript at: compiled/fullapp/index.js
- a basic version at: compiles/basicapp/index.js

Or to see it in action with the default app, run the following command:

```
npx qx serve
```
