import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../actions/index";

export default function TaxCheckbox() {
  const [state, setState] = React.useState({
    checkedBox: useSelector((state) => state.isSubscribed),
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log("clicked");
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(state.checkedBox);
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
        label="Opt-In for Auto Offset Payments "
      />
    </div>
  );
}
