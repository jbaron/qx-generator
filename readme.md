# fullapp

This is an app with the sole purpose of generating a qooxdoo.js file that can be used standalone in a qooxdoo TypeScript project.
It does basically two things:

1. Have a small bootstrap app included that allows to register a function as a starting point for a qooxdoo application. See source/class/fullapp/Application.js
2. Have the main qooxdoo packages included in a bundled, minified qooxdoo.js file. See compile.json for included packages.
