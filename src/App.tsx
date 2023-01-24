import { createHashRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import WaitingRoom from './pages/WaitingRoom';

const App = createHashRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/waiting-room',
		element: <WaitingRoom />
	}
]);

export default App;
