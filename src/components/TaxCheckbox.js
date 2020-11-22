import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../actions/index";
import { Typography } from "@material-ui/core";

export default function TaxCheckbox() {
  const [state, setState] = React.useState({
    checkedBox: useSelector((state) => state.isSubscribed),
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    dispatch(toggleCheckbox(state.checkedBox));
  };

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
            checked={state.checkedBox}
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
