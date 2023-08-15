import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// =================================================================

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// =================================================================

player.on(
  'timeupdate',
  throttle(function (params) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(params));
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  const currentTime = JSON.parse(savedTime);
  console.log(currentTime);
  try {
    player.setCurrentTime(currentTime.seconds);
  } catch (error) {
    console.error('Error setting current time:', error);
  }
}
