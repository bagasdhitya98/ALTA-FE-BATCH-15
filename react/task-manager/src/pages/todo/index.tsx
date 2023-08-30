import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, addTodos, selectTodos } from "../../features/todosSlice";

import Input from "../../components/Input";
import TodoList from "../../components/TodoList";

const Todo = () => {
  const todo: any = useSelector(selectTodos);
  const dispatch: any = useDispatch();
  const [item, setItem] = useState<string>("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = async (content: string) => {
    await dispatch(addTodos(content));
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="top-0 fixed mt-10 font-bold text-2xl text-purple-700">
        <h2>Task Manager</h2>
      </div>
      <div className="mt-32 fixed top-0">
        <Input
          value={item}
          onChange={(e: any) => setItem(e.target.value)}
          onSubmit={() => handleAddTodo("Belajar Redux")}
        />
      </div>
      <div className="h-40">
        <div className="grid grid-cols-1 gap-y-5">
          {todo.map((item: any, index: any) => {
            return <TodoList key={index} text={item?.content} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Todo;
