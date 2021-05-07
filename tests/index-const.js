const { myConfig } = require("./config");
const { getConstants } = require("../src/const");
console.log(getConstants());

process.MYCONST = 369;
myConfig.MyObjectCONST = 999999;

MYCONST2 = 333366669999;

myObject.MYCONST = "New value1"; // Program terminated
MYCONST2 = "SOMETHING else";
