import logo from './logo.svg';
import './App.css';
import StripeCheckout from "react-stripe-checkout";
import React, {useState} from 'react';

function App() {
  const [product, setProduct] = useState({
    name: 'test name',
    price: 100
  });

  const makePayment = token => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }
  
    return fetch('http://localhost:5000/payment', {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
    .then(response => {
      console.log("Response ", response)
      const {status} = response;
      console.log("STATUS ", status);
    })
    .catch(err => console.log(err));
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StripeCheckout
        stripeKey="pk_test_51Hq38uBGZ4H8Vh4vS7FUr6siXBRiD37jaQA6eCpuCesVeeLnV2v6uzUf1eA8MfNuDjsIIdA3guhGyzgR9d5o9qhF005I67NEDB"
        token={makePayment}
        name="Buy Offset"
        amount={100}
      >
        <button>Buy offset!</button>
      </StripeCheckout>
      </header>
    </div>
  );
}

export default App;