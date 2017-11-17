const data = {
  playlists: [ {
      id: 1,
      name: 'Workout Playlist',
      description: 'A playlist to run to',
      songs: [2,4,7]
    },
    {
      id: 2,
      name: 'Indie Rock Playlist',
      description: 'Favorite Jams from High School',
      songs: [1,3,5,6]
    }
  ],
  songs: [
    {
      id: 1,
      name: 'The Mariner\'s Revenge Song',
      artist: 'The Decemberists'
    },
    {
      id: 2,
      name: 'Countdown',
      artist: 'Beyoncé'
    },
    {
      id: 3,
      name: 'Barnacle Goose',
      artist: 'Born Ruffians'
    },
    {
      id: 4,
      name: 'Can\'t Stop',
      artist: 'Red Hot Chili Peppers'
    },
    {
      id: 5,
      name: 'Oblivius',
      artist: 'The Strokes'
    },
    {
      id: 6,
      name: 'Fluorescent Adolescent',
      artist: 'Arctic Monkeys'
    },
    {
      id: 7,
      name: 'Shake It Off',
      artist: 'Taylor Swift'
    }

  ],
  selectedPlaylistId: 2
};

export default data;
