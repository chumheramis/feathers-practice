'use strict';
const authentication = require('./authentication');
const user = require('./user');
const Sequelize = require('sequelize');
module.exports = function() {
  const app = this;
  const conf = app.get('db');
  const sequelize = new Sequelize(
     conf.database,
     conf.username,
     conf.password,
     conf.options
  )
  /*
  const sequelize = new Sequelize(app.get('mysql'), {
    dialect: 'mysql',
    logging: false
  });
  */
  app.set('sequelize', sequelize);


  app.configure(authentication);
  app.configure(user);
};
