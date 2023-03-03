import styled from "styled-components";

const StyledTab = styled.section`
  .tab_label {
    font-size: 15px;
    font-weight: 700;
    color: #9d78bd;
    /* padding: 10px 0px; */
    margin-top: 20px;
    text-transform: capitalize;
    border-radius: 5px 5px 0px 0px;
  }
  .MuiTabs-scrollButtons {
    margin-top: 20px;
  }
  .tab_active {
    background-color: #fff;
  }
`;

export { StyledTab };
