var Creative = function() {
  this.play = function() {
    console.log('Creative.play()');

    TweenLite.to(View.endFrame.background, 2, {
      scale: 1.1,
      delay: 0
    });

    var topDelay = 2;
    var topAnimTime = 1;
    TweenLite.from(View.endFrame.tt, topAnimTime, {
      alpha: 0,
      delay: topDelay
    });
    TweenLite.from(View.endFrame.tuneIn, topAnimTime, {
      alpha: 0,
      delay: topDelay
    });
    TweenLite.from(View.endFrame.ftm, topAnimTime, {
      alpha: 0,
      delay: topDelay
    });
    TweenLite.from(View.endFrame.pedigree, topAnimTime, {
      alpha: 0,
      delay: topDelay
    });

    var bottomDelay = topDelay + topAnimTime + 0.3;
    var bottomAnimTime = 1;
    TweenLite.from(View.endFrame.netflixLogo, topAnimTime, {
      alpha: 0,
      delay: bottomDelay
    });
    TweenLite.from(View.endFrame.cta, topAnimTime, {
      alpha: 0,
      delay: bottomDelay
    });

    TweenLite.delayedCall(bottomDelay + bottomAnimTime, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};

// how long zoom animates for (in seconds)
Creative.zoomDuration = 1.7;

// how much to scale the keyart intro frame
Creative.zoomAmount = 5;
