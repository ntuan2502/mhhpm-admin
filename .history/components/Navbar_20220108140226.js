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
			<div >
				<Image className="mb-8 rounded-full w-14 h-14 ring ring-primary ring-offset-base-100 ring-offset-2" src="/assets/images/avatar.png" alt="" width={44} height={44} />
			</div>
		</nav>
	);
};

export default Navbar;
