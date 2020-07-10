import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
    form: reduxFormReducer
})

// Fluxo redux Component -> Action -> Reducer -> storage
//
// Criar index na pasta reducers
// Configurar a index principal para usar o redux
//      <Provider>
// RootReducer indica onde está minha pasta raiz para os reducers
//
//
//
//