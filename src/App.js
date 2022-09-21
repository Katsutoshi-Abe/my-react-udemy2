import React from 'react'
import { useState, useEffect } from 'react'

function App(props) {
  const [state, setState] = useState(props)
  const {name, price} = state

  // useEffectは複数設定できる
  useEffect(function() {  // 値がマウントされたり、変更されると発動
    console.log('This is like componemtDidMount or componemtDidUpdate')
  })
  useEffect(function() {  // 値が変更されると発動
    console.log('This is like componemtDidMount')
  }, [])
  useEffect(function() {  // nameが変わるたびに発動
    console.log('This callback is for name only')
  }, [name])


  // setState({...state, price: state.price + 1})
  // stateを一度展開して、変更のあったpriceのほうだけ処理を行う
  return (
    <React.Fragment> 
      現在の{name}は、{price}円です。 

      <button onClick={function () {setState({...state, price: price + 1})}}>+1</button>
      <button onClick={function () {setState({...state, price: price - 1})}}>-1</button>
      <button onClick={function () {setState(props)}}>Reset</button>

      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </React.Fragment>
  )
}


// 外部から（想定）与えられた初期値
App.defaultProps = {
  name:   'サンプル',
  price:  1000
}

export default App
