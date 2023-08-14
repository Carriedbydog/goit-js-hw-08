import Player from '@vimeo/player';
import _ from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});
player.on('volumechange', function () {
  console.log('volume changed!');
});
player.on('pause', function () {
  console.log('paused the video!');
});
player.on('resume', function () {
  console.log('resumed the video!');
});
player.on(
  'timeupdate',
  _.throttle(function () {
    console.log('time updated!');
  }, 5000)
);
