let I;

module.exports = {
  _init() {
    I = actor();
    this.value = 'Logs Page Value';
  },

  print(arg) {
    I.printMessage('Logs Page Message');
  },

  humanizeArgs() {
    return this.value;
  },
};
