'use strict';

const visitors = [
  {
    name: 'Budi',
    phone_number: '080989999',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Joko',
    phone_number: '088888888',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Ahmad',
    phone_number: '081818181',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

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
   await queryInterface.bulkInsert('Visitors', visitors)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Visitors', null, {});
  }
};
