'use strict';

let data = require('./profile.json')
// data.forEach( obj => {
//   obj.createdAt = new Date()
//   obj.updatedAt = new Date()
// })

console.log(data)

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Profiles', data)
  },
  
  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Profiles')
  }
};
