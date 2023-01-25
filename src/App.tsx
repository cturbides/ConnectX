import { createHashRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Room from './pages/Room';
import WaitingRoom from './pages/WaitingRoom';

const App = createHashRouter([
	{
		path: '/',
		element: <Home />,
		index: true
	},
	{
		path: 'waiting-room',
		element: <WaitingRoom />
	},
	{
		path: 'room',
		element: <Room />
	}
]);

export default App;
