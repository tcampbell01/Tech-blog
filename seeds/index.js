const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');



const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedPosts();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedComments();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  

 
  process.exit(0);
};

seedAll();