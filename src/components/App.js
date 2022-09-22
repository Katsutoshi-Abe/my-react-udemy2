import React, {useReducer, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers'

const APP_KEY = 'appWithRedux'

function App() {

  const appState = localStorage.getItem(APP_KEY)

  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState) // (使用するreducer, 初期値)

  useEffect(function() {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])
  
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className='container-fluid'>
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
  
    </AppContext.Provider>
  )
}

export default App
