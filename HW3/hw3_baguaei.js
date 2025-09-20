/* 
Nazaneen Baguaei
Homework 3 – Objects and exception handling in JS
Sep 20, 2025
*/

// Movie class
class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }

  getDetails() {
    return `${this.title} directed by ${this.director}, released in ${this.year}`;
  }
}

// MovieCollection class
class MovieCollection {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  removeMovie(title) {
    try {
      const index = this.movies.findIndex(m => m.title === title);
      if (index === -1) {
        throw new Error(`Movie with title "${title}" not found.`);
      }
      this.movies.splice(index, 1);
      console.log(`"${title}" has been removed.`);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  showMovies() {
    try {
      if (this.movies.length === 0) {
        throw new Error("No movies in the collection.");
      }
      this.movies.forEach(m => console.log(m.getDetails()));
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
}

// Using the classes
const myCollection = new MovieCollection();

const movie1 = new Movie("Wreck-It Ralph", "Rich Moore", 2012);
const movie2 = new Movie("Avatar", "James Cameron", 2009);

myCollection.addMovie(movie1);
myCollection.addMovie(movie2);

myCollection.showMovies();
myCollection.removeMovie("Avatar");
myCollection.removeMovie("Frozen"); // error example
myCollection.showMovies();

hekowqdqon
