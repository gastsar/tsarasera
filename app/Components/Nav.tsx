"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoMdHome } from "react-icons/io";
import { MdAddBox } from "react-icons/md";

function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const menuNav = [
    { name: "Home", icon: IoMdHome, path: "/" },
    {
      name: "Mes recherches",
      icon: HiOutlineBellAlert,
      path: "/mes-recherches",
    },
    { name: "Favoris", icon: FaRegHeart, path: "/mes-favoris" },
    { name: "Messages", icon: BiSolidMessageAltDetail, path: "/mes-messages" },
  ];

  const handleClick = () => {
    router.push("/SignInAndUp");
  };

  return (
    <>
      <nav className="w-full h-[50px] shadow-md bg-white p-3">
        <ul className="flex justify-between items-center">
          <li>
            <img src="/logo.png" alt="logo" />
          </li>
          <li>
            <Button variant="primary">
              <MdAddBox className="text-xl text-" />
              Déposer une annonce
            </Button>
          </li>
          <li>
            <ul className="flex gap-5">
              {menuNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={` flex gap-2 items-center ${
                      pathname === item.path
                        ? "text-blue-500"
                        : "text-gray-700 hover:text-blue-700"
                    } `}
                  >
                    <item.icon />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <button onClick={handleClick}>
              <div className="border text-gray-500 border-gray-500/50 rounded-full p-1 hover:bg-slate-500">
                <FaUser />
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
