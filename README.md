# The cocktail app
Create a page where a user can search on (part) of the name of a cocktail drink, and then show all possible drinks matching his search.

_For example: if the user enters "mart" you display "Martini", "Martinez 2", "Dry Martini", "Dirty Martini"_

Use the [thecocktaildb.com](https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mart) JSON API call to get all the necessary information.

## Use the existing HTML page
In the index.html you can find a complete template you need for this exercise.
Normally you do not need to change any existing HTML, but you are allowed too. 

## Step 1) Number of drinks found
Fill in the number of drinks found on the search in the span `number-drinks-found`.

## Step 2) Fill in the Template tag
Use the `<template>` that already exists in the index.html tag as a repeating block for each drink, show the result in the section `#target`. If the user executes a new search, remove the old drinks.

Show the following information in the template:
 - Instructions how to create the drink 
 - Image of the drink
 - The name and the category of the drink
 - The type of glass
 - If the drink is alcoholic or not (show either "yes" or "no")
 
ALl of these elements already exist in the page, you do not need to write HTML code.

## Step 3) Category filter
If the user selects a different category then "All categories" only show the drinks matching that category. Use the [`filter()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method for this.

![Shaken, not stirred](https://media.giphy.com/media/26vUTBXYV20ykYU00/giphy.gif)