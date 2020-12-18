import { REHYDRATE } from 'redux-persist/lib/constants';

const initialState = {
    data: [],
}

export default function mainStore(state = initialState, action) {
    switch (action.type) {

        // persisted data replace the Redux store.
        case REHYDRATE: {
            if (action.payload) {
                const incoming = action.payload && action.payload.mainStore;
                if (incoming) return { ...state, ...incoming };   
            }
            return state;
        }

        default:
            return state;
    }
}