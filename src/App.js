import { Typography } from "@material-ui/core";
import AppStyles from "./styles/App.styles";
import CarbonChart from "./components/CarbonChart";
import CarbonTable from "./components/CarbonTable";
import CarbonSummary from "./components/CarbonSummary";
import LottieSprout from "./components/LottieSprout";
import TaxCheckbox from "./components/TaxCheckbox";
import Header from "./components/Header";
import SubmitPayment from "./components/SubmitPayment";

function App() {
  return (
    <AppStyles>
      <div className="App">
        <Header />
        <Typography
          variant="h4"
          style={{ fontFamily: "Bebas Neue", margin: 10 }}
        >
          Your Carbon Footprint
        </Typography>

        <div>
          <LottieSprout />
          <CarbonChart className="Chart" />
        </div>

        <Typography
          variant="h6"
          style={{ fontFamily: "Bebas Neue", margin: 10 }}
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
