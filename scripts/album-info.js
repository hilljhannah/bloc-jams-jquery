{
    // inserts album title
    $('#album-title').text(album.title);

    // album image
    $('img#album-cover-art').attr('src', album.albumArtUrl);

    // artist info
    $("h2.artist").text(album.artist);

    // release info
    $('#release-info').text(album.releaseInfo);
}
