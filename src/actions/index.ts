import axios from 'axios';
import { Dispatch } from 'redux'
import { ActionTypes } from './types';

interface Todo {
    id: number;
    title: string;
    completed: boolean
}

//An interface that describes the arguments to be passed into dispatch()
interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[]
}

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}
// Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.This allows for delayed actions, including working with promises.
