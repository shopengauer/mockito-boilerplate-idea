/**
 * Created by vasiliy on 20.11.16.
 */
import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    return  createStore(rootReducer, initialState)

}