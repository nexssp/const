const { red, bold, green, yellow } = require("@nexssp/ansi");
const { stack } = require("@nexssp/stack");
const nContants = Symbol("nConstants");

// We create object to keep all constants
// (Just to list them if needed)
if (!global[nContants]) global[nContants] = [];

const handler = (displayName, value, hidden = false) => ({
  set: function (v) {
    stack(bold("PROGRAM TERMINATED:"), 1, 2);
    console.error(
      green(
        `=>${bold(displayName)} is a ${yellow(
          bold("constant")
        )}. You cannot change it.\nhas a value:`
      ),
      green(bold(value)) + "\nnew value:",
      red(bold(v)) + " (not set)"
    );
    process.exit(1);
  },
  get: function () {
    return value;
  },
  enumerable: !hidden,
  configurable: false,
});

const nConst = (name, value, where = global, hidden = false) => {
  global[nContants].push({ name, value, hidden, where: typeof where });
  Object.defineProperty(where, name, handler(`${name}`, value, hidden));
  return { name: value };
};

const getConstants = () => global[nContants];

const hConst = (name, value, where = global) => {
  return nConst(name, value, where, true);
};

module.exports = { nConst, hConst, getConstants };
