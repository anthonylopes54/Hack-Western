import { Typography } from "@material-ui/core";
import AppStyles from "./styles/App.styles";
import CarbonChart from "./components/CarbonChart";
import CarbonTable from "./components/CarbonTable";
import CarbonSummary from "./components/CarbonSummary";
import LottieSprout from "./components/LottieSprout";
import TaxCheckbox from "./components/TaxCheckbox";
import Header from "./components/Header";
import SubmitPayment from "./components/SubmitPayment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addEmmisions, addOffset, addTransaction } from "./actions";
import Pusher from "pusher-js";
import React, { useEffect, useState } from "react";

function App() {
  
  return (
    <AppStyles>
      <div className="App">
        <Header />
        <Typography
          variant="h4"
          style={{ fontFamily: "Bebas Neue", marginLeft: 20, marginRight: 20 }}
        >
          Your Carbon Footprint
        </Typography>

        <div>
          <LottieSprout />
          <CarbonChart className="Chart" />
        </div>

        <Typography
          variant="h5"
          style={{ fontFamily: "Bebas Neue", marginLeft: 20, marginRight: 20 }}
        >
          Recent Transactions
        </Typography>
        <CarbonTable />

        <CarbonSummary />
        <TaxCheckbox />
        <SubmitPayment />
      </div>
    </AppStyles>
  );
}

export default App;
