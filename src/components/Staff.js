import React from 'react'

import { useState, useEffect, useContext } from 'react'

import Card from './Card'
import ChartFilter from './ChartFilter'
import { chartConfig } from '../constants/config'
import { myStaffGG, myStaffSum } from '../constants/myStaffConstant'
import StockContext from '../context/StockContext'

// import {
//   ComposedChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
//   Label,
//   LabelList,
//   Legend,
//   CartesianGrid,
//   Bar,
//   Line,
// } from 'recharts'

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';

const Staff = () => {
  const [mainChartData, setmainChartData] = useState(myStaffGG)

  



  useEffect(() => {
    fetchDateStaff()
  }, [])

  const fetchDateStaff = () => {
    let myStadd = myStaffGG
    console.log(myStaffSum)
    setmainChartData(myStadd)
  }

  return (


      <div className='md:col-span-2 row-span-4 w-full h-full rounded-md relative p-8 border-2 '>
        <ResponsiveContainer >
   
          <ComposedChart
            width={1600}
            height={800}
            data={mainChartData}
            margin={{ top: 25, right: 10, left: 10, bottom: 25 }}
          >
            <XAxis
              dataKey='myMonth'
              sclaeToFit='true'
              interval={0}
              // stroke={darkMode ? 'text-gray-900' : 'text-gray-900'}
            ></XAxis>
            <YAxis
              yAxisId={1}
              orientation='right'
              tickFormatter={(value) => {
                const valueInThousands = value / 1000
                const currencyFormatter = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })
                return currencyFormatter.format(valueInThousands) + 'K'
              }}
            />
            <Tooltip
              formatter={(value, name) => {
                if (value === 0) {
                  return null
                }
                const currencyFormatter = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })

                if (name === 'Actual' || name === 'Budget'|| name === 'Forecast'|| name === 'MYR') {
                  return currencyFormatter.format(value)
                }

                return new Intl.NumberFormat('en').format(value)
              }}
              wrapperStyle={{ backgroundColor: '#ccc' }}
            />

            <Legend verticalAlign='bottom' height={36} />
            <CartesianGrid
              vertical={false}
              stroke='rgb(199 210 254)'
              strokeDasharray='5 5'
            />
            <Bar
              yAxisId={1}
              dataKey='Actual'
              barSize={80}
              fill='#3730A3'
            ></Bar>
            <Bar
              yAxisId={1}
              dataKey='Forecast'
              barSize={80}
              fill='rgb(55,48,163,0.4)'
            //   fill='#A5B4FC'
            ></Bar>

            <Line
              yAxisId={1}
              strokeWidth={2}
              type='monotone'
              dataKey='Budget'
              stroke={'#ff0000'}

              activeDot={{ r: 6 }}
            />
            <Line
              yAxisId={1}
              strokeWidth={2}
              type='monotone'
              dataKey='MYR'
              stroke={'#f97316'}

              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

  )
}

export default Staff
