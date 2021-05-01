const { red, bold, green, yellow } = require("@nexssp/ansi");
const { stack } = require("@nexssp/stack");
const handler = (displayName, value) => ({
  set: function (v) {
    stack(bold("PROGRAM TERMINATED:"), 1, 2);
    console.error(
      green(
        ` ${bold(displayName)} is a ${yellow(
          bold("constant")
        )}. You cannot change it.\n${bold(displayName)}\nhas a value:`
      ),
      green(bold(value)) + "\nnew value:",
      red(bold(v)) + " (not set)"
    );
    process.exit(1);
  },
  get: function () {
    return value;
  },
});

const nConst = (name, value, where = global) => {
  Object.defineProperty(where, name, handler(`${name}`, value));
};

module.exports.nConst = nConst;
