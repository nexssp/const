const { red, bold, green, yellow } = require("@nexssp/ansi");

const handler = (displayName, value) => ({
  set: function (v) {
    console.error(
      red(bold("\nPROGRAM TERMINATED:")),
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
