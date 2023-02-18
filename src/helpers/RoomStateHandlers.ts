import { RtmClient, RtmStatusCode } from 'agora-rtm-sdk';
import AgoraRTM from 'agora-rtm-sdk';
import React from 'react';

export function onlineHandler(rtmClient: RtmClient, setOnline: React.Dispatch<React.SetStateAction<boolean>>) {
	const rtmConnectionChangeFunction =
        (newState: RtmStatusCode.ConnectionState, reason: RtmStatusCode.ConnectionChangeReason) => isRtmOnline(newState, reason, setOnline);

	rtmClient.on('ConnectionStateChanged', rtmConnectionChangeFunction);
}

function isRtmOnline(newState: RtmStatusCode.ConnectionState, _reason: RtmStatusCode.ConnectionChangeReason, setOnline: React.Dispatch<React.SetStateAction<boolean>>) {
	setOnline(() => {
		return newState == AgoraRTM.ConnectionState.CONNECTED;
	});
}