# qx generator

This is the project with the sole purpose of generating a JavaScript file that contains most qooxdoo classes and can be used standalone in a qooxdoo TypeScript project.
It does basically serve two purposes:

1. Have a small bootstrap app included that allows to register a function as a starting point for a qooxdoo application. See source/class/bootstrap/Application.js
2. Have the main qooxdoo packages included in a bundled, minified qooxdoo.js file. See compile.json for the included and excluded packages.

## Generate the files

```
npm install
npx qx clean
npx qx compile
```

After the compile step, you'll find the follwoing files: 

- compiled/fullapp/index.js - the full qooxdoo JavaScript file 
- compiled/basicapp/index.js - a basic version


## See the demo app in action

To see the default included app in action, run the following command:

```
npx qx serve
```


## Compression
These generated JavaScript files compress very well. So if you put them behind a webserver make sure that the webserver compresses them if possible. The compressed files are smaller than 1MB.

Apache webserver example:
```
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml
</IfModule>
```

Microsoft IIS webserver example:
```
<httpCompression directory="%SystemDrive%\inetpub\temp\IIS Temporary Compressed Files">
    <scheme name="br" dll="%ProgramFiles%\IIS\IIS Compression\iisbrotli.dll" />
    <scheme name="gzip" dll="%ProgramFiles%\IIS\IIS Compression\iiszlib.dll" />
    <dynamicTypes>
        <add mimeType="text/*" enabled="true" />
        <add mimeType="message/*" enabled="true" />
        <add mimeType="application/x-javascript" enabled="true" />
        <add mimeType="application/javascript" enabled="true" />
        <add mimeType="*/*" enabled="false" />
    </dynamicTypes>
    <staticTypes>
        <add mimeType="text/*" enabled="true" />
        <add mimeType="message/*" enabled="true" />
        <add mimeType="application/javascript" enabled="true" />
        <add mimeType="application/atom+xml" enabled="true" />
        <add mimeType="application/xaml+xml" enabled="true" />
        <add mimeType="image/svg+xml" enabled="true" />
        <add mimeType="*/*" enabled="false" />
    </staticTypes>
</httpCompression>
```


## Related projects
There are totally three projects:

1. qx-parser - creates the qooxdoo.d.ts declaration file
2. qx-generator - generates the bundled JavaScript file
3. qx-typed - a sample project that demonstrates how to develop TypeScript qooxdoo applications

