import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { myStaffGG } from '../constants/myStaffConstant';

const TableHeader = () => (
  <thead>
    <tr>
      <th className="bg-indigo-900 text-white border text-left px-6 py-2">Month</th>
      <th className="bg-indigo-900 text-white border text-left px-6 py-2">Budget</th>
      <th className="bg-indigo-900 text-white border text-left px-6 py-2">Actual</th>
      <th className="bg-indigo-900 text-white border text-left px-6 py-2">Forecast</th>
      <th className="bg-indigo-900 text-white border text-left px-6 py-2">MYR</th>
    </tr>
  </thead>
);

const TableRow = ({ item }) => (
  <tr>
    <td className="border px-6 py-2">{item.myMonth}</td>
    <td className="border px-6 py-2">{item.Budget ? `$${item.formatNumber(item.Budget)}` : ''}</td>
    <td className="border px-6 py-2">{item.Actual ? `$${item.formatNumber(item.Actual)}` : ''}</td>
    <td className="border px-6 py-2">{item.Forecast ? `$${item.formatNumber(item.Forecast)}` : ''}</td>
    <td className="border px-6 py-2">{item.MYR ? `$${item.formatNumber(item.MYR)}` : ''}</td>
  </tr>
);

TableRow.propTypes = {
  item: PropTypes.shape({
    myMonth: PropTypes.string,
    Budget: PropTypes.number,
    Actual: PropTypes.number,
    Forecast: PropTypes.number,
    MYR: PropTypes.number,
    formatNumber: PropTypes.func,
  }).isRequired,
};

const StaffTable = () => {
  const formatNumber = useMemo(() => (num) => {
    if (Math.abs(num) > 999999) {
      return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(0) + 'M';
    } else if (Math.abs(num) > 999) {
      return Math.sign(num) * (Math.abs(num) / 1000).toFixed(0) + 'k';
    } else {
      return Math.sign(num) * Math.abs(num);
    }
  }, []);

  return (
    <div className="w-full h-full rounded-md relative p-8 border-2">
      <table className="shadow-lg bg-white border-separate">
        <TableHeader />
        <tbody>
          {myStaffGG.map((item, index) => (
            <TableRow key={index} item={{ ...item, formatNumber }} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;