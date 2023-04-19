import React from 'react'
import Card from './Card'
import Staff from './Staff'
import StaffTable from './StaffTable'
import KPICard from './KPICard'
import {myStaffSum} from '../constants/myStaffConstant'

const Fte = () => {

  function formatNumber(num) {
    if (Math.abs(num) > 999999) {
      return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(0) + 'M';
    } else if (Math.abs(num) > 999) {
      return Math.sign(num) * (Math.abs(num) / 1000).toFixed(0) + 'k';
    } else {
      return Math.sign(num) * Math.abs(num);
    }
  }

  return (
<div
      className={`h-90v grid grid-cols md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-4 p-4 font-quicksand  'bg-neutral-50'
      }`}
    >
      {' '}
      <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1 items-center w-full h-full p-4 flex flex-row justify-between space-x-4'>
      <KPICard
        title="Budget"
        value={formatNumber(myStaffSum.Budget)}
        growth="+3.5% since last month"
      />
      <KPICard
        title="Actuals"
        value={formatNumber(myStaffSum.Actual)}
        growth="+1.5% since last month"
      />
      <KPICard
        title="Forecast"
        value="$22,300"
        growth="+2.7% since last month"
      />
      <KPICard
        title="Actuals vs Prev Month"
        value="$28,000"
        growth="+4.1% since last month"
      />
      </div>
      <div className='md:col-span-2 xl:col-span-2 row-span-4'>
      <Staff/>
      </div>
      <div className='md:col-span-2 xl:col-span-1 row-span-4'>
      <StaffTable/>
      </div>

    </div>
  )
}

export default Fte