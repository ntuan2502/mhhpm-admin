import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className="relative">
			<div className="font-Muli text-[24px] font-bold">Food List</div>
			<div className="relative  right-0 top-0">
				<div className="">1</div>
				<div className="">2</div>
			</div>
		</nav>
	);
};

export default Navbar;
