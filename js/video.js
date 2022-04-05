var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volupdate.textContent = volume.value + "%";
});


// Pause
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

// Slow down
document.querySelector("#slower").addEventListener("click", function() {
	// console.log("Old Video speed is" + video.playbackRate);
	video.playbackRate *= 0.95;
	console.log("New Video speed is" + video.playbackRate);
});
