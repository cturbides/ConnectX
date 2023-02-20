import AgoraRtm, { RtmClient, RtmChannel } from 'agora-rtm-sdk';
import AgoraRTC, { IAgoraRTCClient } from 'agora-rtc-sdk-ng';

const API_KEY = process.env.REACT_APP_API_KEY as string;

export function createMediaClient() {
	return AgoraRTC.createClient({
		codec: 'h264',
		mode: 'rtc',
	});
}

export function createRtmClient() {
	return AgoraRtm.createInstance(API_KEY, { logFilter: AgoraRtm.LOG_FILTER_OFF });
}

export function createChannel(rtmClient: RtmClient, roomID: string) {
	return rtmClient.createChannel(roomID);
}

export async function channelLogin(channel: RtmChannel) {
	await channel.join();
}

export async function getDevices() {
	const [mic, video] = await AgoraRTC.createMicrophoneAndCameraTracks();
	return [mic, video];
}

export async function mediaLogin(client: IAgoraRTCClient, roomID: string, UID: string) {
	await client.join(API_KEY, roomID, null, UID);
}
