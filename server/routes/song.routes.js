const { Router } = require('express');
const router = Router();
const {
  getSongs,
  save,
  getSong,
  update,
  deleteSong
} = require('../controllers/song.controller');

router.route('/')
  .get(getSongs)
  .post(save)

router.route('/:id')
  .get(getSong)
  .put(update)
  .delete(deleteSong)

module.exports = router;