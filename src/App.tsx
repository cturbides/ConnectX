import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';

const App = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	}
]);

export default App;
