import styled from "styled-components";

const AppStyles = styled.div`
  .background {
    z-index: -1;
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
    top: 182px;
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
