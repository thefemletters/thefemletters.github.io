var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '100%',
    height: '100%',
    videoId: 'SRlD65sUP9g',
    playerVars: {
      'autohide': 2,
      'autoplay': 1,
      'controls': 1,
      'enablejsapi': 1,
      'modestbranding': 1,
      'rel': 0,
      'showinfo': 0
    },
    events: {
      'onReady': function(e) {
        e.target.mute();
      }
    }
  })
}
