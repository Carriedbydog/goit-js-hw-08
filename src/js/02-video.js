import Player from '@vimeo/player';
import _ from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on(
  'timeupdate',
  _.throttle(function () {
    console.log('time updated!');
  }, 3000)
);

localStorage.setItem('videoplayer-current-time', Date.now());
player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
    console.log(seconds + ' seconds');
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
