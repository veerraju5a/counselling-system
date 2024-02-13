import React from 'react'
import Hello from './Hello'
import Greet from './Greet'
import Message from './Message';
import Counter from './Counter';
import DataFetch from './DataFetch';
import FetchRegistrations from './FetchRegistrations';

const Home = () => {
  const products = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
    // Add more products as needed
  ];
  return (
    <div>
      {/* <FetchRegistrations/> */}
      {/* <DataFetch/> */}
      <Counter/> 
      {/* <Message/> */}
      {/* <Hello products={products} /> */}
      {/* <Hello name='raju' id='23'/>
      <Hello name='rajesh' id='24'/>
      <Hello name='ramesh' id='25'/>
      <Greet name='Veerraju' id='26'/>
      <Greet name='ramana' id='27'/> */}
    </div>
  )
}

export default Home