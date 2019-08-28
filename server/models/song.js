const { Schema, model } = require('mongoose');

const songSchema = new Schema({
  title: {
    type: String,
    required: 'Song title can\'t be empty!'
    // trim: true
  },
  artist: {
    type: String,
    required: 'Song artist can\'t be empty!'
  },
  album: {
    type: String,
    required: 'Song album can\'t be empty!'
  },
  release_date: {
    type: Date,
    required: 'Song release date can\'t be empty!',
    default: Date.now
  },
  genre: {
    type: String,
    required: 'Song genre can\'t be empty!'
  }
},
  {
    timestamps: true
  }
);

module.exports = model('Song', songSchema);