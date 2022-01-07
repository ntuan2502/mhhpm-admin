import Navbar from './Navbar';
import Footer from './Footer';
import Dashboard from './Sidebar';

const Layout = ({ children }) => {
	return (
		<div className="content flex">
			<Side />
			<div>
				<Navbar />
				{children}
			</div>
		</div>
	);
};

export default Layout;
