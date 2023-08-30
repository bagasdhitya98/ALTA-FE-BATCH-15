import Input from "../../components/Input";
import TodoList from "../../components/TodoList";

const Todo = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="top-0 fixed mt-10 font-bold text-2xl text-purple-700">
        <h2>Task Manager</h2>
      </div>
      <div className="top-0 fixed mt-32">
        <Input />
      </div>
      <div className="grid grid-cols-1">
        <TodoList text="test todolist" />
      </div>
    </section>
  );
};

export default Todo;
