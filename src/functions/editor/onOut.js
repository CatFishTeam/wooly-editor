module.exports = function onOut() {
  if (!this.highlight) {
    this.tint = 0xffffff;
  }
  if (this.hasTooltip) {
    this.tooltip.hide();
  }
};
