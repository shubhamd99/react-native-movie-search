import { ADD_SHORTLISTED_MOVIES, CLEAR_SHORTLISTED_MOVIES } from './types';

export function addShortlistedMovie(movie) {
    return {
        type: ADD_SHORTLISTED_MOVIES,
        payload: movie,
    }
}

export function clearShortlistedMovie(movieId) {
    return {
        type: CLEAR_SHORTLISTED_MOVIES,
        payload: movieId,
    }
}