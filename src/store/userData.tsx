import {
    createSlice,
    configureStore,
    // PayloadAction 
} from "@reduxjs/toolkit";


const initialState = {
    todos: []
}

const todosSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            // addTodo: ( state, action: PayloadAction<Todo> ) => {
            //     const { id, title, text, date, color } = action.payload;
            //     const items = JSON.parse(localStorage.getItem('TODOS') || '[]' );
            //     localStorage.setItem('TODOS', JSON.stringify([ ...items, {id, title, text, date, color} ]));

            //     state.todos = [
            //         ...state.todos,
            //         {
            //             id,
            //             title,
            //             text, 
            //             date,
            //             color
            //         }
            //     ];
            // },
            // deleteTodo: ( state, action: PayloadAction<string> ) => {
            //     state.todos = state.todos.filter(({ id }) => id !== action.payload);
            //     let todosFromLocalStorage: Todo[] = JSON.parse( localStorage.getItem('TODOS') || '{}');
            //     todosFromLocalStorage = todosFromLocalStorage.filter( ({ id }) => id !== action.payload);
            //     localStorage.setItem('TODOS', JSON.stringify( todosFromLocalStorage ));
            // }
        }
    }
);

// export const { addTodo, deleteTodo } = todosSlice.actions;


const store = configureStore({
    reducer: {
        todos: todosSlice.reducer
    }
});

export default store;