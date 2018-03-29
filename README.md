# browse-directory
NodeJS Module for browsing directories recursively.

[![NPM version](https://img.shields.io/npm/v/browse-directory.svg)](https://www.npmjs.com/package/browse-directory)

## Installation
```bash
npm install browse-directory
```

## How to use

#### Run the app

```js
var browseDir = require("browse-directory");
var tree = browseDir.browse("directory");
```
Just require the module and call search function with the path name of the search root directory

Then, to run app, you just have to run command :

```bash
node index
```

This will show you a browsing results


#### How to exploit the results
You have two part of results : "the Tree Result" and the "Tree detailed presentation"
To get the tree detailed presentation of result, do the following :

```js
browseDir.showTree(tree);
```

By calling the showTree function of browseDir, which take a tree object, returned by the previously used browse function

NB :  We can also brow all files or folders inside a search directory

##### Get Files inside a Directory
	
```js
var dirFiles = browseDir.browseFiles("directory");

console.log(dirFiles);
```

Get all files of folder "directory"


##### Get Folders inside a Directory

```js
var dirDirs = browseDir.browseDirs("directory");

console.log(dirDirs);
```

Get all directories of folder "directory"


##### The Tree Result
This is the first browsing result, which contain all the files and directories containing in the root directory.

###### Using browse function
It is a javascript objet which contain tables with others javascript objects, using key - values. Every directory name is a key of a new javascript object in the root object result. 
In this case, the first object key is the name of a search directort, and the others are the names of result directories.

So, to browse our collection, we must first browse the first root object and each directory obtained, retrieve its content via the same collection, through its name like key.

###### Using browseFiles or browseDirs functions
It is a table which contain javascript objects, using key - values. Every object of collection represent a directory or file result, with properties like : the type, the name and the relative path.

We just have to browse our collection result to get all the files or directories informations.


##### Tree detailed presentation
It is a simple browse of The tree result, presented previously !.



## Complete example

```js
	var browseDir = require("browse-directory");

	// Browse folder "directory"
	var dirTree = browseDir.browse("directory");

	// Show tree
	browseDir.showTree(dirTree);

	// Get all files of folder "directory"
	var dirFiles = browseDir.browseFiles("directory");
		console.log(dirFiles);

	// Get all directories of folder "directory"
	var dirDirs = browseDir.browseDirs("directory");
		console.log(dirDirs);
```

Will Show

```bash
	 Level ==> root

	  # Contains :
	    - {"type":"dir","src":"dir1"}

	    * dir1 ---> [{"type":"dir","src":"dir2"}]
	    - {"type":"file","src":"file1.txt"}


	 Level ==> dir1

	  # Contains :
	    - {"type":"dir","src":"dir2"}

	    * dir2 ---> []


	 Level ==> dir2

	  # Contains :

	   Files browsing : [{"type":"file","name":"file1.txt","src":"directory/file1.txt"}]
       
	   Directories browsing : [{"type":"dir","name":"dir1","src":"directory/dir1"},{"type":"dir","name":"dir2","src":"directory/dir1/dir2"}]
```


## License

[MIT](LICENSE)


Enjoy it !