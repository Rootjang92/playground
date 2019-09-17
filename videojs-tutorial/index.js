const media = document.getElementById("my-player");
const playPromise = media.play();
if (playPromise !== null){
    playPromise.catch(() => { media.play(); })
}

let options = {
  controlBar: {
    playToggle: {
      replay: false
    },
    volumePanel: {
      inline: false
    }
  },
  resizeManager: {
    ResizeObserver: null
  },
  autoplay: true,
  controls: true,
  responsive: true,
  liveui: true,
  liveTracker: true,
  playbackRates: [0.5, 1, 1.5, 2],
};

// hooks

// beforesetup : occurs just before a plyaer is created.




videojs.hook('beforesetup', (videoEl, options) => {
  videoEl.className += ' some-super-class';
  videoEl.className += ' vjs-matrix';

  if (options.autoplay) {
    options.autoplay = false
  }

  return options;
});

// middleware

let myMiddleware = (player) => {
  return {
    setSource: function(srcObj, next) {
      next(null, srcObj);
    },
    callPlay: function() {
      // return videojs.middleware.TERMINATOR;
    },
    play: function(terminated, value) {
      if (terminated) {
        console.log('The play was middleware terminated');
      } else if (value && value.then) {
        value
          .then(() => {
            console.log('The play succeeded!');
          })
          .catch((err) => {
            console.log('The play was rejected', err);
          });
      }
    },
    currentTime: function(ct) {
      return ct / 2;
    },
    setCurrentTime: function(time) {
      return time * 2;
    }
  };
};

videojs.use('*', myMiddleware);


const player = videojs('my-player', options, function onPlayerReady() {
  videojs.log('Your player is ready!', this);

  this.play();

  this.on('pause', () => {
    const modal = this.createModal('This is a modal!');

    modal.addClass('vjs-my-fancy-modal');

    modal.on('modalclose', () => {
      player.play();
    })
  })


  this.on('ended', () => {
    videojs.log('Awww...over so soon?!');
  });
});

const button = player.addChild('BigPlayButton', {
  text: 'Press ME',
  buttonChildExample: {
    buttonChildOption: true
  }
});

console.log(button.el())


// debug

const mylogger = videojs.log.createLogger('mylogger');
const anotherlogger = mylogger.createLogger('anotherlogger');

videojs.log('hello');
mylogger('how are you');
anotherlogger('today');

videojs.log.history.filter('VIDEOJS');
// > [['VIDEOJS:', 'hello'], ['VIDEOJS: mylogger:', 'how are you'], ['VIDEOJS: mylogger: anotherlogger:', 'today']]
videojs.log.history.filter('mylogger');
// > [['VIDEOJS:    mylogger:', 'how are you'], ['VIDEOJS: mylogger: anotherlogger:', 'today']]
videojs.log.history.filter('anotherlogger');
// > [['VIDEOJS: mylogger: anotherlogger:', 'today']]




