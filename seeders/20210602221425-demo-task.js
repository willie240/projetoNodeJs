'use strict';

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
     await queryInterface.bulkInsert('tasks', [{
      name: 'Estudar Javascript',
      descricao: 'Assitir as aulas gravadas de Javascript',
      realizada: false,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      name: 'Estudar Angular',
      descricao: 'Assitir as aulas gravadas de Angular',
      realizada: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Estudar NodeJs',
      descricao: 'Assitir as aulas gravadas de NodeJs',
      realizada: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
