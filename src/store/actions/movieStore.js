import { ToastAndroid } from 'react-native';
import { SET_LOADING, ADD_MOVIES, CLEAR_MOVIES } from "./types";

export function fetchMovies(searchTerm) {
    return (dispatch, getState) => {

        dispatch(setLoading(true));
        // ToastAndroid.show("fetchMovies Came: ", ToastAndroid.SHORT);

        const BASE_URL = "http://www.omdbapi.com/?type=movie&apikey=a1b5f9ec&s=";

        return fetch(BASE_URL + searchTerm, {
            method: 'GET',
        })
        .then((response) => {
            if (!response.ok) {
              throw Error("Fetch Movie Error");
            }
            return response;
        })
        .then(response => response.json())
        .then((data) => {

            if (data && data.hasOwnProperty("Error")) {
                console.log("Error: ", data)
                // ToastAndroid.show("Error: " + data.Error, ToastAndroid.SHORT);
                dispatch(clearMovies());
                return;
            }

            ToastAndroid.show("Search Result: " + data.Search.length, ToastAndroid.SHORT);
            dispatch(addMovies(data.Search));
            return data.Search;
        })
        .catch((err) => {
            console.error("Movies Fetch Error: ", err);
            dispatch(setLoading(false));
        });
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