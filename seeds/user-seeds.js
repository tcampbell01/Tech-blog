const {User} = require('../models');

const userData = [

{
    
    username: "Teresa",
    password: "teresa"



},

{ 
    
    username: "Ian",
    password: "ian"


},


{
    
    username: "James",
    password: "james"


}

]


const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;