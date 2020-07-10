import { createStore } from 'redux'
import Reducers from './reducers/index'

//Dentro do create store devem ser enviados os reducers
export default  createStore(Reducers)

