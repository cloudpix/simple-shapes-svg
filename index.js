'use strict';

const catalog = require('./data/catalog.json');
const images = require.context('./min/', true, /^\.\/.*\.(svg)$/i);

function loadImages() {
	catalog.forEach(c => c.images.forEach(i => i.file = images('./' + c.path + i.file)));
}

loadImages();

module.exports = {
	getCategories: () => catalog.concat()
};
