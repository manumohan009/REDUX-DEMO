// import redux from 'redux'
const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const produce = require('immer').produce
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// action type
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

// action creator
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// reducers
//(previousState, action) => newState
// const initialState = {
//     numberOfCakes: 10,
//     numberOfIceCreams: 20
// }




// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CAKE_ORDERED:
//             return {
//                 ...state,
//                 numberOfCakes: state.numberOfCakes - 1
//             }
//         case CAKE_RESTOCKED:
//             return {
//                 ...state,
//                 numberOfCakes: state.numberOfCakes + action.payload
//             }
//         case ICECREAM_ORDERED:
//             return {
//                 ...state,
//                 numberOfIceCreams: state.numberOfIceCreams - 1
//             }
//         case ICECREAM_RESTOCKED:
//             return {
//                 ...state,
//                 numberOfIceCreams: state.numberOfIceCreams + action.payload
//             }
//         default:
//             return state
//     }
// }

const initialCakeState = {
    numberOfCakes: 10,
}

const initialIceCreamState = {
    numberOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }
        default:
            return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        case ICECREAM_RESTOCKED:
            // return {
            //     ...state,
            //     numberOfIceCreams: state.numberOfIceCreams + action.payload
            // }
            return produce(state, (draft) => {
                draft.numberOfIceCreams = draft.numberOfIceCreams + action.payload
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {
    // console.log('updated state', store.getState())
    }
)

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))
const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(3)

unsubscribe();