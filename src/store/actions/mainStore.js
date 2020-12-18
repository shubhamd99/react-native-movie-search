export function fetchData() {
    return async (dispatch, getState) => {

        const URL = "";
        const prevState = getState().mainStore.data;

        try {
            const resData = await fetch(URL);
            const data = await resData.json();
            dispatch({
                type: 'ADD_DATA',
                payload: data,
            });

        } catch (err) {
            console.error("Error: ", err);
        }
    }
}