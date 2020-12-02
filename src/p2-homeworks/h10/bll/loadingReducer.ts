const initState = {
    loading:false
};
type loadingReducerACTypes = {

    type:"LOADING"
    payload: boolean
}

export type loadingReducerTypes = {
    loading:boolean
}
export const loadingReducer = (state = initState, action: loadingReducerACTypes): loadingReducerTypes => { // fix any


    switch (action.type) {
        case "LOADING": {
            return {...state, loading: action.payload}

        }
        default: return state;
    }
};

export const loadingAC = (payload:boolean): loadingReducerACTypes => {
    return {
        type:'LOADING',
        payload: payload
    }
}; // fix any