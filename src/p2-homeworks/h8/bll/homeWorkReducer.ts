
type PeopleType = {
    _id: number
    name: string
    age: number
}
type ActionType = {
    type: "sort" | 'check'
    payload: PayloadType
}

type PayloadType = number | 'down' | 'up'

export const homeWorkReducer = (state: Array<PeopleType>, action: ActionType): any => {
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


const sortArr = (arr:Array<PeopleType>, typ:PayloadType) => {
    if (typ === 'up') {
       return  [arr.sort((prev:PeopleType, next:PeopleType) => prev.name < next.name ? -1 : 1)]
    }
    if (typ === 'down'){
        return  [arr.sort((prev:PeopleType, next:PeopleType) => prev.name > next.name ? -1 : 1)]
    }
}
const checkAge = (arr:Array<PeopleType>, typ:PayloadType) => {
    if (typ === 18){
        return[...arr.filter((ar:PeopleType) => ar.age >= 18)]
    }
}