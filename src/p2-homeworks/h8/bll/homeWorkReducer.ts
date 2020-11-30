export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
            return sortArr(state, action.payload)

        }
        case "check": {

            return checkAge(state, action.payload)
        }
        default: return state
    }
};


const sortArr = (arr:any, typ:any) => {
    if (typ === 'up') {
       return  [...arr.sort((prev:any, next:any) => prev.name < next.name ? -1 : 1)]
    }
    if (typ === 'down'){
        return  [...arr.sort((prev:any, next:any) => prev.name > next.name ? -1 : 1)]
    }
}
const checkAge = (arr:any, typ:any) => {
    if (typ === 18){
        return[...arr.filter((ar:any) => ar.age >= 18)]
    }
}