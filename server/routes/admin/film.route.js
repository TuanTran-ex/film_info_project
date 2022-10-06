const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'public/images/films' });
const FilmController = require('./controllers/film.controller');
const router = express.Router();

const cpUpload = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'backgroundImage', maxCount: 1 },
]);

router.get('/', FilmController.index);
router.get('/add', FilmController.add);
router.post('/', cpUpload, FilmController.postFilm);
router.delete('/:id', FilmController.deleteFilm);

module.exports = router;
