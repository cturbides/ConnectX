import { createHashRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';

const App = createHashRouter([
	{
		path: '/',
		element: <Home />,
	}
]);

export default App;
