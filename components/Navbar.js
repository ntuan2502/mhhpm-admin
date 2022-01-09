import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = ({ name }) => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <nav className="flex justify-between">
      <div className="font-Muli text-[24px] font-bold">{name}</div>
      <div className="flex items-center">
        <div className="text-gray-400 px-2">
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
        </div>
        {session ? (
          <>
            <div className="px-2">{session?._user.username}</div>
            <div
              className="cursor-pointer"
              onClick={() => {
                signOut();
                router.push("/login");
              }}
            >
              <img
                className="object-cover w-11 h-11 border-4 border-[#DFE0EB] rounded-full"
                src={session?._user.avatarUrl}
                alt="avatar"
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
