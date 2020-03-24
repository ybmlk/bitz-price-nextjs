import { useState } from 'react';

const Prices = ({ currency }) => {
  const [current, setCurrent] = useState('USD');

  const handleChange = e => {
    setCurrent(e.target.value);
  };
  return (
    <div>
      <select className='form-control  col-md-5 m-auto' onChange={handleChange}>
        {currency.map(curr => {
          return (
            <option key={curr.code} value={curr.code}>
              {curr.code}
            </option>
          );
        })}
      </select>
      <br />
      {currency.map(curr => {
        if (curr.code === current) {
          return (
            <ul className='list-group' key={curr.code}>
              <li className='list-group-item col-md-5 m-auto'>
                Bitcoin rate for {curr.description}{' '}
                <span className='badge badge-primary'>{curr.code}</span>{' '}
                <strong>{curr.rate}</strong>
              </li>
            </ul>
          );
        }
      })}
    </div>
  );
};

export default Prices;
