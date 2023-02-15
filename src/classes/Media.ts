export class Media {
	data: MediaStream;

	constructor(media: MediaStream) {
		this.data = media;
		this.getDevices();
	}

	async getDevices() {
		const constraints = {
			video: {
				width: {
					min: 640,
					ideal: 1920,
				}, 
				height: {
					min: 480,
					ideal: 1080
				}
			},
			audio: true,
		};
    
		if (!this.data.active)
			this.data = await navigator.mediaDevices.getUserMedia(constraints);

		this.data.getAudioTracks()[0].enabled = false;
		this.data.getVideoTracks()[0].enabled = false;
	}

	startAudio() {
		this.data.getAudioTracks()[0].enabled = true;
	}

	stopAudio() {
		this.data.getAudioTracks()[0].enabled = false;
	}

	startVideo() {
		this.data.getVideoTracks()[0].enabled = true;
	}

	stopVideo() {
		this.data.getVideoTracks()[0].enabled = false;
	}
}
