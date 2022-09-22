import React, {useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext';
import reducer from '../reducers'

function App() {

  const [state, dispatch] = useReducer(reducer, []) // (使用するreducer, 初期値)
  
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className='container-fluid'>
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
  
    </AppContext.Provider>
  )
}

export default App
