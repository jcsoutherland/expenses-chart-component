import { React, useEffect } from 'react'
import './chart.scss'
import Bars from './Bars'
import chartData from './data.json'

const Chart = () => {
  return (
    <div className='chart-container'>
      <div className='top-container'>
        <div className='balance-container'>
          <span className='balance-header'>My balance</span>
          <span className='balance-number'>$921.48</span>
        </div>
        <div className='logo' />
      </div>
      <div className='main-container'>
        <span className='title-text'>Spending - Last 7 days</span>
        <div className='graph-container'>
          <Bars />
        </div>
        <hr className='hr-break' />
        <div className='bottom-container'>
          <span className='total-header-text'>Total this month</span>
          <div className='total-container'>
            <span className='money-count'>$478.33</span>
            <div className='percent-container'>
              <span className='percent-number'>+2.4%</span>
              <span className='percent-subtext'>from last month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
