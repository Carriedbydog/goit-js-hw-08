!function(){var o=document.querySelector("iframe"),e=new Vimeo.Player(o);e.on("play",(function(){console.log("played the video!")})),e.getVideoTitle().then((function(o){console.log("title:",o)}));e.on("volumeChange",(function(o){console.log("qwewq")})),e.on("timeUpdate",(function(o){console.log(o)}))}();
//# sourceMappingURL=02-video.d3c2812f.js.map
