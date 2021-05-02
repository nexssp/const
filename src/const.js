const { red, bold, green, yellow } = require("@nexssp/ansi");
const { stack } = require("@nexssp/stack");
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

const nConst = (name, value, where = global, hidden) => {
  Object.defineProperty(where, name, handler(`${name}`, value, hidden));
  return { name: value };
};

const hConst = (name, value, where = global) => {
  return nConst(name, value, where, true);
};

module.exports = { nConst, hConst };
