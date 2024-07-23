const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const video = document.getElementById("theVideo");
let toggleVideo = document.querySelector(".toggle");
let controlVolume = document.getElementById("volume");
let controlSpeed = document.getElementById("playbackSpeed");
let controlRewind = document.getElementById("rewind");
let contrlForward = document.getElementById("forward");
let progressBar = document.querySelector(".progress__filled");
toggleVideo.addEventListener("click",()=>{
	let toggleContent = toggleVideo.textContent;
	console.log(toggleContent == "►");
	if(toggleContent == "►"){
		video.play();
		toggleVideo.textContent="❚ ❚"
	}else if(toggleContent == "❚ ❚"){
		video.pause();
		toggleVideo.textContent="►"
	}
})

let volumeVal = controlVolume.value;
let volVal = document.getElementById("volumeValue");
volVal.textContent=volumeVal+"%";
video.volume=volumeVal / 100;
console.log("vol",volumeVal) 
controlVolume.addEventListener("input",()=>{
	controlVolume = document.getElementById("volume")
	volumeVal = controlVolume.value;
	volVal = document.getElementById("volumeValue");
	volVal.textContent=volumeVal+"%";
	video.volume=volumeVal/100;
})


controlSpeed.addEventListener("input",()=>{
	let speedValue = controlSpeed.value;
	let  speedVal = document.getElementById("speedValue");
	video.playbackRate = speedValue;
	speedVal.textContent=`${speedValue}x`
})

controlRewind.addEventListener("click",()=>{
	let currentTime = video.currentTime;
	video.currentTime = Math.max(currentTime-10,0);
	video.play();
})
 
contrlForward.addEventListener("click",()=>{
	let currentTime = video.currentTime;
	const videoDuration = video.duration;
	video.currentTime = Math.min(currentTime+25,videoDuration);
	vidoe.play();
})

video.addEventListener("timeupdate",()=>{
	const progress = (video.currentTime / video.duration) * 100;
	progressBar.style.width = `${progress}%`;
})


let seekVideo = (event)=>{
	const bar = event.currentTarget;
	const rect = bar.getBoundingClientRect();
	const x = event.clientX - rect.left;
	const width = rect.right -rect.left;
	const progress = x / width;
	video.currentTime = progress * video.duration;
}
// const hoverCircle = document.querySelector('.progress__marker');
// const bar = document.getElementById("bar")
// bar.addEventListener("mousemove", (event) => {
//       const rect = bar.getBoundingClientRect();
//       const offsetX = event.clientX - rect.left;
// 	console.log(rect)
//       // Show the circle
//       hoverCircle.style.display = 'block';

//       // Set the circle position
//       hoverCircle.style.left = `${offsetX}px`;
// });

