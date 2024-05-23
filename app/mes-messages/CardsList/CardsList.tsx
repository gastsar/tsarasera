import { MdDeleteOutline } from "react-icons/md";

export type CardsListProps = {
  title: string;
  description: string;
  image: string;
  userName: string;
  date: string;
};

const CardsList = ({
  title,
  description,
  image,
  userName,
  date,
}: CardsListProps) => {
  return (
    <a
      href="#"
      className="group/item  flex items-center justify-between max-w-xs mx-auto  p-4 bg-white ring-1 ring-slate-900/5  space-y-2 hover:bg-sky-500/10 hover:ring-sky-500/10"
    >
      <img
        src={image}
        alt={title}
        className="w-16  object-cover rounded-tl-lg rounded-tr-lg rounded-br-lg"
      />
      <div className="flex flex-col space-x-3">
        <h3 className="text-slate-900 text-sm font-semibold">{title}</h3>
        <p className="text-slate-500  text-sm  ">{description}</p>
        <p className="text-slate-500  text-xs">
          <span>{userName}</span>
          <span>{date}</span>
        </p>
      </div>
      <MdDeleteOutline className=" text-3xl group/edit invisible text-gray-500 hover:bg-sky-200 rounded-full p-1 group-hover/item:visible" />
    </a>
  );
};

export default CardsList;
