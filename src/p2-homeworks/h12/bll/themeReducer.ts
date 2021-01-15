const initState = {
    themeColor: 'some'
};
export type themeReducerTypes = {
    themeColor:string
}
type themeReducerAtionTypes = {
    type:"CHANGE_COLOR"
    payload: {
        themeColor:'dark'| 'red' | 'some'
    }
}

export const themeReducer = (state:themeReducerTypes = initState, action: themeReducerAtionTypes): themeReducerTypes => { // fix any
    switch (action.type) {
        case "CHANGE_COLOR":
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
};

export const changeThemeC = (payload:any): themeReducerAtionTypes => {
    return {
        type: "CHANGE_COLOR",
        payload:{themeColor:payload}
    }
}; // fix any