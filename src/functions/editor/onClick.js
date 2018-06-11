// Cet event click concerne le clic sur les tiles de la map, dans l'éditeur

module.exports = function () {

  const onHover = require('../onHover');
  const onOut = require('../onOut');
  const onClick = require('./buttons/onClick');
  const Sprite = require('../../components/sprite');
  let main = require('../../main');
  let grid = main.grid;
  let map = main.map;
  let tooltips = main.tooltips;
  let editor = main.editor;
  let tileButtons = main.tileEditorArea;

  let selectedButton = tileButtons.children.filter(button => button.highlight)[0];
  if (selectedButton) {
    let textureName = selectedButton.name.replace('editor-', '');
    map.tiles[this.infos.id].firstLayer.texture = textureName;
    grid.container.children[this.infos.id].texture = PIXI.loader.resources[textureName].texture;
  }

  if (!this.highlight) {
    this.highlight = true;
    this.highlightOn();
  } else {
    this.highlight = false;
    this.highlightOff();
    return;
  }

  grid.container.children.filter(child => {
    if (child.type === 'MapTile' && child.infos.id !== this.infos.id) {
      child.highlight = false;
      child.highlightOff();
    }
  });

  console.log(this.infos);

};
