import { createHashRouter } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Room from './components/Room';
import WaitingRoom from './components/WaitingRoom';

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
