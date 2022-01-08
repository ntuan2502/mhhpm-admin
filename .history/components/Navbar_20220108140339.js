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
			<div>
				<img 
					className="object-cover w-16 h-16 border-50 border-green-600 rounded-full"
					src="/assets/images/avatar.png"
					alt="avatar"
					width={44}
					height={44}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
