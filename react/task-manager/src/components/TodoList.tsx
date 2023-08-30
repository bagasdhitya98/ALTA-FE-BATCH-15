import { FC } from "react";

interface TodoProps {
  text?: string;
  completed?: boolean;
  onToggle?: () => void;
  onDelete?: () => void;
}

const TodoList: FC<TodoProps> = ({ text, completed, onToggle, onDelete }) => {
  return (
    <div
      className={`flex flex-row-reverse justify-between items-center p-2 bg-purple-600 text-white font-semibold w-96 h-16 px-5 rounded-md`}
      onClick={onToggle}
    >
      <input
        type="checkbox"
        className="mr-2 bg-white w-5 h-5"
        checked={completed}
        readOnly
      />
      {text}
      <button
        onClick={onDelete}
        className="ml-2 px-3 py-1 bg-purple-800 rounded-md text-white font-semibold focus:outline-none border-none"
      >
        Hapus
      </button>
    </div>
  );
};

export default TodoList;
