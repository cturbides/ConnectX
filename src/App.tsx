import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';

const App = (): JSX.Element => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/">
					<Route index={true} element={<Home />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default App;
