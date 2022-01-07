import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
	return (
		<div className="content flex">
			<div></div>
			<Sidebar />
			<div>
				<Navbar />
				{children}
			</div>
		</div>
	);
};

export default Layout;
