import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Todo {
    id: number;
    content: string;
}

interface TodoState {
    todos: Todo[];
    status: 'idle' | 'loading' | 'failed'
}

const initialState: TodoState = {
    todos: [],
    status: 'idle'
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get('https://api.todoist.com/rest/v2/tasks',{
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TODOIST_TOKEN}`
        }
    })
    return response?.data as Todo[];
})

export const addTodos = createAsyncThunk('todos/addTodos', async(content: string) => {
    const response = await axios.post('https://api.todoist.com/rest/v2/tasks',
     {
      content
    }, 
    {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TODOIST_TOKEN}`
        }
    })
    return response?.data as Todo;
})

export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async ({ id, content }: { id: number; content: string }) => {
      const response = await axios.post(
        `https://api.todoist.com/rest/v2/tasks/${id}`,
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TODOIST_TOKEN}`
          },
        }
      );
      return response.data as Todo;
    }
  );

  export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (id: number) => {
      await axios.delete(`https://api.todoist.com/rest/v2/tasks/${id}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TODOIST_TOKEN}`
        },
      });
      return id;
    }
  );

  const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodos.pending, (state: any) => {
          state.status = 'loading'
        })
        .addCase(fetchTodos.fulfilled, (state: any, action: any) => {
          state.status = 'idle';
          state.todos = action.payload
        })
        .addCase(fetchTodos.rejected, (state: any) => {
          state.status = 'failed'
        })
        .addCase(addTodos.fulfilled, (state: any, action: any) => {
          state.todos.push(action.payload)
        })
        .addCase(updateTodo.fulfilled, (state: any, action: any) => {
          const updateTodo = action.payload
          const index = state.todos.findIndex((todo: any) => todo.id === updateTodo.id)
          if(index !== -1){
            state.todos[index] = updateTodo
          }
        })
        .addCase(deleteTodo.fulfilled, (state: any, action: any) => {
          const idDelete = action.payload;
          state.todos = state.todos.filter((todo: any) => todo.id !== idDelete)
        })
    }
  })

  export const selectTodos = (state: {todos: TodoState}) => state.todos.todos
  export default todosSlice.reducer