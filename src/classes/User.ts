import React from 'react';
import { Media } from './Media';

export class User {
	id: string;
	name: string;
	micState: boolean;
	videoState: boolean;
	isLocal: boolean;
	media!: Media;
	setMicState: React.Dispatch<React.SetStateAction<boolean>>;
	setVideoState: React.Dispatch<React.SetStateAction<boolean>>;

	constructor(id: string, name: string, media: MediaStream, isLocal = true, mic: boolean, video: boolean, setMic: React.Dispatch<React.SetStateAction<boolean>>, setVideo: React.Dispatch<React.SetStateAction<boolean>>) {
		this.id = id;
		this.name = name;
		this.media = new Media(media);
		this.isLocal = isLocal;
		this.micState = mic;
		this.videoState = video;
		this.setMicState = setMic;
		this.setVideoState = setVideo;
	}

	startVideo() {
		this.media.startVideo();
		this.setVideoState(() => {
			this.videoState = true;
			return true;
		});
	}

	stopVideo() {
		this.media.stopVideo();
		this.setVideoState(() => {
			this.videoState = false;
			return false;
		});
	}

	startAudio() {
		this.media.startAudio();
		this.setMicState(() => {
			this.micState = true;
			return true;
		});
	}

	stopAudio() {
		this.media.stopAudio();
		this.setMicState(() => {
			this.micState = false;
			return false;
		});
	}
}
