import { FaSearch } from "react-icons/fa";

export type SearchBarProps = {};

export const SearchBar = (props: SearchBarProps) => {
  return (
    <>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <FaSearch />
        </span>
        <input
          className=" placeholder:text-slate-700 block  bg-slate-200 w-full  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Rechercher sur tsarasera"
          type="text"
          name="search"
        />
      </label>
    </>
  );
};
