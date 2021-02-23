import {createStore} from 'redux'



const reducer = (state = [], action ) => {

    switch (action.type) {
        case 'ADD_VALUE':
            return [
                ...state, 
                action.payload]

        case 'ADD_TIME':
            return [
                ...state,action.payload]

        case 'RESET':
            return state = undefined
        default:
            return state
    }
}

const store = createStore(reducer)

export {store}