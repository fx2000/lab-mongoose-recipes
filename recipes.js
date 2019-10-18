
const data = require('./data.js');
const Recipe = require('./model/Recipe');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

  /* Iteration 2 - Create a recipe
Recipe.create({
  title: 'Delicious Copy Pasta',
  level: 'Easy Peasy',
  ingredients: ['salt', 'pepper', 'unoriginal content'],
  cuisine: 'French',
  dishType: 'Snack',
  creator: 'Daniel Duque'
})
.then(recipe => {
  console.log(`Recipe saved: ${recipe}`);
})
.catch(err => {
  console.log(`An error happened: ${err}`);
});
*/


/* Iteration 3 - Insert Many recipes
Recipe.insertMany(data)
  .then(recipe => {
    console.log(`Recipe saved: ${recipe}`);
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(`An error happened: ${err}`);
    mongoose.connection.close()
  });
   */

/* Iteration 4 - Update recipe
Recipe.updateOne({title: 'Rigatoni alla Genovese'}, {duration: 100})
  .then(recipe => {
      console.log(`Recipe updated: "${recipe}" now has duration: ${recipe}`);
      mongoose.connection.close()
  })
  .catch(err => {
    console.log(`An error happened: ${err}`);
    mongoose.connection.close()
  });
  */

/* Iteration 5 - Remove a recipe 
Recipe.deleteOne({title: 'Delicious Copy Pasta'})
  .then(recipe => {
    console.log(`Recipe deleted: ${recipe}`);
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(`An error happened: ${err}`);
    mongoose.connection.close()
  });
  */