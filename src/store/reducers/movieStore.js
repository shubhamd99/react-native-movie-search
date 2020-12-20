import { REHYDRATE } from "redux-persist";
import { ADD_MOVIES, CLEAR_MOVIES, SET_LOADING } from "../actions/types";

const initialState = {
    movies: [],
    loading: false,
}

export default function movieStore(state = initialState, action) {
    switch (action.type) {

         // persisted data replace the Redux store.
         case REHYDRATE: {
            if (action.payload) {
                const incoming = action.payload && action.payload.movieStore;
                if (incoming) return { ...state, ...incoming };   
            }
            return state;
        }

        case ADD_MOVIES :
            return {
                ...state,
                movies: action.payload,
                loading: false,
            };
        case CLEAR_MOVIES :
            return {
                ...state,
                movies: [],
                loading: false,
            };
        case SET_LOADING :
            return {
                ...state,
                loading: action.payload,
            };

        default:
            return state;
    }
}