// JavaScript Document
//--------------- :: PreLoad Images :: ---------------//
document.addEventListener("DOMContentLoaded", preloadImages, true);
var loadedImages = 0;
var imageArray = new Array('spritesheet.png', 'frame1.jpg', 'gradient_img.png');

function preloadImages(e) {
    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();
        tempImage.addEventListener("load", trackProgress, true);
        tempImage.src = imageArray[i];
    }
}

function trackProgress() {
    loadedImages++;
    if (loadedImages == imageArray.length) {
        imagesLoaded();
    }
}

//--------------- :: Set up variables :: ---------------//
var btnCTA;
var piExit;
var piScrollExit;
var replayBtn;

//--------------- :: Initialize :: ---------------//
init_standard = function() {
  document.getElementById("logo_brand_standard").style.backgroundImage = "url(spritesheet.png)";
  //document.getElementById("company_logo_standard").style.backgroundImage = "url(spritesheet.png)";
  document.getElementById("doctor1").style.backgroundImage = "url(spritesheet.png)";
  document.getElementById("doctor2").style.backgroundImage = "url(spritesheet.png)";
  document.getElementById("quote1").style.backgroundImage = "url(spritesheet.png)";
  document.getElementById("quote2").style.backgroundImage = "url(spritesheet.png)";
  document.getElementById("hex1").style.backgroundImage = "url(spritesheet.png)";
  document.getElementById("hex2").style.backgroundImage = "url(spritesheet.png)";
  document.getElementById("hex3").style.backgroundImage = "url(spritesheet.png)";
  document.getElementById("textbox").style.backgroundImage = "url(spritesheet.png)";
  document.getElementById("replay_arrow").style.backgroundImage = "url(spritesheet.png)";
  document.getElementById("frame1").style.backgroundImage = "url(frame1.jpg)";
  document.getElementById("swipe").style.backgroundImage = "url(gradient_img.png)";

  // Add other images here -->

  btnCTA = document.getElementById('btn_exit');
  piExit = document.getElementById('isi_PI_standard');
  piScrollExit = document.getElementById('isi_body_link_PI');
  replayBtn = document.getElementById('replay_btn');

  addListeners_standard();
  tl_main.play();

  setTimeout(function () {
      tl1_isi.play();
  }, 15000)
};

//--------------- :: Interactivity :: ---------------//
addListeners_standard = function () {
  btnCTA.addEventListener('click', ctaExitHandler, false);
  btnCTA.addEventListener('mouseenter', btnExitRollOver, false);
  btnCTA.addEventListener('mouseleave', btnExitRollOut, false);
  piExit.addEventListener('click', piExitHandler, false);
  //piScrollExit.addEventListener('click', piExitHandler, false);
  replayBtn.addEventListener('click', replayHandler, false);
};
ctaExitHandler = function (e) {
  //Call Exits
  console.log("clickTag1");
  Enabler.exit('clickTag1');
  turnOffTimeline();
};
piExitHandler = function (e) {
  //Call Exits
  console.log("clickTag2");
  Enabler.exit('clickTag2');
  turnOffTimeline();
};
btnExitRollOver = function (e) {
  TweenLite.to([btn_cta_standard], 0.2, {
      backgroundColor: "#FF8200"
  });
};
btnExitRollOut = function (e) {
  TweenLite.to([btn_cta_standard], 0.2, {
      backgroundColor: "#171c8f"
  });
};
replayHandler = function (e) {
  //Call Exits
  console.log("replay");
  tl_main.play('start_animation');
  currSecond = 0;
};
//--------------- :: Loop Animation + counter :: ---------------//

var loopInt_standard = 0; // This variable tracks how many times the ad has played
var currSecond = 0; // This variable tracks seconds

function runCounter() {
    currSecond++;
    //console.log(Math.round(currSecond/60)); // turn off after QA. consider removing onUpdate event
}

//--------------- :: ISI Animations :: ---------------//
ScrollToPlugin.autoKillThreshold = 3;
var tl1_isi = new TimelineLite({ paused: true });
tl1_isi
 .to('#isi_scroll_standard', 120, { scrollTo: { y: "max", autoKill: true }, ease: Linear.easeNone })
 .to('#isi_scroll_standard', 2, { scrollTo: { y: 0 }, ease: Power4.easeInOut }, '+=1');

//--------------- :: SCENE Animations :: ---------------//
var tl_main = new TimelineLite({ onUpdate: runCounter, paused: true });
tl_main
  .add('load_ad')
  .to('#container_standard', 0.25, { opacity: 1 })
  .add('start_animation')
  
  //scene 1
  .to([scn1], 0.5, { opacity: 1, ease: 'Power2.easeIn' }, 0)
  .to([frame1], 4, { scale: 1, x: 0.01, y: 0.01, rotationZ: 0.01, autoRound: false, force3D: true, ease: 'Linear.easeNone'}, 1)

  //scene 2
  .to([scn1, gradientoverlay], 0.4, { opacity: 0, ease: 'Power2.easeIn' }, 3.5)
  .to([scn2], 0.4, { opacity: 1, ease: 'Power2.easeIn' }, 3.9)

  //scene 3 - first doctor
  .to([scn2, gradientoverlay, gradientoverlay2, frame1], 0.2, { opacity: 0, ease: 'Power2.easeIn' }, 5.5)
  .to([swipe], 0.4, { x: '+=800' }, 5.6)

  .to([scn3, scn3b, scn3c, quote1, doctor1, hex1, gradientunderlay], 0, { opacity: 1, ease: 'Power2.easeIn' }, 5.8)
  .to([doctor1], 3.5, { scale: 1.2, rotationZ: 0.01, ease: 'Linear.easeNone', force3D: true, autoRound: false }, 5.8)

  ////scene 4 - second doctor
  .to([swipe], 0, { opacity: 0, x: '-515' }, 8)
  .to([swipe], 0, { opacity: 1 }, 8.2)
  .to([gradientunderlay], 0, { opacity: 0, ease: 'Power2.easeIn' }, 8.8)
  .to([gradientunderlay2], 0, { opacity: 1, ease: 'Power2.easeIn' }, 8.8)
  .to([scn3, scn3b,scn3c, quote1, hex1, doctor1,], 0.35, { opacity: 0, ease: 'Power2.easeIn' }, 8.5)
  .to([swipe], 0.4, { x: '+=1315' }, 8.6)
  .to([scn4, scn4b, scn4c, doctor2, quote2, hex2], 0, { opacity: 1, ease: 'Power2.easeIn' }, 8.8)
  .to([doctor2], 3.5, { scale: 1.2, rotationZ: 0.01, ease: 'Linear.easeNone', force3D: true, autoRound: false }, 8.8)


   //scene 5 - last frame
  .to([swipe], 0, { opacity: 0, x: '-515' }, 11.5)
  .to([swipe], 0, { opacity: 1 }, 11.7)
  .to([scn4, scn4b, scn4c, quote2, hex2, doctor2, gradientunderlay], 0.35, { opacity: 0, ease: 'Power2.easeIn' }, 12)
  .to([gradientunderlay2], 0, { opacity: 0, ease: 'Power2.easeIn' }, 12.3)
  .to([gradientunderlay3], 0, { opacity: 1, ease: 'Power2.easeIn' }, 12.3)
  .to([swipe], 0.4, { x: '+=1315' }, 12.1)
  .to([scn5, scn5c, hex3, replay_btn], 0.6, { opacity: 1, ease: 'Power2.easeIn' }, 12.3)
  .to([replay_btn], 0.6, { opacity: 1, ease: 'Power2.easeIn' }, 12.3)
  .to([replay_btn], 0, { right: '12px' }, 12.3)
  .to([scn5b], 0.8, { x: '+=20', opacity: 1, ease: 'Power2.easeOut' }, 12.3)
  .to([textbox], 0.8, { scale: 2, x: '+=20', opacity: 1, ease: 'Power2.easeOut' }, 12.3)

  ///////////////

	.add('stopLastFrame');

//--------------- :: Stop All Animation :: ---------------//
turnOffTimeline = function () {
    TweenLite.set('#isi_scroll_standard', { scrollTo: 0 });
    tl_main.pause('stopLastFrame');
    tl1_isi.pause(0);
};

//--------------- :: Preloader function :: ---------------//
function imagesLoaded() {
    // do something
    init_standard();
}

document.addEventListener("keydown", function (event) {
    //var key = event.key || event.keyCode;
    if (event.keyCode === 32) { // spacebar
        tl1_isi.pause(0);
        tl_main.pause();
    }
    if (event.keyCode === 65) { // 'a'
        tl_main.play();
    }
});