const videoElement = document.getElementById('video')
const btn = document.getElementById('button')


// Prompt to select media stream, pass to video element then play

async function selectMediaStream(){
  try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    videoElement.srcObject =  mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  }catch(error){
    // Catch errors
    
  }
}

btn.addEventListener('click', async ()=>{
  //  Disable button
  btn.disabled = true;
  // Start P in P
  await videoElement.requestPictureInPicture();
  // Reset button
  btn.disabled =  false;
});



//on Load
selectMediaStream();

