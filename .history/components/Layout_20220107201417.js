import Navbar from './Navbar';
import Footer from './Footer';
import Dashboard

const Layout = ({ children }) => {
	return (
		<div className="content">
			<Dashboard />
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
