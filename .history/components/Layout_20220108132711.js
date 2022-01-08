import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
	return (
		<div className="flex">
			<div className="w-1/6">
				<Sidebar />
			</div>
			<div className="grid grid-rows-4 w-5/6">
				<Navbar className="" />
				<div className="">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
