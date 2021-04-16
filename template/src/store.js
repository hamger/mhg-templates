import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import models from './models'
import { useSelector, useDispatch } from "react-redux";

const generateReducer = (type) => {
    const reducer = (state = models[type].state, action) => {
        if (action.type === `${type}/setStatus`) {
            console.log('state', state)
            console.log('action', action)
            const res = Object.assign({}, state, action.payload)
            console.log(res)
            return res
        } else {
            return state;
        }
    }
    return reducer
}

const reducers = {}
Object.keys(models).forEach(item => {
    reducers[item] = generateReducer(item)
})

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;


const dispatchersMap = {}

export function useModel(type) {
    const state = useSelector(state => state[type]);
    const rootState = useSelector(state => state);
    const dispatch = useDispatch()
    const effects = models[type].effects((obj) => {
        dispatch({
            type: `${type}/setStatus`,
            payload: obj
        })
    })
    if (!dispatchersMap[type]) {
        const dispatchers = {}
        Object.keys(effects).forEach(item => {
            dispatchers[item] = (obj) => {
                return effects[item](obj, rootState)
            }
        })
        dispatchersMap[type] = dispatchers
    }
    return [state, dispatchersMap[type]]
}
