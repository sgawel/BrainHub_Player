

'use strict';

// player funtions
var hamburgerBtn = document.querySelector('.hamburgerBtn');

hamburgerBtn.addEventListener('click', function() {
  var playlistView = new XMLHttpRequest();

  playlistView.onload = function() {
    document.querySelector('body').innerHTML = playlistView.responseText;

    var btn__back = document.querySelector('.btn__back');

    function backToPlayer() {
      btn__back.addEventListener('click', function() {
        var playerView = new XMLHttpRequest();

        playerView.onload = function() {
          document.querySelector('body').innerHTML = playerView.responseText;
        }

        playerView.open('GET', 'section__player.html', true);
        playerView.send(null);
      }, false);
    }
    setTimeout(backToPlayer(), 2000);
  }

  playlistView.open('GET', 'section__playlist.html', true);
  playlistView.send(null);
}, false);


var playBtn = document.querySelector('.playBtn');
var play = document.querySelector('.play');
var pause = document.querySelector('.pause');

playBtn.addEventListener('click', function() {
  if (play.className === 'play') {
    play.classList.add('hidden');
    pause.classList.remove('hidden');
  } else {
    play.classList.remove('hidden');
    pause.classList.add('hidden');
  }
});


// playlist Listener
// function playlistListener() {
//   var playingSong = e.target;
// }
//
// var song = document.querySelectorAll('.playlist__songs');
//
// song.addEventListener('click', playlistListener, false);
