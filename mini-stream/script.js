const videoElement = document.getElementById('video');
const button = document.getElementById('btn');

// Show prompt to select media stream, pass it to video element, then play
async function selectMedia() {
    try {
        const media = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = media;
        videoElement.onloadedmetadata = () => {
            // When media is loaded, play
            videoElement.play();
        }
    } catch (error) {
        console.log('An error occured...', error);
    }
}

// Button
button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false; 
});

// On load
selectMedia();
