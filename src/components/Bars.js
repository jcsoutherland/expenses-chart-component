import React, { useState } from 'react'
import './bars.scss'
import chartData from './data.json'

const Bars = () => {
  const [top, setTop] = useState(0)
  const [isHovering, setIsHovering] = useState('')

  chartData.forEach((data) => {
    if (data.amount > top) {
      setTop(data.amount)
    }
  })

  return (
    <div className='bar-graph'>
      {chartData.map((data) => {
        return (
          <div className='bar-container' key={data.day}>
            <div className='money-tag'>{data.amount}</div>
            <div
              className={
                data.amount === top ? 'bar-display top' : 'bar-display'
              }
              style={{ height: `${(data.amount / top) * 80}%` }}
            ></div>
            <span className='day-tag'>{data.day}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Bars
