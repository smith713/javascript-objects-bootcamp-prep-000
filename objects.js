var playlist = {
  'Beyonce': 'Lemonade',
  'Migos': 'Bad and Boujee',
  'Drake': 'Know Yourself'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist

}
