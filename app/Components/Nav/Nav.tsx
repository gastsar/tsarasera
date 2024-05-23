"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdAddBox } from "react-icons/md";
import { SearchBar } from "./SearchBar";

function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const menuNav = [
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
      <nav className="w-full h-auto shadow-md bg-white p-3">
        <ul className="flex justify-between  items-center">
          <li>
            <Link href="/">
              <img src="/logo.svg" alt="logo" />
            </Link>
          </li>
          <li>
            <Button variant="primary">
              <MdAddBox className="text-xl text-" />
              Déposer une annonce
            </Button>
          </li>
          <li>
            <SearchBar />
          </li>
          <li>
            <ul className="flex gap-5">
              {menuNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={` flex flex-col gap-1 items-center  text-sm ${
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
