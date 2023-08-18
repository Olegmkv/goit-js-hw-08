import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

// створюємо обєкт програвача відео
const player = new Player(iframe);

player.setCurrentTime(readPosition());

player.on('timeupdate', throttle(savePosition,1000));

//збереження позиції перегляду у сховище
function savePosition({seconds}) {
    localStorage.setItem("videoplayer-current-time", String(seconds));
}

//зчитування зі сховища позиції перегляду
function readPosition() {
    const timePlay = localStorage.getItem("videoplayer-current-time");
    return timePlay ? Number(timePlay) : 0;
}
