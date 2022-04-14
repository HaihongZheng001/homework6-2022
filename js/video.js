var video = document.querySelector('#player1');

// Page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// Play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});


// Pause button
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

// Slow down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is" + video.playbackRate);
});

// Speed up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed is" + video.playbackRate);
})


// Skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current video time is" + video.currentTime);
})

// Mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		this.innerHTML = "Unmute";
	} else {
		video.muted = false;
		this.innerHTML = "Mute";
	}
})


// Volume slider
const volume = document.querySelector("#slider");
const volupdate = document.querySelector("#volume");

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = volume.value / 100;
	volupdate.textContent = volume.value + "%";
});

// Styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})

// Original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})