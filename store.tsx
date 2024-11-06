import {configureStore, createSlice} from '@reduxjs/toolkit';
import {Task} from "./types";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [] as Task[],
    reducers: {
        addTask: (state, action: { payload: { name: string, description: string } }) => {
            state.push({
                id: Date.now().toString(),
                name: action.payload.name,
                description: action.payload.description,
            });
        },
        deleteTask: (state, action: { payload: string }) => {
            return state.filter(task => task.id !== action.payload);
        },
    },
});

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
    },
});

export const actions = tasksSlice.actions

