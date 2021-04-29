# @nexssp/const

Constants in JavaScript (global, objects)

## Installation

```sh
npm i @nexssp/const
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

All below will display error like:

![image](https://user-images.githubusercontent.com/8799218/116605337-91d2cb00-a92f-11eb-8493-c6ebd8287800.png)

```js
// program.js

const { myConfig } = require("./config");

process.MYCONST = 369;
myConfig.MyObjectCONST = 999999;

MYCONST2 = 333366669999;

myObject.MYCONST = "New value1"; // Program terminated
MYCONST2 = "SOMETHING else";
```
