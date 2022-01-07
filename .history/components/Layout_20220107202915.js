import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
	return (
		<div className="flex">
			<div className='w'>
				<Sidebar />
			</div>
			<div>
				<Navbar />
				{children}
			</div>
		</div>
	);
};

export default Layout;
