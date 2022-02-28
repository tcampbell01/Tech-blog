const {Post} = require('../models');

const postData = [

{

    title: "How did I get into this mess?",
    content: "Das ist verklich vereukt",
    user_id: 1

},

{

    title: "What did the zero say to the eight?",
    content: "Das ist ein lustiger Witz",
    user_id: 2

},

{
    title: "The violin is the greatest instrument of all time.",
    content: "Ja, klar.",
    user_id: 3




}



]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;