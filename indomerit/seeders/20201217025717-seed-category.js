'use strict';
let data = [
  {
    name: "Sabun",
    category_code: "sbn",
  },
  {
    name: "Susu",
    category_code: "ss",
  },
  {
    name: "Snack",
    category_code: "snk",
  },
  {
    name: "Minyak",
    category_code: "myk",
  }
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    data.forEach(element => {
      element.createdAt = new Date()
      element.updatedAt = new Date()
    });

    return queryInterface.bulkInsert('Categories', data, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Categories', null, {})
  }
};
