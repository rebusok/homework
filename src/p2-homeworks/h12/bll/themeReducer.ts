const initState = {
    themeColor: 'some'
};
export type themeReducerTypes = {
    themeColor:string
}
type themeReducerAtionTypes = {
    type:"CHANGE_COLOR"
    payload: 'dark'| 'red' | 'some'
}

export const themeReducer = (state:themeReducerTypes = initState, action: themeReducerAtionTypes): themeReducerTypes => { // fix any
    switch (action.type) {
        case "CHANGE_COLOR":
            return changeThemeC(state, action.payload)
        default: return state;
    }
};

export const changeThemeC = (state:themeReducerTypes, payload:any): themeReducerTypes => {
    return {
        ...state,
        themeColor:payload
    }
}; // fix any