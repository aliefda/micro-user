'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('users', [
      {
        name: "alief",
        profession: "Admin Micro",
        role: "admin",
        email: "aliefarjuna1@gmail.com",
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "arjuna",
        profession: "Front End Developer",
        role: "student",
        email: "aliefarjuna2@gmail.com",
        password: await bcrypt.hash('rahasia12345', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});

  }
};
