{
    $('button#play-pause').on('click', function() {
        Helper.playPauseAndUpdate();
        $(this).attr('playState', Player.playState);
    });


    $('button#next').on('click', function() {
        if (Player.playstate !== 'playing')  { return; }

        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const nextSongIndex = currentSongIndex + 1;
        if (nextSongIndex >= album.songs.length) { return; }

        const nextSong = album.songs[nextSongIndex];
        Helper.playPauseAndUpdate(nextSong);
    });


    $('button#previous').on('click', function() {
        if (Player.playstate !== 'playing') { return; }

        const previousSongIndex = currentSongIndex - 1;
        if (previousSongIndex >= album.songs.length) { return; }

        const previousSong = album.songs[previousSongIndex];
        Helper.playPauseAndUpdate(previousSong);
    });


    $('#time-control input').on('input', function (event) {
        Player.skipTo(event.target.value);
      });

    $('#volume-control input').on('input', function (event){
        Player.setVolume(event.target.value);
    })


    setInterval( () => {
        if ( Player.playState !== 'playing' ) { return; }
        const currentTime = Player.getTime();
        const duration = Player.getDuration();
        const percent = (currentTime / duration) * 100;
        $('#time-control .current-time').text( currentTime );
        $('#time-control input').val(percent);
      }, 1000);
    }
