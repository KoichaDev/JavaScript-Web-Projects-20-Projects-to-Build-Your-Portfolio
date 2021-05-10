const currentSite = window.location.href.split('/').includes('picture-in-picture.html');

if (currentSite) {
  const videoElement = document.getElementById('picture-video');
  const button = document.getElementById('picture-button');

  // Prompt user to select media stream, and pass to the video element, then play

  async function selectMediaStream() {
    try {
      // Waiting to assign the video media stream when the user has selected which screen or window they want to share
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();

      // We pass the mediaStream to the videoElement of the src attribute
      videoElement.srcObject = mediaStream;

      // When video has loaded the meta Data, then it's going to call the function to play the video
      videoElement.onloadedmetadata = () => {
        videoElement.play();
      };
    } catch (err) {
      console.log('selectMediaStream() error:', error);
    }
  }

  button.addEventListener('click', async () => {
    button.disabled = true;

    // Start Picture-in-picture
    await videoElement.requestPictureInPicture();

    // Reset Button will happen if we successfully triggering the requestPictureInPicture();
    button.disabled = false;
  });
  selectMediaStream();
}
