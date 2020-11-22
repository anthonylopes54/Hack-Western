import styled from "styled-components";

const AppStyles = styled.div`
  .App {
    background-color: #82ca9d;
  }
  .background {
    z-index: -1;
  }
  .header {
    text-align: center;
    color: black;
  }
  .submitPaymentContainer {
    display: flex;
  }
  .amount {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2.5%;
  }
  .makePaymentButton {
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 10%;
  }
  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .checkbox-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lottie-sprout {
    z-index: 2;
    position: absolute;
    left: 105px;
    top: 142px;
  }
  .table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  .recharts-pie-sector:nth-child(odd) {
    fill: #fccf19;
  }
  .recharts-pie-sector:nth-child(even) {
    fill: #25acf5;
  }
  .recharts-surface {
    max-width: 411px;
  }
`;

export default AppStyles;
