import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../actions/index";
import { Typography } from "@material-ui/core";
import { addEmmisions, addOffset, addTransaction } from "../actions";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";

export default function TaxCheckbox() {
  // const [state, setState] = React.useState({
  //   checkedBox: useSelector((state) => state.isSubscribed),
  // });
  let checkedBox = useSelector((state) => state.isSubscribed);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(event.target.checked);
    checkedBox = event.target.checked;
    console.log('handle change: ' + checkedBox);
    dispatch(toggleCheckbox());
  };

  
  const [pusher] = useState(
    new Pusher("5c419448d2783aa73354", {
      cluster: 'us3'
    })
  );
  const [channel] = useState(pusher.subscribe('my-channel'));
  
  useEffect(() => {
    channel.bind('my-event', (data) => {
      data = data.message;
      console.log(data);
      let transactions = [];
      let totalCost = 0;
      for (let i = 0; i < data.length; i++) {
        totalCost += data[i][3];

       const transaction = {
          date: "2020/11/22",
          item: data[i][1],
          carbonValue: data[i][2],
          dollarValue: data[i][3]
        }
        transactions.push(transaction);
      }
      dispatch(addTransaction(transactions));
      console.log('is subscribed: ' + checkedBox);
      console.log('total cost: ' + totalCost);
      //if (checkedBox) {dispatch(addOffset(totalCost))};
      dispatch(addEmmisions(totalCost));
    }
  )}, []);

  const YellowCheckbox = withStyles({
    root: {
      color: "#fccf19",
      "&$checked": {
        color: "#fccf19",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  return (
    <div className="checkbox-container">
      <FormControlLabel
        control={
          <YellowCheckbox
            checked={checkedBox}
            onChange={handleChange}
            name="checkedBox"
          />
        }
        label={
          <Typography
            style={{ fontFamily: "Bebas Neue", fontSize: 18, color: "black" }}
          >
            Opt-In for Offset Auto Payments
          </Typography>
        }
      />
    </div>
  );
}
