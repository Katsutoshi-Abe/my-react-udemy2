import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0) // jsの分割代入
  
  
  // countを増やす関数
  const increment = () => setCount(count + 1) // countに1を足した値を代入するイメージ
  const incrementB = () => setCount(previousCount => previousCount + 1)  // 別解 countの値を１増やすイメージ

  // countを減らす関数
  const decrement = () => setCount(count - 1)
  const decrementB = () => setCount(previousCount => previousCount - 1)  // 別解

  // countを2倍にする関数（演習）
  const double = () => setCount(count * 2)

  // countを0に戻す関数（演習）
  const reset = () => setCount(0)

  // countが3の倍数のときのみ、3で割る関数（演習）
  const division3 = () => {
    if (count % 3 === 0) {
      setCount(count / 3)
    }
  }
  /** 別解
   * const division3 = () => setCount(previousCount => {
   *    if (previousCount % 3 === 0) {
   *      return previousCount / 3
   *    } else {
   *      return previousCount
   *    }
   *  })
   */


  return (  // returnは１つしか返せないので、<React.Fragment>で囲んで１つにする
    <React.Fragment>  
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={incrementB}>+1</button>
        <button onClick={decrementB}>-1</button>
      </div>
      <div>
        <button onClick={double}>×2</button>
      </div>
      <div>
        <button onClick={division3}>÷3</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </React.Fragment>
  )
}

export default App
