import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children, name = 'Staff Pages' }) => {
	return (
		<div className="flex">
			<div className="w-1/6 bg-[#FF5F5F] min-h-screen max-h-fit">
				<Sidebar />
			</div>
			<div className="w-5/6">
				<div className="ml-5 mt-6 m-10">
					<Navbar name={name} />
				</div>
				<div className="mx-5">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
