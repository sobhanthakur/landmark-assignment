import {SET_ALERT,REMOVE_ALERT} from '../types'
const initialState = []

const alertReducer = (state=initialState,action) => {
    const {payload,type} = action
    switch (type) {
        case SET_ALERT:
            return [...state,payload]
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload)
        default:
            return state;
    }
}
export default alertReducer