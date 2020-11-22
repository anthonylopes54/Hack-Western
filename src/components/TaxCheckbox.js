import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

export default function TaxCheckbox() {
  const [state, setState] = React.useState({
    checkedBox: true,
  });

  const handleChange = (event) => {
    console.log("clicked");
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const YellowCheckbox = withStyles({
    root: {
      color: "black",
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
