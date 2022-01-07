import Navbar from './Navbar';
import Footer from './Footer';
import Dashboard from './Dashboard';

const Layout = ({ children }) => {
	return (
		<div className="content flex">
			<Dashboard />
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
