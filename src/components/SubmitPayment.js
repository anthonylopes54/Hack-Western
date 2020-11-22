import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import StripeCheckout from "react-stripe-checkout";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { useDispatch } from "react-redux";
import { addOffset } from "../actions/index";

export default function SubmitPayment() {
  const [product, setProduct] = useState({
    name: "Paying Offset",
    price: 0,
  });

  const dispatch = useDispatch();

  const makePayment = (token) => {
    const body = {
      token,
      product: {
        name: product.name,
        price: product.price * 100,
      },
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("http://localhost:5000/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response ", response);
        const { status } = response;
        console.log("STATUS ", status);
        if (status === 200) {
          dispatch(addOffset(product.price * 100));
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="submitPaymentContainer">
      <FormControl fullWidth className="amount">
        <InputLabel
          htmlFor="standard-adornment-amount"
          style={{
            fontFamily: "Bebas Neue",
            fontSize: 20,
            // backgroundColor: "#25acf5",
            // textColor: "white",
          }}
        >
          Amount
        </InputLabel>
        <Input
          id="standard-adornment-amount"
          value={product.price}
          onChange={(event) =>
            setProduct({ name: product.name, price: event.target.value })
          }
          startAdornment={<InputAdornment position="end">$</InputAdornment>}
        />
      </FormControl>
      <StripeCheckout
        stripeKey="pk_test_51Hq38uBGZ4H8Vh4vS7FUr6siXBRiD37jaQA6eCpuCesVeeLnV2v6uzUf1eA8MfNuDjsIIdA3guhGyzgR9d5o9qhF005I67NEDB"
        token={makePayment}
        name="Buy Offset"
        amount={product.price * 100}
      >
        <Button
          className="makePaymentButton"
          variant="contained"
          // color="primary"
          size="small"
          style={{
            fontFamily: "Bebas Neue",
            backgroundColor: "#25acf5",
            textColor: "white",
          }}
        >
          Purchase Offset
        </Button>
      </StripeCheckout>
    </div>
  );
}
