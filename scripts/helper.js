class Helper {
  const Helper = 'helper'
  playPauseAndUpdate(song) {  {
      player.playPause(song);
      const totalTime = player.getDuration();
      $('#time-control .total-time').text(player.prettyTime(totalTime));
    };
  };

'player.playPause' === 'helper.playPauseAndUpdate';
