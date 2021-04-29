const { nConst } = require("../");

nConst("MYCONST", "some value", process);
nConst("MYCONST2", "OLD CONSTANT VALUE");

const myConfig = {};
nConst("MyObjectCONST", "My old object const", myConfig);

module.exports = { myConfig };
