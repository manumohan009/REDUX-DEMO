const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers
const test = require('./features/user/userSlice').test

console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(()=>{
    // console.log('Updated state', store.getState())
})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(3))




// unsubscribe()