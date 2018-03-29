var browseDir = require("./index.js");

// Browse folder "directory"
var dirTree = browseDir.browse("directory");

// Show tree
browseDir.showTree(dirTree);

// Get all files of folder "directory"
var dirFiles = browseDir.browseFiles("directory");
	console.log(" Files browsing : "+JSON.stringify(dirFiles));

// Get all directories of folder "directory"
var dirDirs = browseDir.browseDirs("directory");
	console.log(" Directories browsing : "+JSON.stringify(dirDirs));


