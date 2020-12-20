import { REHYDRATE } from 'redux-persist/lib/constants';
import { ADD_SHORTLISTED_MOVIES, CLEAR_SHORTLISTED_MOVIES } from '../actions/types';

const initialState = {
    // Searching in Object by keys has O(1) Time Complexity as compared to filtering array which has O(n) time complexity
    savedMovies: {},
}

export default function shortListedMovies(state = initialState, action) {
    switch (action.type) {

        // persisted data replace the Redux store.
        case REHYDRATE: {
            if (action.payload) {
                // console.log("REHYDRATE...", action.payload);
                const incoming = action.payload && action.payload.shortListedMovies;
                if (incoming) return { ...state, ...incoming };   
            }
            return state;
        }

        case ADD_SHORTLISTED_MOVIES : {
            const movie = action.payload;
            const savedMovies = Object.assign({}, state.savedMovies);
            // Searching in Object by keys has O(1) Time Complexity as compared to filtering array which has O(n) time complexity
            savedMovies[movie.imdbID] = movie;

            return {
                ...state,
                savedMovies,
            };
        }
        case CLEAR_SHORTLISTED_MOVIES : {
            const movieId = action.payload;
            const savedMovies = Object.assign({}, state.savedMovies);
            delete savedMovies[movieId];

            return {
                ...state,
                savedMovies,
            };
        }

        default:
            return state;
    }
}