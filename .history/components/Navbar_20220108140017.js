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
			<div></div>
			<Image
				
				src="/assets/images/avatar.png"
				alt=""
				width={44}
				height={44}
			/>
		</nav>
	);
};

export default Navbar;
