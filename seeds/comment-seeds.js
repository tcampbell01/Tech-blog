const {Comment} = require("../models");

const commentData = [
    {

   
    comment_text: "This is the most amazing app in the entire world",
    user_id: 1,
    post_id: 1
},

{
   
    comment_text: "The quick brown fox jumped over the lazy dog",
    user_id: 2,
    post_id: 2

},

{
  
    comment_text: "New York is the biggest city in the United States",
    user_id: 3,
    post_id: 3

}
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;








