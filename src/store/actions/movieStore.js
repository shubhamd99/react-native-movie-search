
import { SET_LOADING, ADD_MOVIES, CLEAR_MOVIES } from "./types";

export function fetchMovies(searchTerm) {
    return async (dispatch, getState) => {

        dispatch(setLoading(true));

        const BASE_URL = "http://www.omdbapi.com/?type=movie&apikey=a1b5f9ec&s=";

        try {
            const response = await fetch(BASE_URL + searchTerm);
            if (response.ok) {
                const jsonRes = await response.json();
                if (jsonRes && jsonRes.hasOwnProperty("Error")) {
                    console.log("Error: ", jsonRes)
                    dispatch(clearMovies());
                    return;
                }

                dispatch(addMovies(jsonRes.Search));
            } else {
                dispatch(setLoading(false));
            }
        } catch (err) {
            console.error("Movies Fetch Error: ", err);
            dispatch(setLoading(false));
        }
    }
}

function setLoading(isLoading) {
    return {
        type: SET_LOADING,
        payload: isLoading,
    }
}

function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        payload: movies,
    }
}

export function clearMovies() {
    return {
        type: CLEAR_MOVIES,
    }
}