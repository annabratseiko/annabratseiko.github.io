// global variable for the player
var player;
var overlay = document.querySelector('.communication-play-overlay');

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video-screen', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  playerOverlay = new YT.Player('main-video', {
    events: {
      // call this function when player is ready to use
      'onReady': bindVideoEvents
    }
  });
}

function onPlayerReady(event) {
  var playButton = document.querySelector('.communication-play-video-button');
  playButton.addEventListener('click', function() {
    player.playVideo();
    overlay.style.display = 'none';
    document.querySelector('.navbar').style.display = 'none';
  });
}

function onPlayerStateChange(event) {
  if (event.data === 2) {
    overlay.style.display = 'flex';
    document.querySelector('.navbar').style.display = 'block';
  }
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function bindVideoEvents() {
  var buttons = document.querySelectorAll('.position-block-video-overlay-button');

  for (var i = 0; i < buttons.length; i++) {
    (function(e) {
        buttons[e].addEventListener('click', function() {
          // console.log(document.getElementById('main-video-frame'));
          // document.getElementById('main-video-frame').scr = this.getAttribute('data-src');
          document.querySelector('.main-video-overlay').style.display = 'block';
        });
    })(i);
  }

  document.querySelector('.close-overlay').addEventListener('click', function() {
    document.querySelector('.main-video-overlay').style.display = 'none';
    playerOverlay.pauseVideo();
  });
}

bindVideoEvents();



