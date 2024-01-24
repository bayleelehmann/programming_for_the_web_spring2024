
const myArrayMoviesShows = ['Beef', 'The British Baking Show', 'Seinfeld', 'Saltburn', 'Black Swan' ];
const userShowOrMovie = window.prompt("What show or movie is your favorite?");
myArrayMoviesShows.push(userShowOrMovie);
console.log("Updated show or movie list are" + myArrayMoviesShows.toString(userShowOrMovie));