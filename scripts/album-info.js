{
  // inserts album title
  $('#album-title').text(album.title);
  // album image
  $('img#album-cover-art').attr('src', album.albumArtUrl);
}
