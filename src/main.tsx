import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Bounce, ToastContainer } from 'react-toastify';
import { Home } from './screens/home';

// biome-ignore lint: false positive
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Home />
		<ToastContainer
			position="bottom-right"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss
			draggable={false}
			pauseOnHover
			theme="dark"
			transition={Bounce}
		/>
	</StrictMode>,
);
