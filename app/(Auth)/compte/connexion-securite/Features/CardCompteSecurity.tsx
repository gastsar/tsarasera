import { BsShieldFillCheck, BsShieldFillExclamation } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { MdComputer } from "react-icons/md";

interface CardCompteSecurityProps {
  title: string;
  description?: string;
  isScurity?: boolean;
  icone?: any;
}
export const CardCompteSecurity = ({
  title,
  description,
  isScurity,
  icone,
}: CardCompteSecurityProps) => {
  return (
    <div className="flex justify-between items-center h-content w-full/2 border border-2-gray-500 p-4 rounded-md">
      <div className="flex gap-4">
        <span className="flex gap-2 ">
          {isScurity ? (
            <p>
              {!isScurity ? (
                <BsShieldFillExclamation className="text-4xl text-amber-600 bg-amber-600/10 rounded-full p-2" />
              ) : (
                <BsShieldFillCheck className="text-4xl text-green-600 bg-green-600/10 rounded-full p-2" />
              )}
            </p>
          ) : (
            <MdComputer />
          )}
        </span>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p>{description}</p>
        </div>
      </div>

      <span>
        <IoIosArrowForward className="text-2xl text-gray-500" />
      </span>
    </div>
  );
};

export default CardCompteSecurity;
