import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className="relative">
			<div className="font-Muli text-[24px] font-bold">Food List</div>
			<div className="absolute right-0 top-0">1</div>
			<div className="absolute right-0 top-0">2</div>
		</nav>
	);
};

export default Navbar;
