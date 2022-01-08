import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
	return (
		<nav className="flex">
			<div className="font-Muli text-[24px] font-bold">Food List</div>
			<div className="text-gray-400">
				<FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
			</div>
			<div>Jones Ferdinand</div>
			<Image
				className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
				src="/public/"
				alt=""
			/>
		</nav>
	);
};

export default Navbar;
