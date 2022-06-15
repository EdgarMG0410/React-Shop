import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import PasswordRecovery from '@pages/PasswordRecovery';
import '@styles/global.css';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
          			<Route path="/login" element={<Login />} />
          			<Route path="/recovery" element={<PasswordRecovery/>} />
          			<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;