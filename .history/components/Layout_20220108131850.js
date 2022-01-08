import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
	return (
		<div className="flex">
			<div className="w-1/6">
				<Sidebar />
			</div>
			<div className="w-5/6">
				<Navbar className="h-1/6" />
				<div className="h-5/6">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
