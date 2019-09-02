const Song = require('../models/song');
const songCtrl = {};
const { unlink } = require('fs-extra');
const path = require('path');

songCtrl.getSongs = async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
};

songCtrl.save = async (req, res) => {
  const { title, artist, album, release_date, genre } = req.body;
  const song = new Song({
    title, artist, album, release_date, genre, imagePath: req.file.path
  });
  await song.save();
  res.json({ message: 'Song saved.' })
};

songCtrl.getSong = async (req, res) => {
  const song = await Song.findById(req.params.id);
  res.json(song);
};

songCtrl.update = async (req, res) => {
  const { id } = req.params;
  const { title, artist, album, release_date, genre } = req.body;
  const song = {
    title, artist, album, release_date, genre
  };
  if (req.file) {
    imagePath = updatedImage;
  }
  await Song.findByIdAndUpdate(id, { $set: song }, { new: true });
  res.json({ message: 'Song updated.' });
};

songCtrl.deleteSong = async (req, res) => {
  const song = await Song.findByIdAndDelete(req.params.id);
  if (song) {
    await unlink(path.resolve(song.imagePath));
  }
  res.json('Song deleted.');
};

module.exports = songCtrl;