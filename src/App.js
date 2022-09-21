import React from 'react'
import { useState } from 'react'

function App(props) {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  // リセットボタン
  function reset() {
    setPrice(props.price)
    setName(props.name)
  }


  return (  // returnは１つしか返せないので、<React.Fragment>で囲んで１つにする
    <React.Fragment> 
      現在の{name}は、{price}円です。 

      <button onClick={function () {setPrice(price + 1)}}>+1</button>
      <button onClick={function () {setPrice(price - 1)}}>-1</button>
      <button onClick={reset}>Reset</button>

      <input value={name} onChange={e => setName(e.target.value)} />
    </React.Fragment>
  )
}


// 外部から（想定）与えられた初期値
App.defaultProps = {
  name:   'サンプル',
  price:  1000
}

export default App
