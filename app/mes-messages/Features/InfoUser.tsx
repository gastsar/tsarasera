import { FaUser } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { RiExchangeBoxFill } from "react-icons/ri";

const menuNav = [
  { description: "Paris", icon: FaUser },
  { description: "Membre depuis aout 2022", icon: IoShieldCheckmarkSharp },
  {
    description: "31 transactions spécées avec le paiment sélectionnel",
    icon: RiExchangeBoxFill,
  },
  { description: "Profil recommandé", icon: IoShieldCheckmarkSharp },
];

const InfoUser = () => {
  return (
    <div className="border border-2-gray-500 p-4 rounded-md">
      <h1>A propos de ce vendeur </h1>
      <ul>
        {menuNav.map((item, index) => (
          <li key={index} className="flex gap-2 ">
            <span>
              <item.icon className="text-md text-gray-500" />
            </span>
            <span>
              <p className="text-sm">{item.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoUser;
