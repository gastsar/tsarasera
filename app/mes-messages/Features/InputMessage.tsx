import { IoMdAdd } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export type InputMessageProps = {};

const InputMessage = (props: InputMessageProps) => {
  return (
    <div className="px-5 py-2 w-full border  ">
      <form className="flex items-center justify-between space-x-6">
        <label className="block cursor-pointer" htmlFor="file-upload">
          <div className="border border-2-gray-500 p-2 rounded-xl ">
            <IoMdAdd />
          </div>
          <input
            type="file"
            id="file-upload"
            className="hidden text-slate-500 hover:file:bg-violet-100"
          />
        </label>
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl p-2   shadow-sm focus:outline-none focus:border-slate-500 focus:ring-slate-500 focus:ring-1 sm:text-sm"
            placeholder="Ecrivez votre message"
            type="text"
            name="search"
          />
        </label>
        <button className="border border-2-sky-500 bg-sky-600 text-slate-100 p-2 rounded-xl ">
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default InputMessage;
