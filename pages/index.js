import Layout from '../components/Layout';
import Prices from '../components/Prices';
import { useEffect, useState } from 'react';
// You can use any data fetching library
import fetch from 'node-fetch';

const Index = ({ data }) => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const currList = [];
    // convert an object list to an array list
    for (const item in data.bpi) {
      currList.push(data.bpi[item]);
    }
    setCurrency(currList);
  }, [data]);

  return (
    <Layout>
      <div>
        <h1 className='text-center'>Welcome to Bitz Price</h1>
        <Prices currency={currency} />
      </div>
    </Layout>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Index;
