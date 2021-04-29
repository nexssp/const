# @nexssp/const

Constants in JavaScript (global, objects)

## Installation

```sh
npm i @nexssp/const
```

## Usage

```js
// config.js
nConst("MYCONST2", "x"); // Declare global constant

require("config.js");
MYCONST2 = "SOMETHING else"; // Error displayed

const myObject = {};

nConst("MYCONST", "x", myObject);
MYCONST2 = 1;
myObject.MYCONST = 1; // Program terminated
```
