import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
	return (
		<nav className="flex">
			<div className="font-Muli text-[24px] font-bold">Food List</div>
			<div>
				<FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
			</div>
		</nav>
	);
};

export default Navbar;
