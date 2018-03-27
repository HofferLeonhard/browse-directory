# browse-directory
NodeJS Module for browsing directories recursively

## Installation
```bash
npm install browse-directory
```

## How to use

#### Run the app

```js
var browseDir = require("browse-directory");
var tree = browseDir.browse("directory","root");
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



##### The Tree Result
This is the first browsing result, which contain all the files and directories containing in the root directory.
It is a javascript objet which contain tables with others javascript objects, using key - values. Every directory name is a key of a new javascript object in the root object result. 
In this case, the first object key is "root", and the others are the names of directories.

So, to browse our collection, we must first browse the first root object and each directory obtained, retrieve its content via the same collection, through its name like key.

##### Tree detailed presentation
It is a simple browse of The tree result, presented previously !.

## Complete example

```js
	var browseDir = require("browse-directory");
	var tree = browseDir.browse("directory","root");

	browseDir.showTree(tree);
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
```


## License

[MIT](LICENSE)


Thanks !