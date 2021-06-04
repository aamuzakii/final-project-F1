'use strict';

let arr = require('./kembang-100.json')
arr.forEach( el => {
  el.nama = el.first_name + ' ' + el.last_name
  delete el.first_name
  delete el.last_name
  el.createdAt = new Date()
  el.updatedAt = new Date()
})
console.log(arr[0])

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Kembangs', arr, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
