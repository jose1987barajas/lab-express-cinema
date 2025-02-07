const Movie = require('../models/Movie')

exports.findMovies = (req, res, next) => {
  Movie.find()
    .then(movies => res.render('movies-list', { movies }))
    .catch(err => res.render('movies-list, err'))
}

exports.findOneMovie = (req, res, next) => {
  const { id } = req.params
  Movie.findById(id)
    .then(movie => res.render('movie-detail', movie))
    .catch(err => res.render('movie-detail', err))
}
