const Squelize = require('sequelize');


const db = require('../database/db.js');

module.exports = db.sequelize.define(
   'users', {
      id: {
         type: Squelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      first_name: {
         type: Squelize.STRING
      },
      last_name: {
         type: Squelize.STRING
      },
      email: {
         type: Squelize.STRING
      },
      password: {
         type: Squelize.STRING
      },
      created: {
         type: Squelize.DATE,
         defaultValue: Squelize.NOW
      },
   }, {
      timestamps: false
   }
)