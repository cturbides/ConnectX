import AgoraRTM, { RtmClient } from 'agora-rtm-sdk';

export function createClient(): RtmClient {
	const API_ID = process.env.REACT_APP_API_ID as string;
	return AgoraRTM.createInstance(API_ID);
}