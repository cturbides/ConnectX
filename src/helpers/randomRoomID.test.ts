import { generateRandomRoomID } from './randomRoomID';

describe('RoomID string', () => {
	test('has 7 characters', () => {
		const roomID = generateRandomRoomID();
		expect(roomID.length).toBe(7);
	});

	test('contains a hyphen', () => {
		const roomID = generateRandomRoomID();
		expect(roomID).toContain('-');
	});

	test('first 3 letters are alphanumeric values', () => {
		const roomID = generateRandomRoomID();
		const firstThreeLetters = roomID.substring(0,3);
        
		const matchAlphaValues = firstThreeLetters.match(/\w/g);
		expect(matchAlphaValues?.length).toBe(3);
        
	});

	test('last 3 letters are alphanumeric values', () => {
		const roomID = generateRandomRoomID();
		const lastThreeLetters = roomID.substring(4, 7);

		const matchAlphaValues = lastThreeLetters.match(/\w/g);
		expect(matchAlphaValues?.length).toBe(3);
	});
});