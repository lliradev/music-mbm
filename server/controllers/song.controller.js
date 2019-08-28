const Song = require('../models/song');
const songCtrl = {};

songCtrl.getSongs = async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
};

songCtrl.save = async (req, res) => {
  const { title, artist, album, release_date, genre } = req.body;
  const song = new Song({
    title,
    artist,
    album,
    release_date,
    genre
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
    title,
    artist,
    album,
    release_date,
    genre
  };
  await Song.findByIdAndUpdate(id, { $set: song }, { new: true });
  res.json({ message: 'Song updated.' });
};

songCtrl.deleteSong = async (req, res) => {
  await Song.findByIdAndDelete(req.params.id);
  res.json('Song deleted.');
};

module.exports = songCtrl;