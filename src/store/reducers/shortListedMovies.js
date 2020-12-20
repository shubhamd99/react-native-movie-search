import { REHYDRATE } from 'redux-persist/lib/constants';

const initialState = {
    savedMovies: [],
}

export default function shortListedMovies(state = initialState, action) {
    switch (action.type) {

        // persisted data replace the Redux store.
        case REHYDRATE: {
            if (action.payload) {
                const incoming = action.payload && action.payload.shortListedMovies;
                if (incoming) return { ...state, ...incoming };   
            }
            return state;
        }

        case "ADD_SHORTLISTED_MOVIES" :
            return {
                ...state,
                savedMovies: action.payload,
            };
        case "CLEAR_SHORTLISTED_MOVIES" :
            return {
                ...state,
                savedMovies: [],
            };

        default:
            return state;
    }
}