import {generateRandomRoomID} from '../src/utils/randomRoomID';

describe('RoomID string', () => {
	test('has 7 characters', () => {
		const string = generateRandomRoomID();
		expect(string.length).toBe(7);
	});

	test('contains a hyphen', () => {
		const string = generateRandomRoomID();
		expect(string).toContain('-');
	});

	test('first 3 chars are alphanumeric', () => {
		const string 	= generateRandomRoomID();
		const substring = string.substring(0,3);

		const firstCharacter 	= (/^[a-zA-Z0-9]+$/.test(substring[0]));
		const secondCharacter 	= (/^[a-zA-Z0-9]+$/.test(substring[1]));
		const thirdCharacter 	= (/^[a-zA-Z0-9]+$/.test(substring[2]));

		expect(firstCharacter).toBe(true);
		expect(secondCharacter).toBe(true);
		expect(thirdCharacter).toBe(true);
	});

	test('last 3 chars are alphanumeric', () => {
		const string 	= generateRandomRoomID();
		const substring = string.substring(4,7);

		const firstCharacter 	= (/^[a-zA-Z0-9]+$/.test(substring[0]));
		const secondCharacter 	= (/^[a-zA-Z0-9]+$/.test(substring[1]));
		const thirdCharacter 	= (/^[a-zA-Z0-9]+$/.test(substring[2]));

		expect(firstCharacter).toBe(true);
		expect(secondCharacter).toBe(true);
		expect(thirdCharacter).toBe(true);
	});
});
