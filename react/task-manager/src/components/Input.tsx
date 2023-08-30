import { FC } from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
  onSubmit?: () => void;
}

const Input: FC<InputProps> = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <div className="flex flex-row gap-5">
      <input
        type="text"
        className="px-3 w-96 rounded-md bg-white border border-purple-600 focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        className="bg-purple-600 w-28 text-white rounded-md hover:bg-purple-700"
        onClick={onSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
