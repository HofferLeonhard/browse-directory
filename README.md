
# browsing-directories
Simple NodeJS app for browsing directories recursively

## Installation
```bash
No installation necessary for use, just install nodejs an enjoy it !
```

## How to use

#### Run the server

First define the root search directory, through the variable "init_browse_in"

```js
var fs = require('fs');
var tree = {};
var init_browse_in = "root-directory-name";
```


Then, to run app, you just have to run command :

```bash
node index
```

This will show you a browsing results


#### How to exploit the results
You have two part of results : "the Tree Result" and the "Tree detailed presentation"

##### The Tree Result
This is the first browsing result, which contain all the files and directories containing in the root directory.
It is a javascript objet which contain tables with others javascript objects, using key - values. Every directory name is a key of a new javascript object in the root object result. 
In this case, the first object key is "root", and the others are the names of directories.

So, to browse our collection, we must first browse the first root object and each directory obtained, retrieve its content via the same collection, through its name like key.

##### Tree detailed presentation
It is a simple browse of The tree result, presented previously !.


## License

[MIT](LICENSE)


Thanks !