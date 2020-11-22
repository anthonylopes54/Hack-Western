import styled from "styled-components";

const AppStyles = styled.div`
  .background {
    z-index: -1;
  }

  .header {
    text-align: center;
    color: black;
  }
  .submitPaymentContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 70%;
  }
  .amount {
    width: 35%;
    background-color: #c0f8fa;
  }

  .makePaymentButton {
    margin-left: 10%;
    margin-right: 10%;
  }

  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
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
    top: 162px;
  }
  .table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 17px;
    margin-right: 17px;
    margin-bottom: 10px;
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
  .recharts-layer .recharts-pie-labels {
    max-height: 250px;
  }
`;

export default AppStyles;
