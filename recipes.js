const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('./data.js');
const Recipe = require('./model/Recipe');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

Recipe.create({
  title: 'Delicious Copy Pasta',
  level: 'Easy Peasy',
  ingredients: ['salt', 'pepper', 'unoriginal content'],
  cuisine: 'French',
  dishType: 'Snack',
  creator: 'Daniel Duque'
})
.then(recipe => {
  console.log(`Recipe saved: ${recipe}`)
})
.catch(err => {
  console.log(`An error happened: ${err}`)
});