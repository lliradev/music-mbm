const { Router } = require('express');
const router = Router();
const {
  getSongs,
  save,
  getSong,
  update,
  deleteSong
} = require('../controllers/song.controller');
const upload = require('../libs/multer');

router.route('/')
  .get(getSongs)
  .post(upload.single('image'), save)

router.route('/:id')
  .get(getSong)
  .put(update)
  .delete(deleteSong)

module.exports = router;