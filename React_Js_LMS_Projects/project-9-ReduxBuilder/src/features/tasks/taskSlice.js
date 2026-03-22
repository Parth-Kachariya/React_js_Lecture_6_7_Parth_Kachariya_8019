import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all",
  search: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.tasks.push(action.payload);
      },
      prepare: (title, category, priority) => ({
        payload: {
          id: nanoid(),
          title,
          category,
          priority,
          completed: false,
        },
      }),
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addTask, deleteTask, toggleTask, setFilter, setSearch } = taskSlice.actions;
export default taskSlice.reducer;