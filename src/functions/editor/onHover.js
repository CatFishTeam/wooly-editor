module.exports = function () {
  if (!this.highlight) {
    this.tint = 0xfad390;
  }
  if (this.hasTooltip) {
    this.tooltip.show();
  }
};
