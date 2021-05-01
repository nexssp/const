# @nexssp/const

- **NEW** - now with stack display..

Constants in JavaScript (global, objects)

## Installation

```sh
npm i @nexssp/const
```

All below will display error like:

![image](https://user-images.githubusercontent.com/53263666/116795020-1eb58a00-aad2-11eb-9278-515d421becc6.png)

```js
nConst("MYCONST", "some value"); // you cannot change it.

// You can use MYCONST everywere after nConst("MYCONST",...)
MYCONST = 369; // will terminate program with the message as below
```

## Usage

Let say you have some kind of config file.

```js
// config.js
const { nConst } = require("@nexssp/const");

nConst("MYCONST", "some value", process);
nConst("MYCONST2", "OLD CONSTANT VALUE");

const myConfig = {};
nConst("MyObjectCONST", "My old object const", myConfig);

module.exports = { myConfig };
```

```js
// program.js

const { myConfig } = require("./config");

process.MYCONST = 369;
myConfig.MyObjectCONST = 999999;

MYCONST2 = 333366669999;

myObject.MYCONST = "New value1"; // Program terminated
MYCONST2 = "SOMETHING else";
```
