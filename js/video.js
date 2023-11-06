var video;

// Page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")

	//Initialize
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.pause();
	video.loop = false;
	video.volume = document.querySelector("#slider").value / 100;

	// Play button + volume
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
		video.playbackRate *= 0.9;
		console.log("New speed is" + video.playbackRate);
	});

	// Speed up
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9;
		console.log("New speed is" + video.playbackRate);
	})


	// Skip ahead
	document.querySelector("#skip").addEventListener("click", function() {
		
		if (video.currentTime + 10 > video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log("Current video time is" + video.currentTime);
	})

	// Mute & unmute
	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			video.muted = false;
			this.textContent = "Mute";
		} else {
			video.muted = true;
			this.textContent = "Unmute";
		}
	})


	// Volume slider
	// document.querySelector("#slider").addEventListener("click", function() {
	// 	console.log(this.value);
	// 	video.volume = this.value/100;
	// 	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	// })

	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		document.querySelector("#volume").textContent = this.value + "%";
	});

	// Styled
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	})

	// Original
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	})

});
