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
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			/>
		</nav>
	);
};

export default Navbar;
