import Navbar from './Navbar';
import Footer from './Footer';
import Dashboard from './Sideboard';

const Layout = ({ children }) => {
	return (
		<div className="content flex">
			<Dashboard />
			<div>
				<Navbar />
				{children}
			</div>
		</div>
	);
};

export default Layout;
