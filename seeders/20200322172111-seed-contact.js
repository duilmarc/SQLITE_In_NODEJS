'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts',
    [
      {
        firstname : 'Franco',
        lastname  : 'Chavez',
        phone     : '946667394',
        email     : 'franco.chp@gmail.com',
        createdAt : new Date().toDateString(),
        updatedAt : new Date().toDateString()
      },
      {
        firstname: 'Lucero',
        lastname : 'Lobon',
        phone    : '945740707',
        email    : 'l.chp@gmail.com',
        createdAt : new Date().toDateString(),
        updatedAt : new Date().toDateString()
      }
    ]

    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
