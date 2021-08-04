"use strict";

const numberOfFilms = promt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних фильмов?'),
      b = prompt('На сколько оцените его?'),
      c = prompt('Один из последних фильмов?'),
      d = prompt('Один из последних фильмов?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
