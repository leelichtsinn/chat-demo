const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

// Load DB config from config file
const config = require(path.join(__dirname, '..', 'config', 'config.js'));

// Init sequelize with params from config file
console.log('Create sequelize...');
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config);

var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    // load all files except index.js
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function(file) {
    // for every model file, add model to db Object
    let model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

  // check for and call if associate method exists in models
  Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db);
    }
  });

  // use sequelize with upper or lowercase
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  module.exports = db;
