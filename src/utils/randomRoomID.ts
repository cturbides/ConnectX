export const generateRandomRoomID = (): string => {
	return 	generateThreeRandomAlphaValues() + '-' +
			generateThreeRandomAlphaValues();
};

const generateThreeRandomAlphaValues = (): string => {
	// Math.random().toString(36) = 0.mktksjd
	// .slice(2) 				  = mktksjd
	// .substring(0,3)			  = mkt

	return Math.random().toString(36).slice(2).substring(0,3);
};