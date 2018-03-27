var browseDir = require("./index.js");
var tree = browseDir.browse("directory","root");

browseDir.showTree(tree);